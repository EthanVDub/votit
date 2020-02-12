import useSWR from 'swr';
//import Button from '@material-ui/core/Button';
import Link from 'next/link';
import styled from 'styled-components';


const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #cc5474;
  color: #cc5474;
  margin: 0 1em;
  padding: 0.25em 1em;
`

function fetcher(url) {
  return fetch(url).then(r => r.json());
}

const Answers = ({question}) => (
  <div>
  {question?.answers.map(
    answer => (
      <div className="answer" key={answer.answer_string}>
        {answer.answer_string}
        <Link href={`/result?question=${question.question}&answer=${answer.answer_string}`} as={"/result"}>
          <Button variant="outlined" color="primary">
            Vote!
          </Button>
        </Link>
      </div>
    )
  )
}
</div>
);

const StyledAnswers = styled(Answers)`
  display: flex;
  flexDirection: row;
  flex-grow: 1;
  align-items: center;
`;

const Questions = ({questions}) => (
  <div>
  {questions?.map(
    question => (
      <div className="question" key={question.question}>
        {question.question}
        <StyledAnswers question={question}/>
      </div>
    )
  )
}
</div>
);

export default function Index() {
  
  const { data, error } = useSWR('/api/questions', fetcher);
  
  return (
    <main className="center">
        <Questions questions={data?.questions}/>
    </main>
  );
}