import React from 'react';
import './card.css'
const Card = () => {
    return (
        <div className='card p-4 max-w[1770px] mx-auto'>
            <img src="https://lh3.googleusercontent.com/a/AEdFTp69KKFhdulA4anVsJjQNNeJZ5aerR35vIchmVlHjA=s360-p-rw-no" className='w-full h-[216px] mt-[-40px] rounded-xl mb-2' alt="" />
            <div className='flex justify-start absolute left-4 bottom-6 '>
                <h4 className='text-white '>Morshed</h4>
            </div>
        </div>
    );
};

export default Card;