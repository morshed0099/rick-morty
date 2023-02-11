import React from 'react';
import Bannar from '../Components/Bannar/Bannar';
import Curosal from '../Components/Curosal/Curosal';
import EpisodeCard from '../Components/EpisodeCard/EpisodeCard';
import EpisodeCardCarusal from '../Components/EpisodeCard/EpisodeCardCarusal';
import bgImage from '../media/Background.png'
import bag from '../media/bag.png'
import start from '../media/Star.png'


const Home = () => {
    return (
        <div className='relative'>
            <div className='background-light'>
            </div>
            <div className=' p-0 m-0' style={{
                backgroundImage: `url(${bgImage})`,
                backgroundPosition: 'center',
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
            }}
            >
                <Bannar />
                <div className='max-w-[1770px]  mx-auto px-8'>

                    <div className='flex justify-between items-center'>
                        <h3 className='regular mb-4 text-white font-semibold md:text-[24px] text-[20px]'>Meet The Cast</h3>
                        <button className='py-[10px] px-[24px] rounded-xl border border-[#9DFE00] font-normal mb-2 regular hover:bg-[#9DFE00] hover:text-black'>View All</button>
                    </div>
                    <Curosal />
                   
                </div>
            </div>
            <div style={{
                backgroundImage: `url(${bag})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right top",

            }}>
                <div style={{
                    backgroundImage: `url(${start})`,
                    backgroundPosition: 'center',
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",

                }}>
                    <div className='max-w-[1770px]  mx-auto px-8'>
                        <EpisodeCardCarusal />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;