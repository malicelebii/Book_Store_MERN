import express from "express";
import { PORT } from "./config.js ";
import mongoose from "mongoose";
import bookRoutes from './routes/bookRoutes.js'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()


const app = express();
app.use(cors())



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/books",bookRoutes)

app.listen(PORT, () => {
  console.log("Running");
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("baglandi"))
  .catch((err) => console.log(err));
