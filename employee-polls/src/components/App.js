import logo from "../logo.svg";
import "../App.css";
import { useEffect } from "react";
import { handleInitialData } from "../actions/shared";
import { connect } from "react-redux";
import { Home } from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Questions } from "./Questions";
import { Leaderboard } from "./Leaderboard";

const App = ({ dispatch, employees, questions }) => {
  useEffect(() => {
    dispatch(handleInitialData());
  }, []);
  console.log("employees", employees);
  console.log("questions", questions);

  if (questions !== null) {
    return (
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/questions" element={<Questions />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Routes>
        </BrowserRouter>

        <h1>App component!</h1>
        <i>why does this get store updates?</i>
        <h2>Question of the day</h2>
        <p>{questions[0] && questions[0].optionOne.text}</p>
        <b>OR</b>
        <p>{questions[0] && questions[0].optionTwo.text}</p>
      </div>
    );
  } else {
    return <h1>Loading!</h1>;
  }
};

const mapStateToProps = ({ employees, questions }) => ({
  employees: Object.values(employees),
  questions: Object.values(questions),
});

export default connect(mapStateToProps)(App);
