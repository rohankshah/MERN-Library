import React from "react";

function Card(props) {
    return (
        <div className="max-w-2xl w-3/5 md:w-auto px-8 py-4 mx-auto bg-violet-200 rounded-lg shadow-md">
            <div className="">
                <p className="mt-4 text-lg font-bold text-purple-800">{props.name}</p>
            </div>

            <div className="mt-4 flex justify-end items-center">
                <a href={"/authors/" + props.url} className="text-sm text-violet-600 hover:underline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                </a>
            </div>
        </div>
    )
}

export default Card;