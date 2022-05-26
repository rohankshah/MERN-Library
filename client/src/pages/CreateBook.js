import React, { useState, useEffect } from "react";

function CreateBook() {
    const [allAuthors, setAllAuthors] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [authorId, setAuthorId] = useState(0);
    const [success, setSuccess] = useState(false);

    let bookId;

    function handleChange(e) {
        if (e.target.name === "name") {
            setSuccess(false);
            setName(e.target.value);
        }
        else if (e.target.name === "description") {
            setSuccess(false);
            setDescription(e.target.value);
        }
    }

    function authorChange(e) {
        setSuccess(false);
        setAuthorId(e.target.value);
    }

    async function handleClick() {
        const newBook = {
            name: name,
            description: description,
            author: authorId
        }
        await fetch("http://localhost:3001/book", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            method: "POST",
            body: JSON.stringify(newBook),
        })
        .then(data => console.log(data, "Success!"))
        .catch(error => console.log(error));
        
        // Get book ID
        await fetch("http://localhost:3001/book", {
            method: "GET"
        })
        .then(res => res.json())
        .then(data => {
            const curBook = data.filter(ele => ele.name === name);
            bookId = curBook[0]._id;
        })
        .catch(error => console.log(error));

        // Add bookID to author data
        
        await fetch("http://localhost:3001/author/" + authorId, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            method: "PATCH",
            body: JSON.stringify({
                books: bookId
            }),
        })
        setName('');
        setDescription('');
        setSuccess(true);
    }

    useEffect(() => {
        fetch("http://localhost:3001/author")
            .then(res => res.json())
            .then(data => setAllAuthors(data))
            .catch(error => console.log(error));
    }, [])

    return (
        <div className="container mx-auto">
            <h1 className="p-4 mt-4 text-center text-teal-800 text-xl font-bold underline underline-offset-4">Create Book</h1>
            <div className="mt-4">
                <div className="bg-sky-200 flex flex-col max-w-sm rounded-lg px-8 pt-6 pb-10 mx-auto">
                    <label className="text-blue-600 text-lg p-2 font-bold">Name</label>
                    <input type="text" name="name" className="p-2 bg-sky-50 rounded-lg" onChange={handleChange} value={name}></input>
                    <label className="text-blue-600 text-lg p-2 font-bold mt-4">Description</label>
                    <input type="text" name="description" className="p-2 bg-sky-50 rounded-lg" onChange={handleChange} value={description}></input>
                    <label className="text-blue-600 text-lg p-2 font-bold mt-4">Author</label>

                    <select name="author" className="p-2 bg-sky-50 rounded-lg" onChange={authorChange}>
                        <option defaultValue>Choose Author</option>
                        {allAuthors.map(author => {
                            return <option key={author._id} value={author._id}>{author.name}</option>
                        })}
                    </select>

                    <p className="text-green-400">{success && "Author created!"}</p>
                    <button onClick={handleClick} className="px-4 py-2 mt-12 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-800 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                        CREATE
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CreateBook;