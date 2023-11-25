import * as React from 'react';
import {
  Typography,
  Box,
  Avatar,
  Container,
  Button,
  Paper,
} from '@mui/material';
import { connect } from 'react-redux';
import { handleQuestionAnswered } from '../actions/shared';
import { useParams } from 'react-router-dom';
import LinearProgress from '@mui/material/LinearProgress';
import Login from './Login';
import { AuthedComponent } from './AuthedComponent';

const QuestionDetail = ({ dispatch, questions, employees, authedUser }) => {
  const { id } = useParams();
  const question = questions?.[id];

  const optionOneVoteCount = question?.optionOne.votes.length;
  const optionTwoVoteCount = question?.optionTwo.votes.length;
  const voteCount = optionOneVoteCount + optionTwoVoteCount;

  const optionOneVotePercentage = Math.round(
    (optionOneVoteCount / voteCount) * 100
  );

  const optionTwoVotePercentage = Math.round(
    (optionTwoVoteCount / voteCount) * 100
  );

  const userAnswer = employees?.[authedUser]?.answers[question?.id] ?? '';

  const optionOneColor = userAnswer === 'optionOne' ? 'lightgreen' : 'white';
  const optionTwoColor = userAnswer === 'optionTwo' ? 'lightgreen' : 'white';

  const voteClicked = (event) => {
    event.preventDefault();
    const answer = event.target.value;
    dispatch(handleQuestionAnswered(question?.id, answer, authedUser));
  };

  const component = question ? (
    <Paper sx={{ textAlign: 'center', p: 5 }}>
      <Box>
        <Avatar src={employees?.[question?.author]?.avatarURL} />
        <Typography sx={{ fontStyle: 'italic', textAlign: 'start' }}>
          {question?.author} asked...
        </Typography>
      </Box>

      <Typography variant="h4" textAlign="center">
        Would you rather?
      </Typography>

      <Box
        sx={{ m: 5, backgroundColor: optionOneColor, borderRadius: 2, p: 2 }}
      >
        <Typography sx={{ textAlign: 'center' }}>
          {question?.optionOne.text}
        </Typography>
        <LinearProgress
          sx={{
            width: '50vw',
            m: 'auto',
          }}
          variant="determinate"
          value={optionOneVotePercentage}
        />

        {userAnswer && (
          <Box>
            <Typography variant="caption">
              Votes [{question?.optionOne.votes.length}]:{' '}
              {question?.optionOne.votes.join(', ')}
            </Typography>

            <br />
            <Typography variant="caption">
              {optionOneVotePercentage}%
            </Typography>
          </Box>
        )}
      </Box>

      <Box
        sx={{ m: 5, backgroundColor: optionTwoColor, borderRadius: 2, p: 2 }}
      >
        <Typography>{question?.optionTwo.text}</Typography>
        <LinearProgress
          variant="determinate"
          sx={{
            width: '50vw',
            m: 'auto',
          }}
          value={optionTwoVotePercentage}
        />

        {userAnswer && (
          <Box>
            <Typography variant="caption">
              Votes [{question?.optionTwo.votes.length}]:{' '}
              {question?.optionTwo.votes.join(', ')}
            </Typography>
            <br />
            <Typography variant="caption">
              {optionTwoVotePercentage}%
            </Typography>
          </Box>
        )}
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center">
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
      </Box>
    </Paper>
  ) : (
    <Container>
      <Typography sx={{ textAlign: 'center' }}>404 - Not Found</Typography>
    </Container>
  );

  return component;
};
const mapStateToProps = ({ employees, questions, authedUser }) => ({
  employees,
  questions,
  authedUser,
});

export default connect(mapStateToProps)(QuestionDetail);
