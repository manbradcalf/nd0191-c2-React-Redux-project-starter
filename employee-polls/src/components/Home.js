import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Home = ({ questionsProp, employeesProp, loadingProp }) => {
  if (!loadingProp) {
    return (
      <div className='bordered'>
        <h1>Home component</h1>

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
  } else {
    return <h1>Loading!</h1>;
  }
};

const mapStateToProps = ({ questions, employees }) => {
  // map the data to a list. the ids are actally in the values already
  const questionsList = questions ? Object.values(questions) : [];
  const employeesList = employees ? Object.values(employees) : [];
  return {
    questionsProp: questionsList,
    employeesProp: employeesList,
    loadingProp: questionsList.length === 0 && employeesList.length === 0,
  };
};

export default connect(mapStateToProps)(Home);
