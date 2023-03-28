import React from 'react'
import styled, { css } from "styled-components"
import About from '../Components/Landing/About'
import Features from '../Components/Landing/Features'
import Intro from '../Components/Landing/Intro'
import Last from '../Components/Landing/Last'
import Navbar from '../Components/Reusable/Navbar'
import Footer from '../Components/Reusable/Footer'

const Container = styled.div`
        height: 100vh;
        position: relative;
`
const Shape = css`
       width:100%;
      height:100%;
      position:absolute;
      top:0;
      left:0;
      z-index: -1;
`
const Featureshape = styled.div`
      ${Shape};
     clip-path: polygon(65% 0, 100% 0, 100% 100%, 35% 100%);
     background-color: var(--color2);
`
const Aboutshape = styled.div`
      ${Shape};
      clip-path: polygon(30% 0%, 70% 0%, 100% 0, 100% 15%, 51% 15%, 30% 50%, 0 50%, 0 0);
     background-color: var(--color2);
`
const Aboutshape2 = styled.div`
     ${Shape};
      clip-path: polygon(50% 85%, 70% 50%, 100% 50%, 100% 100%, 55% 100%, 30% 100%, 0 100%, 0 85%);
     background-color: var(--color2);
`

const Landing = () => {
  return (
    <>
      <Navbar />
      <Intro />
        <Container>
            <Features />
            <Featureshape />
        </Container>
        <Container>
          <About />
          <Aboutshape />
          <Aboutshape2 />
        </Container>
        <Container>
          <Last />
        </Container>
        <Footer />
    </>
  )
}

export default Landing