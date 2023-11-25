import {
  RECEIVE_QUESTIONS,
  ADD_NEW_QUESTION,
  ADD_ANSWER_TO_QUESTION,
} from '../actions/questionsActions';

export default function questionsReducer(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };

    case ADD_NEW_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,
      };

    case ADD_ANSWER_TO_QUESTION:
      // customize the question
      const newVotes = action.questions[action.question][
        action.answer
      ].votes.concat(action.authedUser);
      return {
        ...state,
        [action.question]: {
          ...state[action.question],
          [action.answer]: {
            ...state[action.question][action.answer],
            votes: newVotes,
          },
        },
      };

    default:
      return state;
  }
}
