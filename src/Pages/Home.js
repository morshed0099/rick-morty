import React from 'react';
import Bannar from '../Components/Bannar/Bannar';
import Curosal from '../Components/Curosal/Curosal';
import EpisodeCardCarusal from '../Components/EpisodeCard/EpisodeCardCarusal';
import LocationCarusal from '../Components/Location/LocationCarusal';
import bgImage from '../media/Background.png'
import bag from '../media/bag.png'
import start from '../media/Star.png'


const Home = () => {
    return (
        <div className='relative'>
            <div className='background-light'>
            </div>
            <div className=" bg-opacity-70 bg-black" style={{ backgroundImage: `url(${bgImage})` }}>
               
                <Bannar />
                <div className='max-w-[1770px] mx-auto px-8'>
                    <div className='flex justify-between items-center'>
                        <h3 className='regular mb-4 text-white font-semibold md:text-[24px] text-[20px]'>Meet The Cast</h3>
                        <button className='py-[10px] px-[24px] rounded-xl border border-[#9DFE00] font-normal mb-4 regular hover:bg-[#9DFE00] hover:text-black'>View All</button>
                    </div>
                    <Curosal />
                </div>
            </div>

            <div className='relative bg-opacity-70 bg-black' style={{
                backgroundImage: `url(${bag})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right top",

            }}>
                
                <div className=' bg-opacity-70 bg-black' style={{
                    backgroundImage: `url(${start})`,
                    backgroundPosition: 'center',                 
                    backgroundRepeat: "no-repeat",
                                     
                }}>
                 
                    <div className='max-w-[1770px] mx-auto px-8'>
                        <h4 className='font-bold regular  text-white mb-4 md:text-[24px] text-[20px]'>Episode</h4>
                        <EpisodeCardCarusal />
                    </div>
                    <div className='max-w-[1770px]   mx-auto px-8'>
                        <h4 className='font-bold regular  text-white mb-4 md:text-[24px] text-[20px]'>Location</h4>
                        <LocationCarusal />
                    </div>
                </div>
            </div>
            <div className='background-left'>
            </div>
        </div>
    );
};

export default Home;