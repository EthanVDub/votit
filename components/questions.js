import Answers from './answers'

import styled from 'styled-components';

const StyledQuestions = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: center;
    color: white;
`

const StyledQ = styled.div`
    margin: 1em;
    margin-left: 30em;
    margin-right: 30em;
    border: 2px solid #white;
    border-radius: 10px;
    background: #A8D0E6;
    padding: 1em;
`

const Questions = ({questions}) => (
    <StyledQuestions>
    {questions?.map(
      question => (
        <div className="question" key={question.question}>
          <StyledQ>
            <h1>{question.question}</h1>
            <Answers question={question}/>
          </StyledQ>
        </div>
      )
    )
  }
  </StyledQuestions>
  );

export default Questions;