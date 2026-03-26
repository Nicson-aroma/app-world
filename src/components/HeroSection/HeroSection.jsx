import React from 'react';
import { Link } from 'react-router';
import heroImage from '../../assets/hero.png'
const HeroSection = () => {
    return (
        <div className='hero bg-base-200'>
            <div className=" ">
                <div className=" text-center m-4">
                    <div className="lg:max-w-md mx-auto">
                        <h1 className="text-5xl font-bold text-center">We Build <span className="text-[#7A42E9]"> Productive </span> Apps</h1>                        
                    </div>
                    <div>
                        <p className="py-6 max-w-3xl">
                            At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.
                        </p>
                        <button className="btn  me-4"> <Link to="https://play.google.com/store/games?hl=en&pli=1">Google Play</Link></button>
                        <button className="btn "><Link to="https://play.google.com/store/games?hl=en&pli=1">App Store</Link> </button>
                    </div>
                </div>
                <div>
                    <img src={heroImage} className='mt-8 lg:max-w-3xl' alt="" />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;