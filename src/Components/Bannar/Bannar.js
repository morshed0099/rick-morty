import React from 'react';
import './Bannar.css'
import bgImage from '../../media/Background.png'
import logoPng from '../../media/Logo.png'
import bubble from '../../media/bubble.png'
import portal from '../../media/portal.png'
import pill from '../../media/pill.png'
import gun from '../../media/Gun.png'

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
       
                            <img src={gun} className='absolute w-[120px] top-[75px] right-0 h-[124px] lg:w-[320px] lg:h-[332px] lg:right-[-200px] lg:top-[50px]' alt="" />
                        </div>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Bannar;