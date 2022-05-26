import mongoose from "mongoose";

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    name: {
        required: "true",
        type: String
    },
    description: String,
    author: mongoose.Schema.Types.ObjectId
})

const Book = mongoose.model("books", bookSchema);

export default Book;