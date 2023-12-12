import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from './_DATA.js';

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

export async function authenticate(username, password) {
  let res = await fetch('http://localhost:8080/login');
  console.log(res);
}
