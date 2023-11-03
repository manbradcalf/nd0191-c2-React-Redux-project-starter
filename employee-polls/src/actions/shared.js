import { getInitialData } from "../util/api";
import { receiveEmployees } from "./employees";
import { receivePolls } from "./polls";
import { setAuthedUser } from "./authedUser";

// todo: replace with auth functionality
const AUTHED_ID = "sarahedo";

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ employees, polls }) => {
      dispatch(receivePolls(polls));
      dispatch(receiveEmployees(employees));
      dispatch(setAuthedUser(AUTHED_ID));
    });
  };
}
