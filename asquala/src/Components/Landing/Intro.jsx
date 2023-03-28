import React from 'react'
import styled from 'styled-components'
import img from "../../Images/bg.svg"
import heroimg from "../../Images/heroImg.svg"
import { Link } from 'react-router-dom'

const Container = styled.div`
        height: calc(100vh - 60px);   
        display: flex;
        background-image: url(${img});
        background-size: cover;
`
const Left = styled.div`
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 100px;
`
const Right = styled.div`
        width: 50%;
        display: flex;
        align-items: center;
`
const Hero = styled.div`
        display: flex;
        flex-direction: column;
        width: 90%;
        

`
const HeroTitle = styled.h1`
        font-size: 60px;
        margin: 0;
        color: var(--color2);
`
const HeroText = styled.p`
        font-size: 20px;
       
`
const Btn = styled.button`
    width: 120px;
    padding: 15px 20px;
    margin-right: 50px;
    background-color: white;
    font-size: 14px;
    border: 2px solid var(--color2);
        color: var(--color2);
        font-weight: bold;
        cursor: pointer;
    &:hover{
        background-color:  var(--color2);
        color: white;
        transform: translateY(-10px);
        
        transition:  transform 1s ease;
    }
`
const Image = styled.img`
    width: 100%;
`

const Intro = () => {
  return (
        <Container id='Home'>
        <Left >
            <Hero>
                <HeroTitle>Unlock your potential with knowledge</HeroTitle>
                <HeroText>
                 Our collaborative e-studying platform connects you with a global community of learners and instructors, 
                creating a dynamic and engaging learning experience.
                 Join us today and expand your network while building your skills and knowledge.
                </HeroText>
            </Hero>
            <Link to="/signup" class="signup">
            <Btn>Get Started</Btn>
            </Link>
        </Left>
        <Right>
                <Image src={heroimg} />
        </Right>
        </Container>
  )
}

export default Intro