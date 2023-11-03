import { getInitialData } from "../util/api";
import { receiveEmployees } from "./employees";
import { receiveQuestions } from "./questions";
import { setAuthedUser } from "./authedUser";

// todo: replace with auth functionality
const AUTHED_ID = "sarahedo";

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData()
      .then(({ employees, questions }) => {
        dispatch(receiveQuestions(questions));
        dispatch(receiveEmployees(employees));
        dispatch(setAuthedUser(AUTHED_ID));
      })
      .catch((e) => {
        console.log(e);
      });
  };
}
