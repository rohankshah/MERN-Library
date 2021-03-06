import mongoose from "mongoose";

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    name: {
        required: "true",
        type: String
    },
    description: {
        required: "true",
        type: String
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'authors'
    }
})

const Book = mongoose.model("books", bookSchema);

export default Book;