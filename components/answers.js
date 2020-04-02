import Link from 'next/link';
import Button from './button';
import styled from 'styled-components';

const StyledAnswers = styled.div`
    display: flex;
    justify-content: center;
    font-size: 10px;
`


const Answers = ({question}) => (
  <StyledAnswers >
    {question?.answers.map(
      answer => (
        <div className="answer" key={answer.answer_string}>
          <Link href={`/result?question=${question.question}&answer=${answer.answer_string}`} as={"/result"}>
            <Button variant="outlined" color="primary">
              {answer.answer_string}
            </Button>
          </Link>
        </div>
      )
    )
  }
  </StyledAnswers>
  );

export default Answers;