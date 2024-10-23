const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");

class Translator {
  validate(text, locale) {
    const locales = ["american-to-british", "british-to-american"];
    if (!text || !locale) return { error: "Required field(s) missing" };
    if (text === "") return { error: "No text to translate" };
    if (locales.indexOf(locale.toLowerCase()) === -1)
      return { error: "Invalid value for locale field" };
    return true;
  }
}

module.exports = Translator;
