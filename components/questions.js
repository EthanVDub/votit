import Answers from './answers'

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

export default Questions;