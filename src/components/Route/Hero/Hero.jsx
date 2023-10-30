
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Hero = () => {
  const imageStyle = {
    maxHeight: '400px', // Adjust the maximum height as needed
    // width: 'auto', // This ensures the aspect ratio is maintained
  };

  return (
    <Carousel>
      <div>
        <img src="https://scandiweb.com/blog/wp-content/uploads/2023/04/luxury-ecommerce-redesign-2023-banner.gif" style={imageStyle} />
      </div>
      <div>
        <img src="https://media.tenor.com/Dmo5wteMpKUAAAAC/continetal-e-commerce.gif" style={imageStyle} />
      </div>
      <div>
        <img src="https://media.tenor.com/Dmo5wteMpKUAAAAC/continetal-e-commerce.gif" style={imageStyle} />
      </div>
    </Carousel>
  );
}

export default Hero;

