// The answered and unanswered polls are both available at the root.
// The user can alternate between viewing answered and unanswered polls.
// The unanswered questions are shown by default.
// The name of the logged in user is visible on the page.

// complete:
// The user can navigate to the leaderboard.
// The user can navigate to the form that allows the user to create a new poll.

import React from "react";
import { connect } from "react-redux";
import Login from "./Login";

const Home = ({
  dispatch,
  questionsProp,
  employeesProp,
  authedUser,
  loadingProp,
}) => {
  // loading state
  if (loadingProp) {
    return <h1>Loading!</h1>;
  } else if (!authedUser?.authedUser?.id) {
    return <Login dispatch={dispatch} />;
  } else {
    return (
      <div className="bordered">
        <h1>Home component</h1>
        <p>authed user is {authedUser.authedUser.id}</p>
        <div className="bordered">
          <h2>Question of the day</h2>
          <p>{questionsProp[0].optionOne.text}</p>
          <b>OR</b>
          <p>{questionsProp[0].optionTwo.text}</p>
          <h2>Asked by</h2>
          <p>{questionsProp[0].author}</p>
        </div>
      </div>
    );
  }
};

const mapStateToProps = ({ questions, employees, authedUser }) => {
  // map the data to a list. the ids are actally in the values already
  const questionsList = questions ? Object.values(questions) : [];
  const employeesList = employees ? Object.values(employees) : [];
  return {
    questionsProp: questionsList,
    employeesProp: employeesList,
    authedUser: authedUser,
    loadingProp: questionsList.length === 0 && employeesList.length === 0,
  };
};

export default connect(mapStateToProps)(Home);
