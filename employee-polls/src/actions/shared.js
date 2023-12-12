import { getInitialData, saveQuestionAnswer } from '../util/api';
import { receiveEmployees, addAnswerToUser } from './employeesActions';
import { receiveQuestions, addAnswerToQuestion } from './questionsActions';
import { setAuthedUser } from './authedUserActions';
import { setSelectedPage } from './navbarActions';
import { authenticate } from '../util/api';

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData()
      .then(({ employees, questions, id }) => {
        dispatch(receiveQuestions(questions));
        dispatch(receiveEmployees(employees));
        dispatch(setAuthedUser(id));
      })
      .catch((e) => {
        console.log(e);
      });
  };
}
export function handleLogin(username, password) {
  return (dispatch) => {
    return authenticate(username, password)
      .then(dispatch(setAuthedUser(username)))
      .catch((e) => {
        console.log('unable to login', e);
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
