const chai = require("chai");
const assert = chai.assert;

const Translator = require("../components/translator.js");
const translator = new Translator();

suite("Unit Tests", () => {
  suite("Test American to British Title translation", () => {
    test("Translate Dr. Grosh will see you now. to British English", (done) => {
      const text = "Dr. Grosh will see you now.";
      const result = "Dr Grosh will see you now.";
      assert.equal(translator.translate(text, "american-to-british"), result);
      done();
      //test ends at the following brackets
    });
    test("Translate 'No Mr. Bond, I expect you to die.' to British English", (done) => {
      const text = "No Mr. Bond, I expect you to die.";
      const result = "No Mr Bond, I expect you to die.";
      assert.equal(translator.translate(text, "american-to-british"), result);
      done();
      //test ends at the following brackets
    });
  });
});
