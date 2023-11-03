import React from "react";
import { connect } from "react-redux";

export const Leaderboard = ({ questions, users, authedUser }) => {
  return (
    <div className="bordered">
      <p>Leaderboard</p>
    </div>
  );
};

const mapStateToProps = ({ questions, users, authedUser }) => ({
  users: users.sort(
    (a, b) => Object.keys(b.answers).length - Object.keys(a.answers).length
  ),
});

export default connect(mapStateToProps)(Leaderboard);
