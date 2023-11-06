import logo from '../logo.svg';
import '../App.css';
import { useEffect } from 'react';
import { handleInitialData } from '../actions/shared';
import { connect } from 'react-redux';
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Questions from './Questions';
import Leaderboard from './Leaderboard';
import { AddNewQuestion } from './AddNewQuestion';
import { NavBar } from './NavBar';
import QuestionDetail from './QuestionDetailPage';

const App = ({ dispatch, employees, questions }) => {
  useEffect(() => {
    dispatch(handleInitialData());
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/add" element={<AddNewQuestion />} />
          <Route path="/question/:id" element={<QuestionDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
