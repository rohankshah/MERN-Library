import React, { useEffect, useState } from "react";
import Card from "../components/Card";

function Authors() {
    
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        fetch("https://fast-brushlands-15449.herokuapp.com/author")
        .then(res => res.json())
        .then(data => setAuthors(data))
        .catch(error => console.log(error));
    }, [])

    return (
        <div className="container mx-auto">
            <h1 className="p-4 mt-4 text-center text-teal-800 text-xl font-bold underline underline-offset-4">Authors</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                {authors.map((author) => {
                    return <Card name={author.name} key={author._id} url={"/author/" + author._id} />
                })}
            </div>
        </div>
    )
}

export default Authors;