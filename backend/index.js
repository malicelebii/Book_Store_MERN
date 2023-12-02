import express from "express";
import { PORT } from "./config.js ";
import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";
import bookRoutes from './routes/bookRoutes.js'
import cors from 'cors'


const app = express();
app.use(cors())



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/books",bookRoutes)

app.listen(PORT, () => {
  console.log("Running");
});

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("baglandi"))
  .catch((err) => console.log(err));
