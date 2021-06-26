import '@babel/polyfill';
import express from 'express';
import { dbConnect } from './config/db';
import studentsRouter from './router/studentRouter';

dbConnect();

const app = express();

app.use('/students', studentsRouter);

app.use('/', (req, res) => {
  res.status(200).json('Welcome on Tresor APP');
});

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});
