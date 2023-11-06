export const Question = ({ question }) => {
  return (
    <div>
      <p>
        <b>{question.author}</b> asked
      </p>
      <p>
        {question.optionOne.text} <b>OR</b> {question.optionTwo.text}
      </p>
    </div>
  );
};
