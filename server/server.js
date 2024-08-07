// const express = require('express');
import path from 'path';
import express from 'express';
import apiRouter from './routers/apiRouter.js';
import usersRouter from './routers/usersRouter.js';
import mongoose from 'mongoose';
const app = express();
const port = 8080;
// const mongoose = require('mongoose');

// const mongoURI = process.env.NODE_ENV === ''

mongoose.connect('mongodb+srv://jwu:gv3LchQc0Vh9H2Kz@jwcluster.hen3ank.mongodb.net/')
  .then(() => console.log('Connteced to Mongo'))
  .catch(err => console.log(err));

app.use(express.json());
app.use(express.urlencoded());
//may need to import cookie Parser later... 

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.resolve('index.html'));
});


app.use('/api', apiRouter);
app.use('/api/users', usersRouter);

//Catch all handler
app.use((req, res) => {
  return res.status(404).send('404 Not Found');
});

//global error handler below
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' }
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  res.status(errorObj.status).json(errorObj.message);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

export default app;