import { combineReducers } from "redux";
import employees from "./employees";
import questions from "./questions";
import authedUser from "./authedUser";

export default combineReducers({
  authedUser: authedUser,
  questions: questions,
  employees: employees,
});
