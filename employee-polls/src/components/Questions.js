import React from 'react';
import { connect } from 'react-redux';
import { Question } from "./QuestionDetail"
const Questions = ({ questions, employees }) => {
  return (
    <div>
      <h1>Questions Component</h1>
      <div className="bordered">
        <h2>Questions</h2>
        <ul className="dashboard-list">
          {questions?.map((q) => {
            return (
              <li>
                <Question question={q}/>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

// called when the store is updated
// because we connected it via connect(mapStateToProps)(Dashboard)
const mapStateToProps = ({ employees, questions }) => ({
  questions: Object.values(questions),
  employees: Object.values(employees),
});

export default connect(mapStateToProps)(Questions);
