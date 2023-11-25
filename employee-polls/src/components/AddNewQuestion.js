import React from 'react';
import { Button, TextField, Box, Typography } from '@mui/material';
import { connect } from 'react-redux';
import { handleAddNewQuestion } from '../actions/questionsActions';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthedComponent } from './AuthedComponent';
import { useEffect } from 'react';
import { setSelectedPage } from '../actions/navbarActions';

const AddNewQuestion = ({ store, dispatch, authedUser }) => {
  const [optionOne, setOptionOne] = useState('Buy an Android');
  const [optionTwo, setOptionTwo] = useState('Buy an iPhone');
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setSelectedPage('Ask'));
  },[dispatch]);

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
          value={optionOne}
          sx={{ width: 1 / 2 }}
        />
        <Typography sx={{ m: 2 }}> or </Typography>
        <TextField
          id="optionTwo"
          label="Option Two"
          multiline
          rows={2}
          value={optionTwo}
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

  return (
    <AuthedComponent
      authedUser={authedUser}
      dispatch={dispatch}
      component={component}
      componentName={'Ask a Question'}
    />
  );
};

const mapStateToProps = ({ authedUser }) => ({ authedUser });

export default connect(mapStateToProps)(AddNewQuestion);
