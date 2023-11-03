import { combineReducers } from "redux";
import employees from "./employees";
import polls from "./polls";
import authedUser from "./authedUser";

export default combineReducers({
  authedUser: authedUser,
  polls: polls,
  employees: employees,
});
