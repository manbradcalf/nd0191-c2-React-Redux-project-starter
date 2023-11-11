// The answered and unanswered polls are both available at the root.
// The user can alternate between viewing answered and unanswered polls.
// The unanswered questions are shown by default.
// The name of the logged in user is visible on the page.

// complete:
// The user can navigate to the leaderboard.
// The user can navigate to the form that allows the user to create a new poll.

import React from 'react';
import { connect } from 'react-redux';
import { authedComponent } from '../util/helpers';
import Questions from './Questions';

const Home = ({ dispatch, questions, employees, authedUser, loading }) => {
  const component = (
    <div className="bordered">
      <h1>Home</h1>
      <div className="bordered">
        <div>
          <h2>Answered</h2>
          <Questions
            questions={questions.filter((q) =>
              q.optionOne.votes.includes(authedUser) ||
              q.optionTwo.votes.includes(authedUser)
            )}
          />
          <h2>Unanswered</h2>
          <Questions
            questions={questions.filter((q) =>
              !q.optionOne.votes.includes(authedUser) &&
              !q.optionTwo.votes.includes(authedUser)
            )}
          />
        </div>
      </div>
    </div>
  );
  // loading state
  if (loading) {
    return <h1>Loading!</h1>;
  } else {
    return authedComponent(authedUser, component, 'Home');
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
