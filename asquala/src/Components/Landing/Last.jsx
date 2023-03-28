import React from 'react'
import styled from 'styled-components'
import Contact from '../Reusable/Contact'
import Courses from '../Reusable/Courses'
import Search from '../Reusable/Search'
const Conatiner = styled.div`
        height: 100%;
        background-color: rgba(203, 228, 222,0.1);
`


const Last = () => {
  return (
    <Conatiner >
        <Search />
        <Courses />
        <Contact />
    </Conatiner>
  )
}

export default Last