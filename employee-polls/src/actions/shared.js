import { getInitialData } from "../utils/api";
import { receiveEmployees } from "./employees";
import { receivePolls } from "./polls";
import { setAuthedUser } from "./authedUser";

const AUTHED_ID = "TODO";

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ employees, polls }) => {
      dispatch(receivePolls(polls));
      dispatch(receiveEmployees(employees))
      dispatch(setAuthedUser(AUTHED_ID))
    });
  };
}
