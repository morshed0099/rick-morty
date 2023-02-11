import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Card from '../Card/Card';

const Curosal = () => {
    var settings = {
        
        infinite: false,
        speed: 500,
        slidesToShow: 5,
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
            <Card />
          </div>
          <div>
          <Card />
          </div>
          <div>
          <Card />
          </div>
          <div>
          <Card />
          </div>
          <div>
          <Card />
          </div>
          <div>
          <Card />
          </div>
          <div>
          <Card />
          </div>
          <div>
          <Card />
          </div>
        </Slider>
      </div>
    );
};

export default Curosal;