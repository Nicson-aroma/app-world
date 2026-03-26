import React, { useEffect, useState } from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import { useLoaderData } from 'react-router';
import SingleApp from '../../components/SingleApp/SingleApp';

const Home = () => {
    const allApp = useLoaderData();
    const [topApps, setTopApps] = useState([]);
    
//   const appsArray = Array.isArray(allApp)
//   ? allApp
//   : allApp?.data || [];

// const topApps = [...appsArray]
//   .sort((a, b) => b.ratingAvg - a.ratingAvg)
//   .slice(0, 8);
    useEffect(() => {
 const sorted = [...allApp]
    .sort((a, b) => b.ratingAvg - a.ratingAvg)
    .slice(0, 8);

    setTopApps(sorted)
}, [allApp]);
    // console.log(topApps)

    return (
        
        <div>
            <HeroSection></HeroSection>
            {/* top App Section */}
            <div className='text-center my-8'>
                <h1 className='text-4xl font-bold'>Trending App</h1>
                <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, tenetur.</p>
            <div className='grid lg:grid-cols-4 grid-cols-1 gap-2'>
                {
                    topApps.map((singleApp) =><SingleApp
                    key={singleApp.id}
                    singleApp={singleApp}></SingleApp>)
                }
            </div>
             <button className="btn btn-primary mt-8">Buy Now</button>
            </div>
        </div>
    );
};

export default Home;