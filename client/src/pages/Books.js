import React, { useEffect, useState } from "react";
import Card from "../components/Card";

function Book() {
    
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/book")
        .then(res => res.json())
        .then(data => setBooks(data))
        .catch(error => console.log(error));
    }, [])

    return (
        <div className="container mx-auto">
            <h1 className="p-4 mt-4 text-center text-teal-800 text-xl font-bold underline underline-offset-4">Books</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                {books.map((book) => {
                    return <Card name={book.name} key={book._id} url={"/book/" +book._id} />
                })}
            </div>
        </div>
    )
}

export default Book;