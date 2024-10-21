import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    name : String,
    price : Number,
    cateogary : String,
    image : String,
    title : String
})

const Book = mongoose.model("Book",bookSchema);

export default Book;