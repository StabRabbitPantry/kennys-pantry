import express from 'express';
const router = express.Router();
import userController from '../controllers/userController.js';
// const userController = require('../controllers/userController.js');

router.get('/', userController.getUserID, (req, res) => {
    return res.status(200).json(res.locals.userData);
})

router.get('/:id', userController.getUserID, (req, res) => {
  return res.status(200).json(res.locals.user);
})

//redirect to a homepage;
router.post('/signup', userController.createUser, (req, res) => {
  return res.status(200).json(res.locals.user);
})


router.post('/login', userController.verifyUser, (req,res) => {
    return res.status(200).json(res.locals.user)
});

router.post('/favourites/:id', userController.postFave, (req,res) => {
  return res.status(200).json(res.locals.user)
})

export default router;