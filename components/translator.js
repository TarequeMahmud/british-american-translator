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
      const matches = Object.keys(americanToBritishTitles).filter((value) =>
        text.toLowerCase().includes(value)
      );

      if (matches)
        matches.forEach((match) => {
          const regex = new RegExp(match, "i");
          text = text.replace(
            regex,
            americanToBritishTitles[match].charAt(0).toUpperCase() +
              americanToBritishTitles[match].slice(1)
          );
        });

      return text;
    }
  }
}

module.exports = Translator;
