import React from "react";
import { connect } from "react-redux";

const Home = ({ questions, employes }) => {
  return (
    <div className="bordered">
      <h1>Home component!</h1>
      <h2>Question of the day</h2>
      <p>{questions && JSON.stringify(questions)}</p>
      <b>OR</b>
      <h2>Asked by</h2>
    </div>
  );
};

const mapStateToProps = ({ questions, employees }) => ({
  questions,
  employees,
});

export default connect(mapStateToProps)(Home);
