import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const { MONGO_URL } = process.env;

export const dbConnect = () => {
  mongoose
    .connect(MONGO_URL, {
      useCreateIndex: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then(() => console.log('Connected to DB'));
};
