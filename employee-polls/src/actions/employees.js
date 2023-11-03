export const RECEIVE_EMPLOYEES = "RECEIVE_EMPLOYEES";

export function receiveEmployees(employees) {
  return {
    type: RECEIVE_EMPLOYEES,
    employees
  }
}
