// The application shows the text “Would You Rather” and has a form for creating two options.
// Upon submitting the form, a new poll is created and the user is taken to the home page.
// The new polling question appears in the correct category on the home page.
// The form is available at/add.
import React from "react";
import { Button, TextField } from "@mui/material";
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
    <div className="bordered">
      <h1>Ask a Question!</h1>
      <p>Would you rather?</p>
      <TextField variant="standard" onChange={handleOptionOne} />
      <p>or</p>
      <TextField variant="standard" onChange={handleOptionTwo} />
      <br />
      {authedUser ? (
        <Button variant="outlined" onClick={handleSubmit}>
          Submit
        </Button>
      ) : (
        <b> Please log in to submit a question</b>
      )}
    </div>
  );

  return authedComponent(authedUser, component, "Ask a Question");
};

const mapStateToProps = ({ authedUser }) => ({ authedUser });

export default connect(mapStateToProps)(AddNewQuestion);
