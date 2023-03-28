import React, { useState } from 'react';
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import image1 from "../../Images/image1.jpg" 
import image2 from "../../Images/image2.png" 
import image3 from "../../Images/image3.jpg" 

const Image = styled.img`
    width: 100%;

`
const Item = styled.div`
    height: 100%;
`
const Label = styled.span``

function ControlledCarousel() {
  return (
    <div>
    <Carousel autoPlay={true} interval={3000} transitionTime={500} infiniteLoop={true} showStatus={false}>
      <Item>
        <Image src={image1} />
      </Item>
      <Item>
      <Image src={image2} />
      </Item>
      <Item>
      <Image src={image3} />
      </Item>
    </Carousel>
    </div>
  );
}

export default ControlledCarousel;