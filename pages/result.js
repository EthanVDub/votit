import useSWR from 'swr';
import { useRouter } from 'next/router';

function fetcher(url) {
    return fetch(url).then(r => r.json());
}

export default function Result() {
    const router = useRouter();
    const { data, error } = useSWR('/api/increment', fetcher);
    return (
      <main className="center">
          Result Page
          {router.query.question}
          {router.query.answer}
      </main>
    );
  }