import useSWR from 'swr';
import Button from '@material-ui/core/Button';
import Link from 'next/link'

function fetcher(url) {
  return fetch(url).then(r => r.json());
}

const Answers = ({question}) => (
  <div>
  {question?.answers.map(
    answer => (
      <div className="answer" key={answer.answer_string}>
        {answer.answer_string} : {answer.result}
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



const Questions = ({questions}) => (
  <div>
  {questions?.map(
    question => (
      <div className="question" key={question.question}>
        {question.question}
        <Answers question={question}/>
      </div>
    )
  )
}
</div>
);


export default function Index() {
  
  const { data, error } = useSWR('/api/users', fetcher);
  
  return (
    <main className="center">
        <Questions questions={data?.questions}/>
    </main>
  );
}