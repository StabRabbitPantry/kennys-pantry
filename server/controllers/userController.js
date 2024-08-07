// Importing necessary dependencies
import * as jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import express from 'express';
import User from '../models/userModel.js';

// This function will generate a new JSON Web Token for a User
const generateAccessToken = (user) => {
    const token =  jwt.sign(user, process.env.JWT_SECRET, { algorithm: 'HS256' });
    return token;
}

const jwtAuth = (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '')

    // Verifies the token sent by client matches the one stored by user
    try {
        const decoded = jwt.verify(token, 'secret-key');
        req.user = decoded;
        return next();
    }

    // This catches any errors thrown when trying to verify the JSON Web Token
    catch (e) {
        res.status(401).json({ message: "Invalid Token" });
    }
}

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
    User.create({ username, password })
        .then(user => {
            //make data persist in res.locals
            res.locals.user = user;
            console.log('This is the user object: ', user);
            return next();
        })
        .catch(error => {
            return next({
                log: `Error creating user in userController.createUser: ${error}`,
                status: 500,
                message: { err: 'Was not able to create new user' }
            })
        })
}

userController.getUserID = (req, res, next) => {
    // Code Goes Here
    const {username} = req.body;
    User.findOne({username})
    .then(user=>{
        if(!user) {
            return next({
                log: 'Error in getUserId',
                status:404,
                message: {err:"Usr Not Found"}
            })
        }
        res.locals.userId= user._id;
        return next();
    })
    .catch (error =>{
        return next({
            log: `Error : $(error)`,
            status:400,
            message:{err: "broken"}
        })
    })
}

userController.verifyUser = (req, res, next) => {
    // Code Goes Here
    const { username, password } = req.body;
    User.findOne({ username })
        .then(user => {
            // console.log('verifyUser has found: ', username);
            // console.log(user);
            if (user.username !== username || user.password !== password){
                res.redirect('/login') //
            }
            res.locals.user = user; 
            return next();
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
 


export default userController;