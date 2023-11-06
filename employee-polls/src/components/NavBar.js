import React from 'react';
import { Link } from 'react-router-dom';
export const NavBar = () => {
  return (
    <div className="bordered">
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/questions">Questions</Link>
          </li>
          <li>
            <Link to="/leaderboard">Leaderboard</Link>
          </li>
          <li>
            <Link to="/new">New Question</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
