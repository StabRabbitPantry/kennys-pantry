// Importing necessary dependencies
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import express from 'express';
import User from '../models/userModel.js';
import * as dotenv from 'dotenv';
dotenv.config();

// This function will generate a new JSON Web Token for a User
const generateAccessToken = (user) => {
    const token =  jwt.sign(user, `${process.env.JWT_SECRET}`, { algorithm: 'HS256' });
    return token;
}

// This is the salt constant used for bcrypt hashing
const SALT = 10;

const userController = {}

// userController.getUsers = (req, res, next) => {
//     User.find({}, (err, users) => {
//         //more logic here:
//         return next();
//     });
// }

userController.createUser = (req, res, next) => {
    //destruct req body
    const { username, password } = req.body;

    // This generates the salt
    bcrypt.genSalt(SALT, (e, salt) => {
        if (e) alert(e);
        // This hashes the password using the generated salt
        bcrypt.hash(password, salt, (e, hashed_password) => {
            if (e) alert(e);
            const favouritesArr = []; 
            User.create({ username, password: hashed_password , favouritesArr })
            .then(user => {
                const jwtToken = generateAccessToken({ id: user._id });

                //make data persist in res.locals
                res.locals.user = { user, jwtToken };
                next();
            })
            .catch(error => {
                return next({
                    log: `Error creating user in userController.createUser: ${error}`,
                    status: 500,
                    message: { err: 'Was not able to create new user' }
                })
            })
        })
    });
}

userController.getUserID = async (req, res, next) => {
    const { id } = req.params; // Use req.params for ID in URL

    try {
      const user = await User.findById(id); // Find user by ID
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.locals.user = user; // Save user to res.locals
      return next(); // Proceed to next middleware/route
    } catch (err) {
      return next({
        log: `Error in getUserID: ${err}`,
        status: 500,
        message: { err: 'Server error' },
      });
    }
  };

userController.verifyUser = (req, res, next) => {
    // Code Goes Here
    const { username, password } = req.body;
    User.findOne({ username })
        .then(user => {
            if (!password) {
                return next({ message: 'Missing required field'});
            }
            bcrypt.compare(password, user.password, (e, result) => {
                if (e) return next({ message: 'Error comparing passwords!'});
                if (result) {
                    const jwtToken = generateAccessToken({ id: user._id });
                    res.locals.user = user; 
                    return next();
                } else {
                    return next({ message: 'Invalid Password, try again!'});
                }
            })
        })
        .catch(error => {
            return next({
                //trigger global error handler
                log: `Error veryfing user in userController.verifyUser: ${error}`,
                status: 500,
                message: { err: 'Was not able to verify user' }
            })
        })
}

 // This function authenticates the user using their JWT
userController.jwtAuth = (req, res, next) => {

    const token = req.header('Authorization').replace('Bearer ', '');

    // This checks if the user has a JWT
    if (!token) {
        return res.status(401).json({ message: "Authentication Required!"})
    }

    // Verifies the token sent by client exists
    try {
        const decoded = jwt.verify(token, 'secret-key');
        req.user = decoded;
        return next();
    }

    // This catches any errors thrown when trying to verify the JSON Web Token
    catch (e) {
        return res.status(401).json({ message: "Error: Invalid Token" });
    }
}

userController.postFave = async (req, res, next) => {
    const { id } = req.params;
    const { favorites } = req.body;
  
    try {
      const user = await User.findById(id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      user.favorites.push(favorites);
      await user.save();
  
      res.locals.user = user;
      return next();
    } catch (err) {
      return res.status(500).json({ message: 'Server error', error: err.message });
    }
  };
  
export default userController;

