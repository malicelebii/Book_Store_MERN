import express from "express";
import { Book } from "../models/BookModel.js"

const router = express.Router();

router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400);
    }
    const { title, author, publishYear } = req.body;

    const newBook = { title, author, publishYear };

    const book = await Book.create(newBook);

    return res.status(201).send(book);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    return res.status(200).json(books);
  } catch (error) {
    return res.status(500).send(error);
  }
});
router.get("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    return res.status(200).json(book);
  } catch (error) {
    return res.status(500).send(error);
  }
});
router.put("/:id", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send("Error");
    }
    const book = await Book.findById(req.params.id);

    book.title = req.body.title;
    book.author = req.body.author;
    book.publishYear = req.body.publishYear;

    book.save();
    return res.status(200).json(book);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const bookToDelete = await Book.findByIdAndDelete(req.params.id);

    return res.status(200).json({ message: "Delete process done" });
  } catch (error) {
    console.log(error);
  }
});

export default router;
