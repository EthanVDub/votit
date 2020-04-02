import useSWR from 'swr';
import Questions from '../components/questions';
import Main from '../components/main';

function fetcher(url) {
  return fetch(url).then(r => r.json());
}

export default function Index() {
  
  const { data, error } = useSWR('/api/getQuestions', fetcher);
  
  return (
    <Main>
        <Questions questions={data?.questions}/>
    </Main>
  );
}