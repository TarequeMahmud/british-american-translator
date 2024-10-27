"use strict";

const Translator = require("../components/translator.js");

module.exports = function (app) {
  const translator = new Translator();

  app.route("/api/translate").post((req, res) => {
    const { text, locale } = req.body;
    console.log(req.body);

    const isValidate = translator.validate(text, locale);
    if (isValidate !== true) return res.json(isValidate);

    const translation = translator.translate(
      text,
      locale,
      translator.highlightText
    );
    if (text === translation)
      return res.json({
        text: text,
        translation: "Everything looks good to me!",
      });
    console.log(translation);

    return res.json({ text: text, translation: translation });
  });
};
