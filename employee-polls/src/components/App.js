import logo from '../logo.svg';
import '../App.css';
import { useEffect } from 'react';
import { handleInitialData } from '../actions/shared';
import { connect } from 'react-redux';
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  Questions from './Questions';
import  Leaderboard  from './Leaderboard';

const App = ({ dispatch, employees, questions }) => {
  useEffect(() => {
    dispatch(handleInitialData());
  }, []);
  console.log('employees', employees);
  console.log('questions', questions);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
