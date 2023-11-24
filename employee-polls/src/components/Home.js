import React, { useState } from 'react';
import { connect } from 'react-redux';
import Questions from './Questions';
import { Tabs, Tab } from '@mui/material';
import Login from './Login';

const Home = ({ dispatch, questions, employees, authedUser, loading }) => {
  const [selected, setSelected] = useState(0);

  const answeredQuestions = questions
    .filter(
      (q) =>
        q.optionOne.votes.includes(authedUser) ||
        q.optionTwo.votes.includes(authedUser)
    )
    .sort((a, b) => {
      return b.timestamp - a.timestamp;
    });

  const unansweredQuestions = questions
    .filter(
      (q) =>
        !q.optionOne.votes.includes(authedUser) &&
        !q.optionTwo.votes.includes(authedUser)
    )
    .sort((a, b) => {
      return b.timestamp - a.timestamp;
    });

  const handleChange = (event, selectedTab) => {
    setSelected(selectedTab);
  };

  const component = (
    <div>
      <div>
        <Tabs value={selected} onChange={handleChange}>
          <Tab label="Unanswered" />
          <Tab label="Answered" />
        </Tabs>

        <div hidden={selected === 1}>
          <Questions
            questions={unansweredQuestions}
            isSelected={selected === 'unanswered'}
          />
        </div>
        <div hidden={selected === 0}>
          <Questions
            questions={answeredQuestions}
            isSelected={selected === 'answered'}
          />
        </div>
      </div>
    </div>
  );

  // loading state
  if (loading) {
    return <h1>Loading!</h1>;
  } else {
    return authedUser ? component : <Login />;
  }
};

const mapStateToProps = ({ questions, employees, authedUser }) => {
  // map the data to a list. the ids are actally in the values already
  const questionsList = questions ? Object.values(questions) : [];
  const employeesList = employees ? Object.values(employees) : [];
  return {
    questions: questionsList,
    employees: employeesList,
    authedUser: authedUser ? authedUser : '',
    loading: questionsList.length === 0 && employeesList.length === 0,
  };
};

export default connect(mapStateToProps)(Home);
