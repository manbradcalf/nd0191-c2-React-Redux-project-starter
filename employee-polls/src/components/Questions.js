import React from "react";
import { connect } from "react-redux";

export const Questions = ({ store, questions, employees }) => {
  console.log("questions in questions", questions);
  return (
    <div className="bordered">
      <p>Questions</p>
      <ul className="dashboard-list">
        {store.questions?.map((q) => {
          return <li>{q}</li>;
        })}
      </ul>
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
