import React from 'react'
import styled from "styled-components"
import ControlledCarousel from '../Reusable/ControlledCarousel'

const Container = styled.div`
        height: 100vh;

`
const Text = styled.span`
    width:40%;
    color: white;
    padding-top: 100px;
   
    font-size:20px;
    margin-top:10%;
    margin-left: 100px;
`

const Top = styled.div`
  padding: 20px 0px 0px 40px;
  width: 40%;
    height: 30%;
    color: white;
    font-size:20px;
    
`
const Middle = styled.div`
      display: flex;
      justify-content:end;
     
`
const Wrapper = styled.div`
      width: 40%;
      height: 400px;
      box-shadow: 3px 5px 20px -2px rgba(0,0,0,0.46);
      margin-top:20px;
`
const About = () => {
  return (
    <Container id='About'>
          <Top >
          Our vision is to create a platform that empowers Ethiopian university students to succeed academically, 
          providing access to high-quality resources and fostering a strong community of learners.
           We believe that education should be accessible to everyone, and our platform is designed to break down the barriers that often prevent students from achieving their full potential.
            </Top>
          <Middle>
            <Wrapper>
            <ControlledCarousel />
            </Wrapper>
            <Text>
            We aim to create an engaging learning experience that encourages students to explore new ideas, 
            collaborate with peers, and develop critical thinking skills. 
            </Text>
          </Middle>
    </Container>
  )
}

export default About;