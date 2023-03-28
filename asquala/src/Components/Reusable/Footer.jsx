import React from 'react'
import styled from 'styled-components'
import Socials from './Socials'

const Container = styled.div`
    height: 40vh;
    background-color: var(--color1);
`
const Message = styled.div`
    width: 30%;
    color: gray; 
`
const Copyright = styled.div`
        width: 100%;
        display:flex;
        justify-content: center;
        align-items: center;
        background-color: black;
        height: 15%;
        margin: 0;
        color: gray;

`
const Wrapper = styled.div`
        height:85%;
        display: flex;
        width: 100%;
        justify-content: space-evenly;;
`
const Left = styled.div``

const Right = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
 
const Title = styled.h1 `
        color: white;
        margin-bottom:10px;
`
const Colored = styled.span`
        color: var(--color3);
`
const Links = styled.div`
        display:flex;
        justify-content: center;
        text-align:center;
`
const List = styled.ul`
    list-style: none;
    margin:0;
`
const Item = styled.li`
        color: gray;
        padding: 5px;
       
`
const Link = styled.a`
        text-decoration: none;
        color: gray;
        &:hover{
            color: white;
            cursor:pointer;
        }
`
const Subtitle  = styled.h4`
        color:white;
        font-size: 20px;
        margin-bottom: 0;
`
const date = new Date().getFullYear();
const Footer = () => {
  return (
    <Container>
        <Wrapper>
        <Message>
        <Title>ASQUALA <Colored>ACADEMY</Colored> </Title>
        Here at Asquala, we work hard to make sure your educational journey is a fulfilling one.
         Join us today and let us know what area of study you need help with 
        – so that we can offer you tailored advice and find solutions to any challenges you may have!
        </Message>
        <Left>
            
            <Links>
               
                <List>
                    <Subtitle>Links</Subtitle>
                    <Item><Link href='#'>Home</Link></Item>
                    <Item><Link href='#About'>About Us</Link></Item>
                    <Item><Link href='#Explore'>Explore</Link></Item>
                    <Item><Link href='#Contact'>Contact Us</Link></Item>
                    <Item><Link href='#'>Get Started</Link></Item>
                    <Item><Link href='#'>Log In</Link></Item>
                </List>
            </Links>
        </Left>
        <Right>
            <Subtitle>Contacts</Subtitle>
            <Socials />
        </Right>
        </Wrapper>
        <Copyright>© {date} EOTCMK- Asquala Project</Copyright>
    </Container>
  )
}

export default Footer