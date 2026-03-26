import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const AppDetails = () => {
    const {id} = useParams()
    const allApp = useLoaderData()
    const appId = parseInt(id)
    const App = allApp.find(singleApp =>(singleApp.id === appId))
    const { companyName, image, title,  description, size, reviews, ratingAvg, downloads} = App

    
    

    return (
        <div className='my-6 bg-gray-300'>
            <div className='flex'>
                <div><img src={image} className='w-50' alt="" /></div>
                <div className='mx-4'>
                    <div>
                        <h1 className='text-2xl'>{title}</h1>
                        <p className='text-xs'>Developed by: <span className='text-violet-700'>{companyName}</span> </p>
                    </div>
                    <div className="divider"></div>
                    <div className='flex justify-start'>
                        <div> 
                            <p>{downloads}</p>
                        </div>
                        <div> 
                            <p>{ratingAvg}</p>
                        </div>
                        <div> 
                            <p>{reviews}</p>
                        </div>
                    </div>
                    <div className='mt-10 '>
                        <button  className="btn btn-success text-white ">Install ({size} MB) </button>
                    </div>
                </div>
                
            </div>
            <div className="divider"></div>
            <div>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default AppDetails;