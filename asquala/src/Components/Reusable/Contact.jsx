import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 30%;
    display: flex;
`


const Form = styled.form`
        display: flex;
        margin-top:50px;

`
const Left = styled.div`
        width: 70%;
        display: flex;
        flex-direction: column;
        padding: 10px;
        padding-bottom: 0;

`
const Right = styled.div`
         width: 30%;
        display: flex;
        flex-direction: column;
        padding: 10px;
        padding-bottom: 0;
  
`
const Input = styled.input`
        width: 180px;
        padding: 10px 15px;
        margin-left: 100px;
        margin-bottom: 20px;
        border: 1px solid var(--color2);
`
const Textarea = styled.textarea`
        width: 200px;
        padding: 10px;
        height: 70px;
        border-radius: 5px;
        border: 1px solid var(--color2); 
        margin-bottom: 20px;
 
`
const Button = styled.button`
        padding: 10px 15px;
        border-radius:10px;
        width: 220px;
        border: 2px solid var(--color2); 
        font-weight: bold;
        cursor: pointer;
        color: white;
        background-color: var(--color2);
        &:hover{
            
        }

`

const Title = styled.h1`
       padding:20px;
       margin-top: 0px;
         margin-bottom: 0px;
         padding-left: 30px;
`

const Contact = () => {
  return (
    <Container>
            <Title>Questions? Let's get in touch</Title>
       <Form>
       
       <Left>
           
            <Input placeholder='Your name' />
            <Input placeholder='Your email' />
            <Input placeholder='Your subject' />
        </Left>
        <Right>
            <Textarea placeholder='Your message'/>
            <Button> Send</Button>
        </Right>
       </Form>
    </Container>
  )
}

export default Contact;