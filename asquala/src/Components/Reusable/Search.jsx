import React from 'react'
import styled from 'styled-components'
import search from "../../Images/Icons/search.png"

const Conatiner = styled.div`
        width: 100%;
        height: 20%;
        display: flex;
        flex-direction:column;
        justify-content: center;
        align-items: center;
`
const Wrapper = styled.div`
        display: flex;
        align-items: center;
`
const Input = styled.input`
        width: 200px;
        padding: 10px 10px;
        border-radius: 10px;
        border: 1px solid var(--color2);
       
    
`
const Icon = styled.img`
        width: 20px;
        

`
const IconWrapper = styled.div`
        margin-left:10px;
        padding: 8px;
        border-radius: 50px;
        border: 2px solid var(--color2);
        display: flex;
        align-items: center;
        cursor: pointer;
        &:hover{
                background-color: gray;
        }

`

const Search = () => {
  return (
    <Conatiner id='Explore'>
         <h3>Search for books and courses you want</h3>
        <Wrapper>
                <Input placeholder='books,courses,lectures...'/>
                <IconWrapper> <Icon src={search} /></IconWrapper>
               
        </Wrapper>
    </Conatiner>
  )
}

export default Search