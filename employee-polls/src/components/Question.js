import * as React from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { connect } from "react-redux";
import { Avatar } from "@mui/material";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const QuestionCard = ({ question, employees, authedUser, loading }) => {
  const votedAlready = employees[authedUser].answers[question.id]
    ? true
    : false;

  return (
    <Card
      sx={{
        backgroundColor: "#fff",
        borderRadius: 2,
        textAlign: "center",
        alignItems: "center",
        fontWeight: "light",
        m: 2,
      }}
    >

      <Box width="fit-content" sx={{ m: 1, p: 1 }}>
        <Avatar
          src={employees?.[question?.author]?.avatarURL}
          sx={{ margin: "auto" }}
        />
        <Typography
          sx={{
            fontStyle: "italic",
            m: "auto",
          }}
        >
          {question?.author}
        </Typography>
        <Typography
          sx={{
            fontStyle: "caption",
            fontSize: "x-small",
            m: "auto",
          }}
        >
          {new Date(question.timestamp).toLocaleDateString("en-us", {
            weekday: "long",
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </Typography>
      </Box>
      <Typography sx={{ fontStyle: "bold" }} variant="h6">
        Would you rather...
      </Typography>

      <Typography sx={{ textAlign: "center", mb: 2 }}>
        {question?.optionOne.text}
      </Typography>
      <b>OR</b>
      <Typography sx={{ textAlign: "center", mt: 2 }}>
        {question?.optionTwo.text}
      </Typography>
      <div>
        <Link to={`/question/${question.id}`}>
          <Button
            value={question.id}
            variant={"contained"}
            sx={{ width: 1 / 4, m: 2 }}
          >
            {votedAlready ? "View" : "Vote"}
          </Button>
        </Link>
      </div>
    </Card>
  );
};

const mapStateToProps = ({ employees, questions, authedUser }) => ({
  employees,
  questions,
  authedUser,
});

export default connect(mapStateToProps)(QuestionCard);
