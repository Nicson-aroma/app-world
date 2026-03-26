import React from 'react';
import { Link } from 'react-router';

const SingleApp = ({ singleApp }) => {
    console.log(singleApp)
    const { id,image, title, downloads, ratingAvg } = singleApp;
    // console.log(id)
    return (
        <Link to={`/appdetails/${id}`}>
            <div className="card bg-base-100 w-68 shadow-lg border-gray-500 border-1 ">
                <figure className="px-2 pt-2">
                    <img
                        src={image}
                        alt={title}
                        className="rounded-xl " />
                </figure>
                <div className="card-body  px-2">
                    <h2 className="card-title text-center">{title}</h2>
                    <div className='flex justify-between '>
                        <div>{downloads}</div>
                        <div>{ratingAvg}</div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default SingleApp;