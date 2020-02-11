import useSWR, {mutate} from 'swr';
import { useRouter } from 'next/router';

function fetcher(url) {
    return fetch(url).then(r => r.json());
}

const Answers = ({question}) => (
    <div>
    {question?.answers?.map(
      answer => (
        <div className="answer" key={answer.answer_string}>
          {answer.answer_string} : {answer.result}
        </div>
      )
    )
  }
  </div>
  );


export default function Result() {
    const router = useRouter();
    const { data, error } = useSWR(`/api/increment?question=${router.query.question}&answer=${router.query.answer}`, fetcher);
    console.log(data)
    let response = data?.result?.question;
    

    if(!response) response = "Loading";
    if(error) response = "Failed to submit choice";

    return (
      <main className="center">
          {router.query.question}
          <Answers question={data?.result} />
      </main>
    );
  }