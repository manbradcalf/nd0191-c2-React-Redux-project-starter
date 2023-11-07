import { _saveQuestion } from '../util/_DATA';
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_NEW_QUESTION = 'ADD_NEW_QUESTION';

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
    console.log('handleAddNewQuestion pt 2');
    const { authedUser } = getState();

    const question = {
      optionOneText: optionOne,
      optionTwoText: optionTwo,
      author: authedUser,
    };

    return _saveQuestion(question)
      .then((question) => dispatch(addNewQuestion(question)))
      .catch((e) => console.log(e));
  };
}
