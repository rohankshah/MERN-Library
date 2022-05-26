import React, { useState } from "react";

function CreateAuthor() {

    const [name, setName] = useState('');
    const [country, setCountry] = useState('');
    const [age, setAge] = useState(0);
    const [success, setSuccess] = useState(false);

    function handleChange(e) {
        if (e.target.name === "name") {
            setSuccess(false);
            setName(e.target.value);
        }
        else if (e.target.name === "country") {
            setSuccess(false);
            setCountry(e.target.value);
        }
        else if (e.target.name === "age") {
            setSuccess(false);
            setAge(Number(e.target.value));
        }
    }

    function handleClick() {
        const newAuthor = {
            name: name,
            country: country,
            age: age
        }
        fetch("http://localhost:3001/author", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            method: "POST",
            body: JSON.stringify(newAuthor),
        })
        .then(data => console.log(data, "Success"))
        .catch(error => console.log(error));

        setSuccess(true);
        setName('');
        setCountry('');
        setAge(0);
    }

    return (
        <div className="container mx-auto">
            <h1 className="p-4 mt-4 text-center text-teal-800 text-xl font-bold underline underline-offset-4">Create Author</h1>
            <div className="mt-4">
                <div className="bg-sky-200 flex flex-col max-w-sm rounded-lg px-8 pt-6 pb-10 mx-auto">
                    <label className="text-blue-600 text-lg p-2 font-bold">Name</label>
                    <input type="text" name="name" className="p-2 bg-sky-50 rounded-lg" onChange={handleChange} value={name}></input>
                    <label className="text-blue-600 text-lg p-2 font-bold mt-4">Country</label>
                    <input type="text" name="country" className="p-2 bg-sky-50 rounded-lg" onChange={handleChange} value={country}></input>
                    <label className="text-blue-600 text-lg p-2 font-bold mt-4">Age</label>
                    <input type="number" name="age" className="p-2 bg-sky-50 rounded-lg" onChange={handleChange} value={age}></input>
                    <p className="text-green-400">{success && "Author created!"}</p>
                    <button onClick={handleClick} className="px-4 py-2 mt-12 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-800 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                        CREATE
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CreateAuthor