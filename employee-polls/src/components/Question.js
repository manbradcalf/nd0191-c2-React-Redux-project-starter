import * as React from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { connect } from 'react-redux';
import { Avatar } from '@mui/material';
import { Box } from '@mui/material';
import { handleQuestionAnswered } from '../actions/shared';

const Question = ({ question, employees, authedUser, loading }) => {
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

  const votedAlready = employees[authedUser].answers[question.id]
    ? true
    : false;

  const buttonClicked = (event) => {
    console.log("clicked button for " + question)
  }
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
          value={question.id}
          variant={'contained'}
          sx={{ width: 1 / 4, m: 2 }}
          onClick={buttonClicked}
        >
          {votedAlready ? 'View' : 'Vote'}
        </Button>
      </div>
    </Card>
  );
};

const mapStateToProps = ({ employees, questions, authedUser }) => ({
  employees,
  questions,
  authedUser,
});

export default connect(mapStateToProps)(Question);
