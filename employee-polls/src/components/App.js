import logo from "../logo.svg";
import "../App.css";
import { useEffect } from "react";
import { handleInitialData } from "../actions/shared";
import { connect } from "react-redux";
import { Home } from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Polls } from "./Polls";

function App({ dispatch }) {
  useEffect(() => {
    dispatch(handleInitialData());
  }, []);
  return (
    <div className="app">
      <h1>Welcome to Polls!</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/polls" element={<Polls />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
const mapStateToProps = () => {};
export default connect()(App);
