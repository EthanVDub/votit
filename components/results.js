
const Results = ({question}) => (
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

export default Results;