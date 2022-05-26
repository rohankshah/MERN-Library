import mongoose from "mongoose";

const Schema = mongoose.Schema;

const authorSchema = new Schema({
    name: {
        required: "true",
        type: String
    },
    age: Number,
    country: String,
    books: [mongoose.Schema.Types.ObjectId]
})

const Author = mongoose.model("authors", authorSchema);

export default Author;