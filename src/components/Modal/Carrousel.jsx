import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import admin from '../../assets/videos/adminBa.gif';
import mina from '../../assets/videos/minaBa.gif';
import lca from '../../assets/videos/lcaBa.gif';
import './modal.scss';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} variant="dark">
      <Carousel.Item interval={20000}>
        <img
          className="d-block w-100 rounded-bottom"
          src={admin}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={20000}>
        <img
          className="d-block w-100 rounded-bottom"
          src={mina}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={20000}>
        <img
          className="d-block w-100 rounded-bottom"
          src={lca}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
