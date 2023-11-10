import { render, fireEvent, getByTestId } from "@testing-library/react";
import React from "react";
import Question from "./components/Question";
import configureStore from "redux-mock-store";
import { exampleState } from "./exampleState";
import middleware from "./middleware";
import reducer from "./reducers";
import { Provider } from "react";
import { handleQuestionAnswered } from "./actions/shared";

const mockState = exampleState;
const mockStore = configureStore([]);
const store = mockStore(mockState);

describe("Question", () => {
  it("will match the snapshot when example state is passed", () => {
    var component = render(<Question store={mockStore(exampleState)} />);
    expect(component).toMatchSnapshot();
  });

  it("matches the snapshot when no data is passed", () => {
    var component = render(<Question store={mockStore({})} />);
    expect(component).toMatchSnapshot();
  });

  it("matches the snapshot when part of the data is missing", () => {
    mockState.employees = {};
    var component = render(<Question store={mockStore(mockState)} />);
    expect(component).toMatchSnapshot();
  });

  it("Dispatches event when optionOne selected", () => {
    let mockState = exampleState;
    let store = mockStore(mockState);

    store.dispatch = jest.fn();

    var component = render(<Question store={store} />);
    var voteOptionOneBtn = component.getByTestId("voteOptionOne");
    fireEvent.click(voteOptionOneBtn);
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });

  it("Dispatches event when optionTwo selected", () => {
    store.dispatch = jest.fn();
    var component = render(<Question store={store} />);
    var voteOptionTwoBtn = component.getByTestId("voteOptionTwo");

    fireEvent.click(voteOptionTwoBtn);

    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });
});
