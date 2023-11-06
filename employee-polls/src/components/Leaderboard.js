import React from 'react';
import { connect } from 'react-redux';

const Leaderboard = ({ questions, users, authedUser }) => {
  console.log("leaderboard users",users)
  return (
    <div className="bordered">
      <p>Leaderboard</p>
      <ul>
        {users &&
          users.map((user) => {
            return (
              <li>
                {user.name} asked {user.answers.size} questions
              </li>
            );
          })}
      </ul>
    </div>
  );
};

const mapStateToProps = ({ questions, users, authedUser }) => ({
  users: users?.sort(
    (a, b) => Object.keys(b.answers).length - Object.keys(a.answers).length
  ),
});

export default connect(mapStateToProps)(Leaderboard);
