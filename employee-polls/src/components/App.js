import logo from "../logo.svg";
import "../App.css";
import { useEffect } from "react";
import { handleInitialData } from "../actions/shared";
import { connect } from "react-redux";
import { Home } from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Questions } from "./Questions";
import { Leaderboard } from "./Leaderboard";

const App = ({ dispatch, questions, employees }) => {
  useEffect(() => {
    dispatch(handleInitialData());
  }, []);

  return (
    <div className="app">
      <h1>Welcome to Employee Questions!</h1>
      <h2>Questions</h2>
      <p>{questions[0].id}</p>
      <h2>Employees</h2>
      <p>{employees[0].id}</p>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
const mapStateToProps = ({ employees, questions }) => ({
  questions: Object.values(questions),
  employees: Object.values(employees),
});

export default connect(mapStateToProps)(App);
