import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";

const NavBar = ({ dispatch, authedUser }) => {
  const handleAuth = (event) => {
    event.preventDefault();
    console.log("handleAuth", authedUser);
    if (authedUser) {
      dispatch(setAuthedUser(null));
    } else {
      console.log("You are logged out. Navigate to Log In component for auth");
    }
  };

  return (
    <div className="bordered">
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/leaderboard">Leaderboard</Link>
          </li>
          <li>
            <Link to="/add">Ask</Link>
          </li>
        </ul>
        <Button variant="outlined" onClick={handleAuth}>
          {authedUser ? "Log Out" : "Log In"}
        </Button>
      </nav>
    </div>
  );
};
const mapStateToProps = ({ authedUser }) => ({
  authedUser,
});

export default connect(mapStateToProps)(NavBar);
