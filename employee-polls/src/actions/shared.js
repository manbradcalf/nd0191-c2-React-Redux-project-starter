import { getInitialData, saveQuestionAnswer } from "../util/api";
import { receiveEmployees, addAnswerToUser } from "./employees";
import { receiveQuestions, addAnswerToQuestion } from "./questions";
import { setAuthedUser } from "./authedUser";

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
export function handleQuestionAnswered(question, answer, authedUser) {
  return (dispatch, getState) => {
    const { authedUser, questions, employees } = getState();
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
