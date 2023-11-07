import { RECEIVE_QUESTIONS, ADD_NEW_QUESTION } from '../actions/questions';

export default function questionsReducer(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };

    case ADD_NEW_QUESTION:
      const { question } = action;
      return {
        ...state,
        [question.id]: question,
      };

    default:
      return state;
  }
}
