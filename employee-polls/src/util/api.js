import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from "./_DATA.js";
import Login from "../components/Login.js";

export function getInitialData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([employees, questions]) => {
      return {
        employees,
        questions,
      };
    }
  );
}
export function saveQuestion(question, authedUserId) {
  return _saveQuestion(question, authedUserId);
}

export function saveQuestionAnswer(authedUser, qid, answer) {
  return _saveQuestionAnswer({ authedUser, qid, answer });
}

export const checkAuth = (authedUser, component, componentName) => {
  if (!authedUser) {
    return (
      <div>
        <h1>Please login to view {componentName}</h1>
        <Login />
      </div>
    );
  } else {
    return component;
  }
};
