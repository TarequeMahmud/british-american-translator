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
    text: "We watched the footie match for a while.",
    translate: "We watched the soccer match for a while.",
  },
  {
    text: "Paracetamol takes up to an hour to work.",
    translate: "Tylenol takes up to an hour to work.",
  },
  {
    text: "I spent the bank holiday at the funfair.",
    translate: "I spent the public holiday at the carnival.",
  },
  {
    text: "I've just got bits and bobs in my bum bag.",
    translate: "I've just got odds and ends in my fanny pack.",
  },
  {
    text: "The car boot sale at Boxted Airfield was called off.",
    translate: "The swap meet at Boxted Airfield was called off.",
  },
  {
    text: "Have you met Mrs Kalyani?",
    translate: "Have you met Mrs. Kalyani?",
  },
  {
    text: "Prof Joyner of King's College, London.",
    translate: "Prof. Joyner of King's College, London.",
  },
  {
    text: "First, caramelise the onions.",
    translate: "First, caramelize the onions.",
  },
  {
    text: "I had a bicky then went to the chippy.",
    translate: "I had a cookie then went to the fish-and-chip shop.",
  },
  {
    text: "Tea time is usually around 4 or 4.30.",
    translate: "Tea time is usually around 4 or 4:30.",
  },
];
const highlightTranslate = [
  {
    text: "Mangoes are my favorite fruit.",
    translate: 'Mangoes are my <span class="highlight">favourite</span> fruit.',
    locale: "american-to-british",
  },
  {
    text: "I ate yogurt for breakfast.",
    translate: 'I ate <span class="highlight">yoghurt</span> for breakfast.',
    locale: "american-to-british",
  },
  {
    text: "We watched the footie match for a while.",
    translate:
      'We watched the <span class="highlight">soccer</span> match for a while.',
    locale: "british-to-american",
  },
  {
    text: "Paracetamol takes up to an hour to work.",
    translate:
      '<span class="highlight">Tylenol</span> takes up to an hour to work.',
    locale: "british-to-american",
  },
];

suite("Unit Tests", () => {
  suite("Test American to British word translation", () => {
    americanToBritish.forEach((text) => {
      test("Translate to British English", (done) => {
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
      test("Translate to American English", (done) => {
        assert.equal(
          translator.translate(text.text, "british-to-american"),
          text.translate
        );
        done();
        //test ends at the following brackets
      });
    });
  });
  suite("Test highlight of translation", () => {
    highlightTranslate.forEach((text) => {
      test("HighLight Translation", (done) => {
        assert.equal(
          translator.translate(
            text.text,
            text.locale,
            translator.highlightText
          ),
          text.translate
        );
        done();
        //test ends at the following brackets
      });
    });
  });
});
