import express from "express";
import Author from "../models/authorSchema.js";

const router = express.Router();

router.get('/', (req, res) => {
    Author
    .find({})
    .then(data => res.status(200).send(data))
    .catch(error => res.status(400).send(error))
})

router.get('/:id', (req, res) => {
    Author
    .findById(req.params.id)
    .then(data => res.status(200).send(data))
    .catch(error => res.status(400).send(error));
})

router.get('/populate/:id', (req, res) => {
    Author
    .findById(req.params.id)
    .populate('books')
    .then(data => res.status(200).send(data))
    .catch(error => res.status(400).send(error));
})

router.post('/', (req, res) => {
    const newAuthor = new Author({
        name: req.body.name,
        age: Number(req.body.age),
        country: req.body.country
    })
    newAuthor
    .save()
    .then(data => res.status(201).send(newAuthor))
    .catch(error => res.status(400).send(error));
})

router.patch('/:id', async (req, res) => {
    let bookArr = [];
    const id = req.params.id;
    await Author
    .findById(id)
    .then(data => bookArr = data.books);
    bookArr.push(req.body.books);
    console.log(bookArr);
    await Author
    .findByIdAndUpdate(id, {books: bookArr})
    .then(data => res.status(200).send(data))
    .catch(error => res.status(400).send(error));
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    Author
    .findByIdAndDelete(id)
    .then(data => res.status(202).send(data))
    .catch(error => res.status(400).send(error));
})

export default router;