import {
  ADD_ANSWER_TO_USER,
  RECEIVE_EMPLOYEES,
  ADD_NEW_QUESTION_TO_USER,
} from "../actions/employees";

export default function employeesReducer(state = {}, action) {
  const { authedUser, employees, answer, qid } = action;
  switch (action.type) {
    case RECEIVE_EMPLOYEES:
      return {
        ...state,
        ...employees,
      };

    case ADD_NEW_QUESTION_TO_USER:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          questions: state[authedUser].questions.concat(qid),
        },
      };

    case ADD_ANSWER_TO_USER:
      return {
        ...state,
        [action.authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [action.qid]: answer,
          },
        },
      };

    default:
      return state;
  }
}
