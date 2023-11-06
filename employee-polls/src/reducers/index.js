import { combineReducers } from 'redux';
import employeesReducer from './employeesReducer';
import questionsReducer from './questionsReducer';
import authedUserReducer from './authedUserReducer';

const reducer = combineReducers({
  authedUser: authedUserReducer,
  questions: questionsReducer,
  employees: employeesReducer,
});

export default reducer;
