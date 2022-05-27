import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import authorRouter from "./routes/authorRoutes.js";
import bookRouter from "./routes/bookRoutes.js";

mongoose
.connect(process.env.DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
.then(() => console.log("MongoDB started"))
.catch(error => console.log(error));

const app = express();
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use('/author', authorRouter);
app.use('/book', bookRouter);

app.get('/', (req, res) => {
    res.send('Home');
})

app.listen(process.env.port || '3001', () => {
    console.log('Server started at port 3000');
})
