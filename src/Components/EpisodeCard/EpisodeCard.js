import React from 'react';
import './EpisodeCard.css'


const EpisodeCard = () => {
    return (
        
            <div className='episode-card md:w-[360px] py-6 w-[252px] md:h-[96px] p-4 h-[42px] '>
                <div className='absolute left-6 '>
                    <p className='text-white regular md:text-[16px] text-[12px]'>S01E03</p>
                    <p className='text-white regular md:text-[20px] text-[16px] font-bold'>Lawnmower Dog</p>
                </div>
            </div>
        
    );
};

export default EpisodeCard;