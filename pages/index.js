import useSWR from 'swr';
import Questions from '../components/questions';

function fetcher(url) {
  return fetch(url).then(r => r.json());
}

export default function Index() {
  
  const { data, error } = useSWR('/api/getQuestions', fetcher);
  
  return (
    <main className="center">
        <Questions questions={data?.questions}/>
    </main>
  );
}