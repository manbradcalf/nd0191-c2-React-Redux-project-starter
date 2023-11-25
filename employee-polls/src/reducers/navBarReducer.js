import { SET_SELECTED_PAGE } from '../actions/navbarActions';

export default function navbarReducer(state = {}, action) {
  switch (action.type) {
    case SET_SELECTED_PAGE:
      return {
        ...state,
        selectedPage: action.selectedPage,
      };
    default:
      return state;
  }
}
