import { RECEIVE_QUESTIONS } from "../actions/questions";

export default function questions(state = {}, action) {
  console.log("inside questions reducer with action", action);
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    default:
      return state;
  }
}
