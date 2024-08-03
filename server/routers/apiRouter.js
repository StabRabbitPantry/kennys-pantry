import express from 'express';
import apiController from '../controllers/apiController.js';
const router = express.Router();

router.get('/get' , apiController.getRecipes, (req, res) => {
  return res.status(200);
});

export default router;