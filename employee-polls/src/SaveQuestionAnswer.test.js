// The following two unit tests must be present for _saveQuestionAnswer():
// An async unit test to verify that true is returned when correctly formatted data is passed to the function.
// An async unit test to verify that an error is returned if incorrect data is passed to the function.
import { _saveQuestionAnswer } from "./util/_DATA";

describe("SaveQuestionAnswer", () => {
  it("returns true when correctly formatted data is passed to the function", async () => {
    let answer = {
      authedUser: "tylermcginnis",
      qid: "loxhs1bqm25b708cmbf3g",
      answer: "optionOne",
    };

    let res = await _saveQuestionAnswer(answer);
    expect(res);
  });

  it("returns an error when incorrectly formatted data is passed to the function", async () => {
    let invalidAnswer = {
      someProperty: "doesnt exist",
      invalidProperty: "this isnt a question",
      number: 42,
    };

    _saveQuestionAnswer(invalidAnswer).catch((e) =>
      expect(e).toMatch(
        "Please provide authedUser, qid, and answer"
      )
    );
  });
});
