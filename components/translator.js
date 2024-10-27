const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");

class Translator {
  constructor() {
    this.locales = ["american-to-british", "british-to-american"];
  }

  validate(text, locale) {
    if (!text || !locale) return { error: "Required field(s) missing" };
    if (text === "") return { error: "No text to translate" };
    if (this.locales.indexOf(locale.toLowerCase()) === -1)
      return { error: "Invalid value for locale field" };
    return true;
  }
  translate(text, locale) {
    const isValidate = this.validate(text, locale);
    if (isValidate !== true) return isValidate;

    if (locale.toLowerCase() === this.locales[0]) {
      const titleMatches = Object.keys(americanToBritishTitles).filter(
        (value) => text.toLowerCase().includes(value)
      );
      const spellingMatches = Object.keys(americanToBritishSpelling).filter(
        (value) => text.toLowerCase().includes(value)
      );
      const wordMatches1 = Object.keys(americanOnly).filter((value) =>
        text.toLowerCase().includes(value)
      );
      const timeMatch = text.match(/[0-9]:[0-9]/g);

      if (titleMatches)
        titleMatches.forEach((match) => {
          const regex = new RegExp(match, "i");
          text = text.replace(
            regex,
            americanToBritishTitles[match].charAt(0).toUpperCase() +
              americanToBritishTitles[match].slice(1)
          );
        });

      if (spellingMatches) {
        spellingMatches.forEach((match) => {
          const regex = new RegExp(match, "i");
          text = text.replace(regex, americanToBritishSpelling[match]);
        });
      }
      if (wordMatches1) {
        wordMatches1.forEach((match) => {
          const regex = new RegExp(`${match}\\b`, "i");
          text = text.replace(regex, americanOnly[match]);
        });
      }
      if (timeMatch) {
        timeMatch.forEach((match) => {
          const newMatch = match.replace(":", ".");
          text = text.replace(match, newMatch);
        });
      }
    }
    return text;
  }
}

module.exports = Translator;
