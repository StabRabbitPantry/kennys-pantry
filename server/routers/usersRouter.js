import express from 'express';
const router = express.Router();
import userController from '../controllers/userController.js';
// const userController = require('../controllers/userController.js');

router.get('/', userController.getUserID, (req, res) => {
    return res.status(200).json(res.locals.userData);
})

//redirect to a homepage;
router.post('/signup', userController.createUser, (req, res) => {
  return res.sendStatus(200);
})


router.post('/login', userController.verifyUser, (req,res) => {
    return res.status(200).json(res.locals.user)
});

export default router;