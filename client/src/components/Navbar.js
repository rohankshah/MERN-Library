import React, { useState } from "react";

function Navbar() {

    const [toggled, setToggled] = useState(false);

    function handleToggle() {
        toggled ? setToggled(false) : setToggled(true);
    }

    return (
        <div className="bg-cyan-50 shadow-md">
            <div className="md:container mx-auto md:flex justify-between items-center">
                <div className="text-teal-800 text-lg font-bold flex justify-between items-center p-5 md:py-6 md:px-0">
                    <span>BOOKS</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} onClick={handleToggle}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={toggled ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                </div>
                <ul className={toggled ? "text-teal-800 text-md font-bold md:flex items-center" : "text-teal-800 text-md font-bold md:flex items-center hidden md:visible"}>
                    <li className="px-4 py-4 shadow-md md:shadow-none md:py-0 md:px-4 hover:bg-teal-700 md:hover:bg-transparent hover:text-gray-800">
                        <a href="/">HOME</a>
                    </li>
                    <li className="px-4 py-4 shadow-md md:shadow-none md:py-0 md:px-4 hover:bg-teal-700 md:hover:bg-transparent hover:text-gray-800">
                        <a href="/author">AUTHORS</a>
                    </li>
                    <li className="px-4 py-4 shadow-md md:shadow-none md:py-0 md:px-4 hover:bg-teal-700 md:hover:bg-transparent hover:text-gray-800">
                        <a href="/book">BOOKS</a>
                    </li>
                    <li className="px-4 py-4 shadow-md md:shadow-none md:py-0 md:px-4 hover:bg-teal-700 md:hover:bg-transparent hover:text-gray-800">
                        <a href="/createauthor">CREATE AUTHOR</a>
                    </li>
                    <li className="px-4 py-4 shadow-md md:shadow-none md:py-0 md:px-4 hover:bg-teal-700 md:hover:bg-transparent hover:text-gray-800">
                        <a href="/createbook">CREATE BOOK</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;