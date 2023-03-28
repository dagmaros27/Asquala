import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import LogoImg from "../../Images/logo1.png"

const Container = styled.div`
    height: 60px;
    background-color: var(--color2);
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top:0;
    z-index: 1;
`
const Wrapper = styled.div`
    width: 60%;
    display:flex;
    justify-content: space-between;
    align-items: center;
`
const Logo = styled.a`
    display: flex;
    align-items: center;
    cursor: pointer;
`
const LogoImage = styled.img`
    width: 40px;
`
const LogoText = styled.h1`
    margin: 0;
    color: white;
    text-decoration: underline var(--color4); 

`
const List = styled.ul`
        display: flex;
        list-style:none;
`
const ListItem = styled.li`
       
        font-size: 20px;
        font-weight:bold;
        margin-right:20px;
        cursor: pointer;
`
const Linked = styled.a`
        text-decoration: none;
        color: white;
`
const Button = styled.button`
        padding: 10px 15px;
        margin-right: 10px;
        background-color: transparent;
        border: 2px solid white;
        color: white;
        font-weight: bold;
        cursor: pointer;
        &:hover{
            background-color: white;
            color: var(--color2);
        }

`


const Navbar = () => {
  return (
    <Container>
        <Wrapper >
            <Logo href='#'>
                <LogoImage src={LogoImg} />
                <LogoText>Asquala</LogoText>
            </Logo>
            <List>
                <ListItem><Linked href='#'>Home</Linked></ListItem>
                <ListItem><Linked href='#About'>About</Linked></ListItem>
                <ListItem><Linked href='#Explore'>Explore</Linked></ListItem>
            </List>
        </Wrapper>
        <Link to='/login'>
        <Button>Log In</Button>
        </Link>
    </Container>
  )
}

export default Navbar