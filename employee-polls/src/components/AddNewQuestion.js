// The application shows the text “Would You Rather” and has a form for creating two options.
// Upon submitting the form, a new poll is created and the user is taken to the home page.
// The new polling question appears in the correct category on the home page.
// The form is available at/add.
import React from "react";
import { Button, TextField, Box, Typography } from "@mui/material";
import { connect } from "react-redux";
import { handleAddNewQuestion } from "../actions/questions";
import { useState } from "react";
import { authedComponent } from "../util/helpers";

const AddNewQuestion = ({ store, dispatch, authedUser }) => {
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");

  const handleOptionOne = (event) => {
    event.preventDefault();
    setOptionOne(event.target.value);
  };

  const handleOptionTwo = (event) => {
    event.preventDefault();
    setOptionTwo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(handleAddNewQuestion(optionOne, optionTwo));
  };

  const component = (
    <Box textAlign={"center"}>
      <Typography variant="h6" padding={"2vw"}>
        Would you rather...
      </Typography>

      <Box width={"auto"}>
        <TextField
          id="optionOne"
          label="Option One"
          multiline
          rows={2}
          onChange={handleOptionOne}
          defaultValue="Buy an Android"
          sx={{ width: 1 / 2 }}
        />
        <Typography sx={{ m: 2 }}> or </Typography>
        <TextField
          id="optionTwo"
          label="Option Two"
          multiline
          rows={2}
          defaultValue="Buy an iPhone"
          onChange={handleOptionTwo}
          sx={{ width: 1 / 2 }}
        />
      </Box>
      <Button
        display={"block"}
        variant="outlined"
        onClick={handleSubmit}
        sx={{ m: 2 }}
      >
        Submit
      </Button>
    </Box>
  );

  return authedComponent(authedUser, component, "Ask a Question");
};

const mapStateToProps = ({ authedUser }) => ({ authedUser });

export default connect(mapStateToProps)(AddNewQuestion);
