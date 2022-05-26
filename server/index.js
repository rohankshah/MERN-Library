import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import authorRouter from "./routes/authorRoutes.js";
import bookRouter from "./routes/bookRoutes.js";

mongoose.connect('mongodb://localhost:27017/libraryDB');

const app = express();
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use('/author', authorRouter);
app.use('/book', bookRouter);

app.get('/', (req, res) => {
    res.send('Home');
})

app.listen('3001', () => {
    console.log('Server started at port 3000');
})
