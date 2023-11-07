export const RECEIVE_EMPLOYEES = 'RECEIVE_EMPLOYEES';
export const ADD_NEW_QUESTION_TO_USER = 'ADD_NEW_QUESTION_TO_USER';

export function receiveEmployees(employees) {
  return {
    type: RECEIVE_EMPLOYEES,
    employees,
  };
}
export function addNewQuestionToUser(qid, authedUser) {
  return {
    type: ADD_NEW_QUESTION_TO_USER,
    qid,
    authedUser,
  };
}
