import '@babel/polyfill';
import express, { json } from 'express';
import { dbConnect } from './config/db';
import studentsRouter from './router/studentRouter';

dbConnect();

const app = express();

app.use(json());
app.use('/students', studentsRouter);

app.use('/', (req, res) => {
  res.status(200).json('Welcome on Tresor APP');
});

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});
