import useSWR from 'swr';

function fetcher(url) {
  return fetch(url).then(r => r.json());
}

const Answers = ({answers}) => (
  <div>
  {answers?.map(
    answer => (
      <div className="answer" key={answer.answer_string}>{answer.answer_string}</div>
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
        <Answers answers={question.answers} />
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
        <Questions questions={data?.questions} />
    </main>
  );
}