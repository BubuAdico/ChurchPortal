import React from "react";
import { Link } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";
import image from "/images/404.svg";

const NotFound = () => {
return (
    <div className="">
    <div className="grid grid-cols-2 justify-center my-14 items-center w-[80%] mx-auto">
        <div className="flex gap-4 flex-col">
        <h1 className="font-bold text-[clamp(1rem,5vw,6rem)] text-yellow-800 ">
            Page Not Found
        </h1>
        <span className="min-w-[50%] ">
            You've landed somewhere you shound not have. Even google does not
            know this page exists.
        </span>

        <Link className="flex items-center gap-2 text-yellow-700" to="/">
            <FaArrowCircleLeft />
            <span>Back to Homepage</span>
        </Link>
        </div>
        <div>
        <img src={image} alt="404" />
        </div>
    </div>
    </div>
);
};

export default NotFound;
