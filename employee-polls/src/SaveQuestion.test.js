import { _saveQuestion } from "./util/_DATA";

describe("SaveQuestion", () => {
  it("returns true when correctly formatted data is passed to the function", async () => {
    let question = {
      optionOneText: "this",
      optionTwoText: "that",
      author: "test",
    };

    await _saveQuestion(question, "tylermcginnis").then((res) => {
      expect(res.id).toBeDefined();
      expect(res.optionOne.votes.length).toBe(0);
      expect(res.optionTwo.votes.length).toBe(0);
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

    await _saveQuestion(invalidQuestion, "tylermcginnis").catch((e) =>
      expect(e).toMatch(
        "Please provide optionOneText, optionTwoText, and author"
      )
    );
  });
});
