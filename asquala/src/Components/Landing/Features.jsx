import React from 'react'
import styled from 'styled-components'
import bg from "../../Images/bg2.svg"
import Featurecard from './Featurecard'
import students from "../../Images/students.jpg"

const Container = styled.div`
        height: 100%;
        display: flex;
        justify-content:space-between;
        align-items:center;
        overflow:hidden;
`
const Left = styled.div`
        width: 40%;
        display: flex;
        flex-direction: column;
        padding-left: 40px;
     
`
const Right = styled.div`
        width: 60%;
        display: flex;
        align-items: center;
`

const Title = styled.h2`
         color: var(--color2);
        font-size: 40px;
        font-weight: bold;

`
const Image = styled.img`
    width: 80%;
`

const List = styled.ul`
`
const ListItem = styled.li`
        color: var(--color2);
        font-size: 25px;
        font-weight: bold;
        margin-top: 10px;
`

const Features = () => {
  return (
   <Container>
        <Left>
            <Title>Join The Largest University<br /> Students Hub</Title>
            <List>
                <ListItem>2,000+ books,videos and lectures</ListItem>
                <ListItem>3,000+ questions and quizzes</ListItem>
                <ListItem>Hundreds of academic related Blogs</ListItem>
                <ListItem>30+ universities community</ListItem>
            </List>
            <Image src={students} />
        </Left>
    
         <Featurecard />
   </Container>
  )
}

export default Features