import React from "react"

import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';
import styled ,{css}from 'styled-components';



const width = '100%', height='300px';
const Container = styled.div`
  display: flex;    
  text-align: center;
  margin-top: 4rem;
  
  position: relative;
  top: 0rem;
  width: ${width};
  height: ${height};
`;
const Arrow = styled.div`
  z-index: 100;
  line-height: 150px;
  text-align: center;
  position: absolute;
  margin-top: 2rem;
  width: 12%;
  font-size: 3em;
  cursor: pointer;
  user-select: none;
  ${props => props.right ? css`left: 90%;` : css`left: -5%;`}
`;
const CarouselUI = ({ position, handleClick, children }) => (
  <Container>
      {children}
      <Arrow onClick={handleClick} data-position={position - 1}>{'<'}</Arrow>
      <Arrow right onClick={handleClick} data-position={position + 1}>{'>'}</Arrow>
  </Container>
);
const Carousel = makeCarousel(CarouselUI);

const VideoSection = () => {

  return (   
  <div className="video-section"> 
    <Carousel>
    <Slide right>
      <div>
        <h1>"O projeto é incrivel e feito com amor"</h1>
        <p>Flavia Costa - Professora</p>
      </div>
    </Slide>
   
    <Slide right>
      <div>
        <h1>"O projeto me ajudou a aproveitar cada momento"</h1>
        <p>Juliana Silva - Professora</p>
      </div>
    </Slide>
    <Slide right>
      <div>
        <h1>"Grande projeto feito por grandes mulheres"</h1>
        <p>Cláudia Fernandes - Professora</p>
      </div>
    </Slide>   
  </Carousel>  
  </div>
  
  )
}

export default VideoSection
