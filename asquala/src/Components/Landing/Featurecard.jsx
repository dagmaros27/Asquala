import React from 'react'
import styled from 'styled-components';
import book from "../../Images/Icons/book.png"
import quiz from "../../Images/Icons/quiz.png"
import blog from "../../Images/Icons/blog.png"
import ask from "../../Images/Icons/ask.png"


const Container =styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 40%;
    padding: 100px;
    padding-right:0px;
`
const Card = styled.div`
  width: 200px;
  padding: 20px;
  display:flex;
  flex-direction:column;
  align-items: center;
  background-color: white;
  box-shadow: 3px 5px 20px -2px rgba(0,0,0,0.46);
  border-radius: 10px;
  margin-top: 30px;
`

const Image = styled.img`
  width: 50px;
`
const Text = styled.span`
    color: gray;
`
const Bar = styled.hr`
    width: 70%;
    color: gray;
`

const Featurecard = () => {
  return (
    <Container>
      <Card>
          <Image src={book} />
          <Bar />
          <Text>
          Comprehensive library of academic resources, including textbooks, lectures, and research papers
          </Text>
      </Card>
      <Card>
          <Image src={quiz} />
          <Bar />
          <Text>
          Interactive exercises and quizzes to help students test their knowledge and track their progress.
          </Text>
      </Card>
      <Card>
          <Image src={ask} />
          <Bar />
          <Text>
          Discussion forums and chat rooms where students can collaborate and ask questions.
          </Text>
      </Card>
      <Card>
          <Image src={blog} />
          <Bar />
          <Text>
          Educational and scientific blogs to share your thoughts and insights, and engage with other students.
          </Text>
      </Card>
    </Container>
  )
}

export default Featurecard;