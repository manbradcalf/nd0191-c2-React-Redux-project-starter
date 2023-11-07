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

export function saveQuestionAnswer(authedUser, questionId, answer) {
  return _saveQuestionAnswer(authedUser, questionId, answer);
}
