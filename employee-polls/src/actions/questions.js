import { saveQuestion } from "../util/api";
import { addNewQuestionToUser } from "./employees";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_NEW_QUESTION = "ADD_NEW_QUESTION";
export const ADD_ANSWER_TO_QUESTION = "ADD_ANSWER_TO_QUESTION";

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
      .catch((e) => console.error(e));
  };
}

export function addAnswerToQuestion(authedUser, question,questions, answer) {
  return {
    type: ADD_ANSWER_TO_QUESTION,
    authedUser,
    question,
    questions,
    answer,
  };
}
