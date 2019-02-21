"use strict";

var _express = _interopRequireDefault(require("express"));

require("./firebase/init");

var _logging = require("./util/logging");

var _index = _interopRequireDefault(require("./routes/index"));

var _scraper = _interopRequireDefault(require("./routes/scraper"));

var _package = require("../package.json");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
var port = 777;
app.get('/', _index.default);
app.get('/scraper', _scraper.default); // Listen for requests

app.listen(port, function () {
  console.clear();
  (0, _logging.createTitle)("".concat(_package.appName, " API")).then(function () {
    return setTimeout(function () {
      (0, _logging.success)("".concat(_package.appName, " API is now listening on port ").concat(port));
    }, 333);
  }).catch(function (error) {
    return error(error);
  });
});