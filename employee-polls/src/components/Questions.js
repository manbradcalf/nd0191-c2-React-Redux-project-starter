import React from "react";
import { connect } from "react-redux";
import Question from "./Question";
import { authedComponent } from "../util/helpers";
import { List, ListItem } from "@mui/material";

const Questions = ({ questions, employees, authedUser }) => {
  const component = (
    <div>
      <div className="bordered">
        <h2>Questions</h2>
        <List className="dashboard-list">
          {questions?.map((question) => {
            return (
              <ListItem key={question.id}>
                <Question question={question} />
              </ListItem>
            );
          })}
        </List>
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
