export const SET_SELECTED_PAGE = 'SET_SELECTED_PAGE';

export function setSelectedPage(selectedPage) {
  return {
    type: SET_SELECTED_PAGE,
    selectedPage,
  };
}
