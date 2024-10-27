const chai = require("chai");
const assert = chai.assert;

const Translator = require("../components/translator.js");
const translator = new Translator();
const americanToBritish = [
  {
    text: "Mangoes are my favorite fruit.",
    translate: "Mangoes are my favourite fruit.",
  },
  {
    text: "I ate yogurt for breakfast.",
    translate: "I ate yoghurt for breakfast.",
  },
  {
    text: "Can you toss this in the trashcan for me?",
    translate: "Can you toss this in the bin for me?",
  },
  {
    text: "We had a party at my friend's condo.",
    translate: "We had a party at my friend's flat.",
  },
  {
    text: "The parking lot was full.",
    translate: "The car park was full.",
  },
  {
    text: "Like a high tech Rube Goldberg machine.",
    translate: "Like a high tech Heath Robinson device.",
  },
  {
    text: "To play hooky means to skip class or work.",
    translate: "To bunk off means to skip class or work.",
  },
  {
    text: "Lunch is at 12:15 today.",
    translate: "Lunch is at 12.15 today.",
  },
  {
    text: "Dr. Grosh will see you now.",
    translate: "Dr Grosh will see you now.",
  },
  {
    text: "No Mr. Bond, I expect you to die.",
    translate: "No Mr Bond, I expect you to die.",
  },
];

const britishToAmerican = [
  {
    text: "Have you met Mrs Kalyani?",
    translate: "Have you met Mrs. Kalyani?",
  },
  {
    text: "Prof Joyner of King's College, London.",
    translate: "Prof. Joyner of King's College, London.",
  },
];

suite("Unit Tests", () => {
  suite("Test American to British word translation", () => {
    americanToBritish.forEach((text) => {
      test("Translate Mangoes are my favorite fruit. to British English", (done) => {
        assert.equal(
          translator.translate(text.text, "american-to-british"),
          text.translate
        );
        done();
        //test ends at the following brackets
      });
    });
  });
  suite("Test British to American word translation", () => {
    britishToAmerican.forEach((text) => {
      test("Translate Mangoes are my favorite fruit. to British English", (done) => {
        assert.equal(
          translator.translate(text.text, "british-to-american"),
          text.translate
        );
        done();
        //test ends at the following brackets
      });
    });
  });
});
