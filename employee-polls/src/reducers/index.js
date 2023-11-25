import { combineReducers } from 'redux';
import employeesReducer from './employeesReducer';
import questionsReducer from './questionsReducer';
import authedUserReducer from './authedUserReducer';
import navbarReducer from './navBarReducer';

const reducer = combineReducers({
  authedUser: authedUserReducer,
  questions: questionsReducer,
  employees: employeesReducer,
  navbar: navbarReducer,
});

export default reducer;
