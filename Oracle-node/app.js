const express = require('express');
const bodyParser = require('body-parser');
const tools = require('./tools');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/fibonacci", function (req, res) {
  let answers = tools.generate(req.body);
  res.status(200).send(answers);
});

app.listen(3000, function () {
  console.log("app listening to version 2.0");
});
