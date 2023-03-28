import React from 'react'
import styled from 'styled-components'
import Coursecard from './Coursecard'
const Conatiner = styled.div`
        height: 40%;
        padding-left: 30px;
        position: relative;
`
const Title = styled.h1`
    
`
const Link = styled.a`
  position:absolute;
  right: 20px;
  bottom: -5px;
  font-size: 20px;
  font-weight: bold;
  color: var(--color2);
  cursor: pointer;
margin: 20px 10px;
  text-decoration: none;
  &:hover{
      text-decoration: underline;
  }
`
const Courses = () => {
  return (
    <Conatiner>
        <Title>Courses frequently visited by others</Title>
        <Coursecard />
        <Link href='' >Explore More?</Link>
    </Conatiner>
  )
}

export default Courses