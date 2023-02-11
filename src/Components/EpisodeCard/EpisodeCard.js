import React from 'react';
import './EpisodeCard.css'
import episode from '../../media/Subtract.png'

const EpisodeCard = () => {
    return (
        
            <div className='episode-card p-6'>
                <div className='absolute left-6'>
                    <img src={episode} className="mt-12 w-[321px] h-[96px]" alt="" />
                    <p className='text-white'>S01E03</p>
                    <p className='text-white  font-bold'>PILOT</p>
                </div>
            </div>
        
    );
};

export default EpisodeCard;