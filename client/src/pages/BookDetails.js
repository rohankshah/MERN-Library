import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BookDetails() {

    const [book, setBook] = useState({});
    const [author, setAuthor] = useState('');
    const { id } = useParams();

    useEffect(() => {
        fetch("https://fast-brushlands-15449.herokuapp.com/book/" + id)
            .then(res => res.json())
            .then(data => {
                setBook(data);
                fetch("https://fast-brushlands-15449.herokuapp.com/author/" + data.author)
                .then(res => res.json())
                .then(data => setAuthor(data.name))
                .catch(error => console.log(error));
            })
            .catch(error => console.log(error));
    }, [])

    return (
        <div className="container mx-auto">
            <h1 className="p-4 mt-4 text-center text-teal-800 text-xl font-bold underline underline-offset-4">{book.name}</h1>
            <div className="mt-6 text-center">
                <a href={"/author/" + book.author} className="text-blue-600">{author}</a>
                <h3 className="text-center p-2">{book.description}</h3>
            </div>
        </div>
    )
}

export default BookDetails;