import React, {useState} from 'react'
import styled from 'styled-components'
import illu from "../../Images/No data.png"

const Container = styled.div`
    min-height: 30vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    display: ${(props)=> !props.open && "none"};
`
const Wrapper = styled.div`
    width:100%;
    position: relative;z
`


const Text = styled.h1`
        position: absolute;
        left: 20px;
        top: 20px;
        color: var(--color2);

`
const Image = styled.img`
        width: 20%;
`


const Searchresult = (props) => {
    
  return (
        <Container open={props.toggler} >
                <Wrapper>
                <Text>Result for '{props.input}' not found</Text>
                </Wrapper>
                <Image src={illu} />
        </Container>
  )
}

export default Searchresult