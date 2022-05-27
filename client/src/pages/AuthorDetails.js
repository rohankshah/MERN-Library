import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function AuthorDetails() {

    const [author, setAuthor] = useState({});
    let { id } = useParams();

    useEffect(() => {
        fetch("http://localhost:3001/author/populate/" + id)
            .then(res => res.json())
            .then(data => {
                setAuthor(data);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <div className="container mx-auto">
            <h1 className="p-4 mt-4 text-center text-teal-800 text-xl font-bold underline underline-offset-4">{author.name}</h1>
            <div className="mt-6">
                <h3 className="text-center p-2">Age: {author.age}</h3>
                <h3 className="text-center p-2">Country: {author.country}</h3>
            </div>

            <h1 className="p-4 mt-4 text-center text-teal-800 text-md font-bold underline underline-offset-4">Books</h1>

            <table className="table-auto mx-auto w-4/5 md:w-6/7 border-solid border-2 mt-4">
                <thead>
                    <tr>
                        <th className="border px-8 py-4">Name</th>
                        <th className="border px-8 py-4">Description</th>
                    </tr>
                </thead>
                <tbody>
                    {author.books?.map(book => {
                        return (
                            <tr key={author._id}>
                                <td className="border px-8 py-4">
                                    <a href={"/book/" + book._id} className="text-blue-800">{book.name}</a>
                                </td>
                                <td className="border px-8 py-4">{book.description}</td>
                            </tr>
                    )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default AuthorDetails;