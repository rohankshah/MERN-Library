import express from "express";
import Book from "../models/bookSchema.js";

const router = express.Router();

router.get('/', (req, res) => {
    Book
    .find({})
    .then(data => res.status(200).send(data))
    .catch(error => res.status(400).send(error))
})

router.get('/:id', (req, res) => {
    Book
    .findById(req.params.id)
    .then(data => res.status(200).send(data))
    .catch(error => res.status(400).send(error));
})

router.get('/populate/:id', (req, res) => {
    Book
    .findById(req.params.id)
    .populate('author')
    .then(data => res.status(200).send(data))
    .catch(error => res.status(400).send(error));
})

router.post('/', (req, res) => {
    const newBook = new Book({
        name: req.body.name,
        description: req.body.description,
        author: req.body.author
    })
    newBook
    .save()
    .then(data => res.status(201).send(newBook))
    .catch(error => res.status(400).send(error));
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    Book
    .findByIdAndDelete(id)
    .then(data => res.status(202).send(data))
    .catch(error => res.status(400).send(error));
})

export default router;