import React from 'react'
import styled from 'styled-components'
import phone from "../../Images/Icons/phone.png"
import mail from "../../Images/Icons/mail.png"
import web from "../../Images/Icons/web.png"
import tg from "../../Images/Icons/tg.png"
import fb from "../../Images/Icons/fb.png"
import yt from "../../Images/Icons/yt.png"

const Container = styled.div`
    display: flex;
    flex-direction: column;

`
const Addresses = styled.div`
            margin-bottom:20px;
`
const Address = styled.div`
        margin:10px;
        display: flex;
        align-items: center;
`
const Text = styled.span`
        color: gray;
`
const Icon = styled.img`
        width: 20px;
        margin-right: 15px;
`
const Media = styled.img`
        width: 30px;
        margin-right: 20px;
        cursor: pointer
`
const Social = styled.div`
        display: flex;
        justify-content: center;
`

const Socials = () => {
  return (
    <Container>
        <Addresses>
            <Address>
                <Icon src={mail} />
                <Text>asqualaacademy@gmail.com</Text>
            </Address>
            <Address>
                <Icon src={phone} />
                <Text>+251953099662/+25134747844</Text>
            </Address>
            <Address>
                <Icon src={web} />
                <Text>www.asqualaacademy.com</Text>
            </Address>
        </Addresses>
        <Social>
            <Media src={fb} />
            <Media src={yt} />
            <Media src={tg} />
        </Social>
    </Container>
  )
}

export default Socials