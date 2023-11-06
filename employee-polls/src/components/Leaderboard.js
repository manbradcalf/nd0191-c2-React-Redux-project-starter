import React from 'react';
import { connect } from 'react-redux';

const Leaderboard = ({ questions, employees, authedUser }) => {
  console.log('leaderboard employees', employees);
  return (
    <div className="bordered">
      <p>Leaderboard</p>
      <ul>
        {employees &&
          employees.map((employee) => {
            return (
              <li>
                {employee.name} asked {Object.values(employee.answers).length} questions
              </li>
            );
          })}
      </ul>
    </div>
  );
};

const mapStateToProps = ({ questions, employees, authedUser }) => ({
  employees: Object.values(employees).sort(
    (a, b) => Object.values(b.answers).length - Object.values(a.answers).length
  ),
});

export default connect(mapStateToProps)(Leaderboard);
