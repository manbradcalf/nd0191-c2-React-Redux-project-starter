import * as React from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { connect } from "react-redux";

const Question = ({ question, employees }) => {
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

  return (
    <Card
      sx={{
        backgroundColor: "#fff",
        borderRadius: 2,
        m: 1,
        p: 1,
        width: 1,
        textAlign: "center",
        alignItems: "center",
      }}
    >
      <b>{asker?.name}</b> asked
      <h2>Would you rather?</h2>
      <Typography sx={{ textAlign: "center", mb: 2 }}>
        {question.optionOne.text} ({optionOneVotePercentage}%)
      </Typography>
      <b>OR</b>
      <Typography sx={{ textAlign: "center", mt: 2 }}>
        {question.optionTwo.text} ({optionTwoVotePercentage}%)
      </Typography>

      <div>
        <Button variant={"contained"} sx={{ width: 1 / 4, m: 2 }}>
          Option 1
        </Button>
        <Button variant={"contained"} sx={{ width: 1 / 4, m: 2 }}>
          Option 2
        </Button>
      </div>

    </Card>
  );
};

const mapStateToProps = ({ employees }) => ({
  employees,
});

export default connect(mapStateToProps)(Question);
