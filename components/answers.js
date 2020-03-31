import Link from 'next/link';
import Button from './button';

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

export default Answers;