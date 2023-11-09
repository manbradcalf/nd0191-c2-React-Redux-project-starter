import {
  ADD_ANSWER_TO_USER,
  RECEIVE_EMPLOYEES,
  ADD_NEW_QUESTION_TO_USER,
} from "../actions/employees";

export default function employeesReducer(state = {}, action) {
  switch (action.type) {
    case RECEIVE_EMPLOYEES:
      return {
        ...state,
        ...action.employees,
      };
      break;

    case ADD_NEW_QUESTION_TO_USER:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          questions: state[action.authedUser].questions.concat(action.qid),
        },
      };
      break;

    case ADD_ANSWER_TO_USER:
      break;
    default:
      return state;
  }
}
