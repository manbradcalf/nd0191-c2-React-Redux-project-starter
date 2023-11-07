import { SET_AUTHED_USER } from "../actions/authedUser";

export default function authedUserReducer(state = "", action) {
  switch (action.type) {
    case SET_AUTHED_USER:
      return action.id ?? null;
    default:
      return state;
  }
}
