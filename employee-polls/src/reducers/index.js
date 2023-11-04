import { combineReducers } from "redux";
import employees from "./employees";
import questions from "./questions";
import authedUser from "./authedUser";

const reducer = combineReducers({
  authedUser: authedUser,
  questions: questions,
  employees: employees,
});
export default reducer
