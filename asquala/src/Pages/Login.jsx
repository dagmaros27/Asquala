import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom"

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
`
const Left = styled.div`
         width: 50%;
        background-color: var(--color4);
        display:flex;
        justify-content: center;
        align-items: center;
       
`
const Right = styled.div`
        width: 50%;
        background-color: var(--color2);
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
`
const Wrapper = styled.div`
      width: 60%;  
      background-color: rgba(0,0,0,0.3);
      box-shadow: 0px 0px 10px -10px white;
      color: white;
      font-size: 20px;
      font-weight: bold;
      height: 50%;
`

const Form = styled.form`
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;


`

const Title = styled.div`
      text-align: center;
      font-size: 25px;
      margin: 20px 0px;
`
const Elements = styled.div``

const Div = styled.div`
    display: flex;
`

const Input = styled.input`
        margin-top: 20px;
        margin-left: 20px;
        padding: 10px 15px ;
        width: 300px ;
        heigh: 30px;
        border: none;
        border-bottom: 1px solid white;
        font-size: 15px;
        color: white;
        background-color: transparent;
        &:focus{
          outline: none;
          outline-bottom: 1px solid white;
        }
        ::placeholder { 
          color: lightgray;
          opacity: 1;}
`
const Button = styled.button`
        padding: 10px 20px;
        background-color: rgba(255, 255, 255,0.4);
        color: black;
        font-size: 20px;
        font-weight: bold;
        width:330px;
        border: none;
        border-radius: 5px;
        margin-left: 20px;
        margin-top: 40px;
        &:hover{
          background-color: white;
          color: var(--color2);
          cursor: pointer;
        }
`
const LeftTitle = styled.h1`
        font-size: 75px;
        margin-left: 20px;
        color: var(--color2);
`
const Text = styled.div`
      margin:20px;
      font-size: 20px;
`
const LeftWrapper = styled.div``

const Linked = styled.a`
    text-decoration: none;
    margin-top: 20px;
    margin-left: 20px;
    color: white;
    font-size: 12px;
    font-weight: 200;
`
const linkStyle = {
  textDecoration: "none", 
  color: "white"
}


const Login = () => {
  return (
    <Container>
        <Left>
        <LeftWrapper>
            <LeftTitle>Elevate your academic success </LeftTitle>
            <Text>
            Take your learning to the next level with our comprehensive e-studying platform. 
            With a wide range of courses and resources, personalized learning pathways, and a supportive community, 
            you'll have everything you need to succeed.
            </Text>
        </LeftWrapper>
        </Left>
        <Right>
            <Wrapper>
              <Title>SIGN IN</Title>
              <Form action='/login' method='post'>
                <Input type="text" placeholder="Username" required />
                <Input type="password"  placeholder="Password"  required/>
                <Linked href='#'>Forget Password?</Linked>
                <Button>Log In</Button>
               <Linked>Don't have an accout? <Link to="/signup"  style={linkStyle}>Sign up</Link>  </Linked>
              </Form>
            </Wrapper>
        </Right>
    </Container>
  )
}

export default Login