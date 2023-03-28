import React from 'react'
import styled from "styled-components"
import image from "../../Images/image1.jpg"
import courses from "../../data.js"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel} from 'react-responsive-carousel';

const Container  =styled.div`
  display: flex;
  overflow: hidden;
    margin-bottom: 10px;
    padding-bottom:10px;
`
const Card = styled.div`
    margin: 0px 20px;
    display: flex;
    flex-direction: column;
    border: 2px solid black;
    border-radius: 20px;
    box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.2);
    padding: 0px 10px;
    width:200px;
    height: 180px;
    align-items: center;
    cursor: pointer;
    background-color: white;
`
const Title = styled.h3`
    font-size: 20px;
    margin-right: 0px;
    margin-bottom: 0;
`
const Hr = styled.hr`
      width: 80%;
      padding: 0;
`

const Image = styled.img`
    width: 90%;
    aspect-ratio: 16/9;
    border-radius: 10px;
    `
function Cardcreate(props) {
  return(
    
    <Card>
      <Title>{props.name}</Title>
      <Hr />
      <Image src={props.img}></Image>
    </Card>
   
  )
}
function  mapper(card){
      return <Cardcreate key={card.key} name = {card.name} img = {card.image} />
}
  
const Coursecard = () => {
  return (
    <Container>
          {courses.map(mapper)}
      </Container>
  )
}

export default Coursecard