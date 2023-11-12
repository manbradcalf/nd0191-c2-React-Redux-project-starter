import * as React from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { connect } from 'react-redux';
import { Avatar } from '@mui/material';
import { Box } from '@mui/material';
import { handleQuestionAnswered } from '../actions/shared';
import { useParams } from 'react-router-dom';

const QuestionDetail = ({
  dispatch,
  questions,
  employees,
  authedUser,
  loading,
}) => {
  const { id } = useParams();
  const question = questions[id];
  const asker = employees?.[question?.author];

  const optionOneVoteCount = question?.optionOne.votes.length;
  const optionTwoVoteCount = question?.optionTwo.votes.length;
  const voteCount = optionOneVoteCount + optionTwoVoteCount;

  const optionOneVotePercentage = Math.round(
    (optionOneVoteCount / voteCount) * 100
  );

  const optionTwoVotePercentage = Math.round(
    (optionTwoVoteCount / voteCount) * 100
  );

  const userAnswer = employees[authedUser]?.answers[question.id] ?? '';

  const voteClicked = (event) => {
    event.preventDefault();
    const answer = event.target.value;
    dispatch(handleQuestionAnswered(question?.id, answer, authedUser));
  };

  if (!authedUser) {return <h1>Not found! Please log in to view question</h1>} else {
  return (
    <Card
      sx={{
        backgroundColor: '#fff',
        borderRadius: 2,
        textAlign: 'center',
        alignItems: 'center',
        fontWeight: 'light',
      }}
    >
      <Box sx={{ m: 2 }}>
        <Avatar src={employees?.[question?.author]?.avatarURL} />
        <Typography sx={{ fontStyle: 'italic', textAlign: 'start' }}>
          {question?.author} asked...
        </Typography>
      </Box>

      <h2>Would you rather?</h2>
      <Typography sx={{ textAlign: 'center', mb: 2 }}>
        {question?.optionOne.text} ({optionOneVotePercentage}%)
      </Typography>
      <b>OR</b>
      <Typography sx={{ textAlign: 'center', mt: 2 }}>
        {question?.optionTwo.text} ({optionTwoVotePercentage}%)
      </Typography>
      <div>
        <Button
          disabled={userAnswer !== ''}
          value="optionOne"
          variant={'contained'}
          sx={{ width: 1 / 4, m: 2 }}
          onClick={voteClicked}
          data-testid="voteOptionOne"
        >
          Option 1
        </Button>
        {question?.optionOne.votes.map((user) => (
          <p>{user} voted for option one</p>
        ))}
        <Button
          disabled={userAnswer !== ''}
          value="optionTwo"
          variant={'contained'}
          sx={{ width: 1 / 4, m: 2 }}
          onClick={voteClicked}
          data-testid="voteOptionTwo"
        >
          Option 2
        </Button>
        {question?.optionTwo.votes.map((user) => (
          <p>{user} voted for option two</p>
        ))}
      </div>
    </Card>
  );
};
}
const mapStateToProps = ({ employees, questions, authedUser }) => ({
  employees,
  questions,
  authedUser,
});

export default connect(mapStateToProps)(QuestionDetail);
