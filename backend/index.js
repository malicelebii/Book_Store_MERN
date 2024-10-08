import express from "express";
import mongoose from "mongoose";
import bookRoutes from './routes/bookRoutes.js'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()


const app = express();
app.use(cors({
  origin: 'https://book-store-mern-frontend-rho.vercel.app',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/books",bookRoutes)

app.listen(process.env.PORT || 5555, () => {
  console.log("Running");
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("baglandi"))
  .catch((err) => console.log(err));
