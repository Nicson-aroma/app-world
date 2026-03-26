import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getInstallApp } from '../../utilites/addToDB';

const InstallationPage = () => {
    const [installedApp , setInstalledApp] = useState([])
    const allApp = useLoaderData()
    useEffect(()=>{
        const installApp = getInstallApp()
        const convertAppStore = installApp.map(id=>parseInt(id))
        const myInstalledApp = allApp.filter(app =>(convertAppStore.includes(app.id)))
        console.log(myInstalledApp)
        setInstalledApp(myInstalledApp)
    },[])
    return (
        <div>
            <h1>Installatin Page</h1>
            <div className='grid grid gap-4'>
                {
                    installedApp.map(app=><div className='flex border border-b-gray-500 rounded'>
                        
                        <div>
                            <img src={app.image} className='w-20' alt="" />
                        </div> 
                        <div className='flex justify-between w-96 items-center'>
                            <div className=''>
                                <h1 className='text-xl '>{app.title}</h1>
                                <div className='flex'>
                                    <p className='me-4 text-succes text-xs'>{app.downloads}</p>
                                    <p className='me-4 text-danger text-xs'>{app.ratingAvg}</p>
                                    <p className='me-4 text-neutral text-xs'>{app.size}</p>
                                </div>
                            </div>
                            <button className='btn btn-warning text-white'>Uninstall</button>
                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default InstallationPage;