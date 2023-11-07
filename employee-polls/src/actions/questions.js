import { saveQuestion } from '../util/api';
import { addNewQuestionToUser } from './employees';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_NEW_QUESTION = 'ADD_NEW_QUESTION';
export const ADD_NEW_QUESTION_TO_USER = 'ADD_NEW_QUESTION_TO_USER';

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

export function addNewQuestion(question) {
  return {
    type: ADD_NEW_QUESTION,
    question,
  };
}

export function handleAddNewQuestion(optionOne, optionTwo) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    const question = {
      optionOneText: optionOne,
      optionTwoText: optionTwo,
      author: authedUser,
    };

    return saveQuestion(question, authedUser)
      .then((savedQuestion) => dispatch(addNewQuestion(savedQuestion)))
      .then((savedQuestion) =>
        dispatch(addNewQuestionToUser(savedQuestion.question.id, authedUser))
      )
      .catch((e) => console.log(e));
  };
}
