import { getInitialData } from "../util/api";
import { receiveEmployees } from "./employees";
import { receiveQuestions } from "./questions";
import { setAuthedUser } from "./authedUser";

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData()
      .then(({ employees, questions, id }) => {
        dispatch(receiveQuestions(questions));
        dispatch(receiveEmployees(employees));
        dispatch(setAuthedUser(id));
      })
      .catch((e) => {
        console.log(e);
      });
  };
}
