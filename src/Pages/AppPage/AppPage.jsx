import React from 'react';
import { useLoaderData } from 'react-router';
import SingleApp from '../../components/SingleApp/SingleApp';

const AppPage = () => {
    const allApp = useLoaderData()
    return (
        <div>
            <div className='text-center my-8'>
                <h1 className='text-4xl font-bold'>Trending App</h1>
                <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, tenetur.</p>
            <div className='grid lg:grid-cols-4 grid-cols-1 gap-2'>
                {
                    allApp.map((singleApp) =><SingleApp
                    key={singleApp.id}
                    singleApp={singleApp}></SingleApp>)
                }
            </div>
             <button className="btn btn-primary mt-8">Buy Now</button>
            </div>
        </div>
    );
};

export default AppPage;