import React from "react";

function Home() {
    return (
        <div className="container mx-auto">
            <h1 className="p-4 mt-4 text-center text-teal-800 text-xl font-bold underline underline-offset-4">Book Management App</h1>
            <div className="text-center md:text-left md:-x-10 mt-6 leading-8">
                <p className="text-lg underline underline-offset-2">General Overview:</p>
                <p className="mt-4 px-8 md:px-0">A full stack book management web app - complete with front-end and back-end.
                    The backend is made in Node and connected to a mongo database. The authors and books are stored in separate collections.
                    The backend is basically a REST API, allowing for CRUD operations on the database.
                    The front-end is made in React, and is completely responsive. Two forms to create author and books are available. There are separate pages to display all books and authors stored in the database. The books and authors have links to their individual pages. These individual pages are implemented using dynamic routing. They are automatically created using the info stored in the database.
                    The front-end also includes a responsive Navbar.
                </p>
                <p className="text-lg underline underline-offset-2 mt-4">Steps to make an entry:</p>
                <ol className="list-decimal mt-4 text-left px-12 md:px-4">
                    <li>Create an Author</li>
                    <li>Create the book, and in the author section add the author you just create</li>
                </ol>
            </div>
        </div>
    )
}

export default Home;