import { _saveQuestion } from "./util/_DATA";

describe("SaveQuestion", () => {
  it("returns true when correctly formatted data is passed to the function", async () => {
    let question = {
      optionOneText: "this",
      optionTwoText: "that",
      author: "test",
    };

    _saveQuestion(question, "tylermcginnis").then((res) => {
      expect(res.id).toBeDefined();
      expect(question.optionOneText).toMatch(res.optionOne.text);
      expect(question.optionTwoText).toMatch(res.optionTwo.text);
      expect(question.author).toMatch(res.author);
    });
  });

  it("returns an error when incorrectly formatted data is passed to the function", async () => {
    let invalidQuestion = {
      someProperty: "doesnt exist",
      invalidProperty: "this isnt a question",
      number: 42,
    };

    _saveQuestion(invalidQuestion, "tylermcginnis").catch((e) =>
      expect(e).toMatch(
        "Please provide optionOneText, optionTwoText, and author"
      )
    );
  });
});
