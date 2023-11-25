import { getInitialData, saveQuestionAnswer } from '../util/api';
import { receiveEmployees, addAnswerToUser } from './employeesActions';
import { receiveQuestions, addAnswerToQuestion } from './questionsActions';
import { setAuthedUser } from './authedUserActions';
import { setSelectedPage } from './navbarActions';

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData()
      .then(({ employees, questions, id }) => {
        dispatch(receiveQuestions(questions));
        dispatch(receiveEmployees(employees));
        dispatch(setAuthedUser(id));
        dispatch(setSelectedPage('Home'));
      })
      .catch((e) => {
        console.log(e);
      });
  };
}
export function handleQuestionAnswered(question, answer, authedUser) {
  return (dispatch, getState) => {
    const { authedUser, questions } = getState();
    // call the api
    return saveQuestionAnswer(authedUser, question, answer)
      .then((savedQuestion) => {
        // handle state
        dispatch(addAnswerToQuestion(authedUser, question, questions, answer));
      })

      .then((savedQuestion) => {
        // handle state
        dispatch(addAnswerToUser(authedUser, question, answer));
      })

      .catch((e) => {
        // todo: cleanup on failure
        console.error(e);
      });
  };
}
