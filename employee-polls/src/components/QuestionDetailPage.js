import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { Question } from './Question';

const QuestionDetail = ({ questions }) => {
  const { id } = useParams();
  const question = questions?.[id];

  if (question) {
    return (
      <div className="bordered">
        <Question question={question} />
      </div>
    );
  } else {
    // how to handle 404? should we not use connect?
    return <h1> Loading!</h1>;
  }
};

const mapStateToProps = ({ questions }) => ({
  questions,
});

export default connect(mapStateToProps)(QuestionDetail);
