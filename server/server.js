// const express = require('express');
import path from 'path';
import express from 'express';
import apiRouter from './routers/apiRouter.js';
const app = express();
const port = 8080;

app.use(express.json());

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.resolve('index.html'));
});

app.use('/api', apiRouter);

//Catch all handler
app.use((req, res) => {
  return res.status(404).send('404 Not Found');
});

//global error handler below
const defaultErr = {
  log: 'Express error handler caught unknown middleware error',
  status: 500,
  message: { err: 'An error occurred' }
};


app.use((err, req, res, next) => {
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  res.status(errorObj.status).json(errorObj.message);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

export default app;