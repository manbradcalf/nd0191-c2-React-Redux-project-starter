// The Leaderboard is available at/leaderboard.
// Each entry on the leaderboard contains the following:
// the user’s name;
// the user’s avatar;
// the number of questions the user asked; and
// the number of questions the user answered.
// Users are ordered in descending order based on the sum of the number of questions they’ve answered and the number of questions they’ve asked.
import React from "react";
import { connect } from "react-redux";
import { authedComponent } from "../util/helpers";

const Leaderboard = ({ questions, employees, authedUser }) => {

  const component = (
    <div className="bordered">
      <p>Leaderboard</p>
      <ul>
        {employees &&
          employees.map((employee) => {
            return (
              <li>
                {employee.name} asked {Object.values(employee.questions).length}{" "}
                questions
              </li>
            );
          })}
      </ul>
    </div>
  );

  return authedComponent(authedUser, component, "Leaderboard");
};

const mapStateToProps = ({ questions, employees, authedUser }) => ({
  employees: Object.values(employees).sort(
    (a, b) =>
      Object.values(b.questions).length - Object.values(a.questions).length
  ),
  authedUser,
});

export default connect(mapStateToProps)(Leaderboard);
