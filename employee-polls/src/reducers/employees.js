import { RECEIVE_EMPLOYEES } from "../actions/employees";

export default function employees(state = {}, action) {
  switch (action.type) {
    case RECEIVE_EMPLOYEES:
      return {
        ...state,
        ...action.employees,
      };
    default:
      return state;
  }
}
