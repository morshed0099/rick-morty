import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import EpisodeCard from './EpisodeCard';

const EpisodeCardCarusal = () => {
    var settings = {
        
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
             
            }
          },
          {
            breakpoint: 1020,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <div>        
        <Slider {...settings}>
          <div>
            <EpisodeCard />
          </div>
          <div>
          <EpisodeCard />
          </div>
          <div>
          <EpisodeCard />
          </div>
          <div>
          <EpisodeCard />
          </div>
          <div>
          <EpisodeCard />
          </div>
          <div>
          <EpisodeCard />
          </div>
          <div>
          <EpisodeCard />
          </div>
          <div>
          <EpisodeCard />
          </div>
        </Slider>
      </div>
    );
};

export default EpisodeCardCarusal;