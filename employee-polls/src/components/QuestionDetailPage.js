import * as React from "react";
import { Typography, Box, Avatar, Button } from "@mui/material";
import { connect } from "react-redux";
import { handleQuestionAnswered } from "../actions/shared";
import { useParams } from "react-router-dom";
import LinearProgress from "@mui/material/LinearProgress";

const QuestionDetail = ({
  dispatch,
  questions,
  employees,
  authedUser,
  loading,
}) => {
  const { id } = useParams();
  const question = questions[id];

  const optionOneVoteCount = question?.optionOne.votes.length;
  const optionTwoVoteCount = question?.optionTwo.votes.length;
  const voteCount = optionOneVoteCount + optionTwoVoteCount;

  const optionOneVotePercentage = Math.round(
    (optionOneVoteCount / voteCount) * 100
  );

  const optionTwoVotePercentage = Math.round(
    (optionTwoVoteCount / voteCount) * 100
  );

  const userAnswer = employees[authedUser]?.answers[question.id] ?? "";

  const voteClicked = (event) => {
    event.preventDefault();
    const answer = event.target.value;
    dispatch(handleQuestionAnswered(question?.id, answer, authedUser));
  };

  if (!authedUser) {
    return <h1>Not found! Please log in to view question</h1>;
  } else {
    return (
      <Box>
        <Box
          sx={{
            backgroundColor: "#fff",
            borderRadius: 2,
            textAlign: "center",
            fontWeight: "light",
          }}
        >
          <Avatar src={employees?.[question?.author]?.avatarURL} />
          <Typography sx={{ fontStyle: "italic", textAlign: "start" }}>
            {question?.author} asked...
          </Typography>
        </Box>

        <Typography variant="h4" textAlign={"center"}>
          Would you rather?
        </Typography>

        <Typography sx={{ textAlign: "center", mb: 2 }}>
          {question?.optionOne.text} ({optionOneVotePercentage}%)
          <LinearProgress
            variant="determinate"
            value={optionOneVotePercentage}
          />
        </Typography>
        {userAnswer && (
          <Box textAlign="center">
            <Typography variant="caption">
              Votes: {question.optionOne.votes.join(" ")}
            </Typography>
            <br />
            <Typography variant="caption">
              {optionOneVotePercentage}%
            </Typography>
          </Box>
        )}
        <Typography sx={{ textAlign: "center", mt: 2 }}>
          {question?.optionTwo.text}
          <LinearProgress
            variant="determinate"
            value={optionTwoVotePercentage}
          />
          {userAnswer && (
            <Box>
              <Typography variant="caption">
                Votes: {question.optionTwo.votes.join(" ")}
              </Typography>
              <br />
              <Typography variant="caption">
                {optionTwoVotePercentage}%
              </Typography>
            </Box>
          )}
        </Typography>

        <Box display="flex" justifyContent="center" alignItems="center">
          <Button
            disabled={userAnswer !== ""}
            value="optionOne"
            variant={"contained"}
            sx={{ width: 1 / 4, m: 2 }}
            onClick={voteClicked}
            data-testid="voteOptionOne"
          >
            Option 1
          </Button>
          <Button
            disabled={userAnswer !== ""}
            value="optionTwo"
            variant={"contained"}
            sx={{ width: 1 / 4, m: 2 }}
            onClick={voteClicked}
            data-testid="voteOptionTwo"
          >
            Option 2
          </Button>
        </Box>
      </Box>
    );
  }
};
const mapStateToProps = ({ employees, questions, authedUser }) => ({
  employees,
  questions,
  authedUser,
});

export default connect(mapStateToProps)(QuestionDetail);
