import React from "react";
import { connect } from "react-redux";
import Question from "./Question";
import { authedComponent } from "../util/helpers";

const Questions = ({ questions, employees, authedUser }) => {
  const component = (
    <div>
      <div className="bordered">
        <h1>Questions Component</h1>
        <h2>Questions</h2>
        <ul className="dashboard-list">
          {questions?.map((question) => {
            return (
              <li key={question.id}>
                <Question question={question} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );

  return authedComponent(authedUser, component, "Questions");
};

// called when the store is updated
// because we connected it via connect(mapStateToProps)(Dashboard)
const mapStateToProps = ({ employees, questions, authedUser }) => ({
  questions: Object.values(questions),
  employees: Object.values(employees),
  authedUser: authedUser,
});

export default connect(mapStateToProps)(Questions);
