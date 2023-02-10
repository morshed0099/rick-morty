import React from 'react';
import './Bannar.css'
import bgImage from '../../media/Background.png'
import logoPng from '../../media/Logo.png'
import bubble from '../../media/bubble.png'
import portal from '../../media/portal.png'
import pill from '../../media/pill.png'
import gun from '../../media/Gun.png'
import { PlayCircleIcon } from '@heroicons/react/24/solid'

const Bannar = () => {
    return (
        <div>
            <div className='flex justify-center items-center' style={{
                backgroundImage: `url(${bgImage})`,
                backgroundPosition: 'center',
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"

            }}>

                <div>
                    <div>
                        <div className='flex justify-center items-center mt-[58px] mb-[155px]'>
                            <img className='h-[50px]' src={logoPng} alt="" />
                        </div>

                        <div className='flex justify-center items-center relative'>
                            <div>
                                <h1 className="items-center mr-4 heading-text text-center text-5xl lg:text-9xl font-bold">
                                    <span className='flex justify-center items-center'>
                                        <span className='relative'>
                                            <span className='bold-italic text-white'>THE</span>
                                            <img className='absolute top-[-45px] left-[-55px]  lg:top-[-115px] lg:left-[-150px] ' src={bubble} alt="" />
                                        </span>
                                        <img src={portal} className='mr-4 ml-4 w-[70px] lg:mt-[-40px]  lg:w-[225px] lg:h-[145px]' alt="" />
                                        <span className='bold-tavels flex text-transparent bg-clip-text bg-gradient-to-r from-green to-light'>RICK <span className='ml-4'><img src={pill}
                                            alt="" className="ml-12 hidden lg:block" />& </span></span>
                                    </span>
                                    <span className='flex text-center'>
                                        <span className='bold-tavels  text-transparent bg-clip-text bg-gradient-to-r from-green to-light'>
                                            MORTY
                                        </span>
                                        <span className='bold-italic ml-3 text-white'>WIKI</span>
                                    </span>

                                </h1>
                            </div>

                            <img src={gun} className='absolute w-[120px] top-[50px] right-[-65px] h-[124px] lg:w-[320px] lg:h-[332px] lg:right-[-200px] lg:top-[50px]' alt="" />
                        </div>
                        <div className='flex flex-col-reverse lg:flex-row  regular gap-12 mt-[21px] justify-center items-center'>
                            <button className='px-[25px] rounded-full flex justify-center py-[17px] bg-gradient-to-r from-green to-light w-[200px] h-[58px] text-white'> <PlayCircleIcon className="h-6 w-6 text-white mr-4" /> Watch Now</button>
                            <p className='text-light text-[14px]  w-[370px] mr-8'>
                                Brilliant but boozy scientist Rick hijacks his fretful teenage grandson, Morty, for wild escapades in other worlds and alternate dimensions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Bannar;