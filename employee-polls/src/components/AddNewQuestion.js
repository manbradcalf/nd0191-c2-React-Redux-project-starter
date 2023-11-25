import React from 'react';
import { Button, TextField, Box, Typography } from '@mui/material';
import { connect } from 'react-redux';
import { handleAddNewQuestion } from '../actions/questions';
import { useState } from 'react';
import { authedComponent } from '../util/helpers';
import { useNavigate } from 'react-router-dom';

const AddNewQuestion = ({ store, dispatch, authedUser }) => {
  const [optionOne, setOptionOne] = useState('');
  const [optionTwo, setOptionTwo] = useState('');
  const navigate = useNavigate();

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
    navigate('/');
  };

  const component = (
    <Box textAlign={'center'}>
      <Typography variant="h6" padding={'2vw'}>
        Would you rather...
      </Typography>

      <Box width={'auto'}>
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
        display={'block'}
        variant="outlined"
        onClick={handleSubmit}
        sx={{ m: 2 }}
      >
        Submit
      </Button>
    </Box>
  );

  return authedComponent(authedUser, component, 'Ask a Question');
};

const mapStateToProps = ({ authedUser }) => ({ authedUser });

export default connect(mapStateToProps)(AddNewQuestion);
