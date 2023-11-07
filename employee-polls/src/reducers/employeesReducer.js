import { RECEIVE_EMPLOYEES } from '../actions/employees';
import { ADD_NEW_QUESTION_TO_USER } from '../actions/questions';

export default function employeesReducer(state = {}, action) {
  switch (action.type) {
    case RECEIVE_EMPLOYEES:
      return {
        ...state,
        ...action.employees,
      };
    case ADD_NEW_QUESTION_TO_USER:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          questions: state[action.authedUser].questions.concat(action.qid),
        },
      };
    default:
      return state;
  }
}
