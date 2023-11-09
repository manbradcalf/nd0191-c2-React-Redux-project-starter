import React from "react";
import { connect } from "react-redux";
import Question from "./Question";
import { authedComponent } from "../util/helpers";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const Questions = ({ questions, employees, authedUser }) => {
  const component = (
    <div>
      <div className="bordered">
        <h2>Questions</h2>
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
