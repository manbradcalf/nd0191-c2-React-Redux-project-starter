import React from 'react';
import { connect } from 'react-redux';
import Question from './Question';
import { authedComponent } from '../util/helpers';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

const Questions = ({ questions }) => {
  return (
    <div>
        <Grid2 container rowSpacing={2} columns={2}>
          {questions?.map((question) => {
            return (
              <Grid2 key={question.id} xs={1}>
                <Question question={question} />
              </Grid2>
            );
          })}
        </Grid2>
    </div>
  );
};
export default Questions;
