import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="w-100 height-full m-0 w-100 p-5 d-grid justify-content-center align-items-center">
            <div className="w-100 m-0">
                <div>
                    <div>
                        <img  className="w-100" src="https://i.ibb.co/djN6TFm/19-removebg-preview.png" alt="" />
                    </div>
                    <div>
                        <Link to="/home"><button className="py-2 px-5 border-2 card-border fs-4 fw-bold mt-4 bg-transparent text-light text-center">Back to Home</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;