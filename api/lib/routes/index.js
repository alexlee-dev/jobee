"use strict";

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _logging = require("../util/logging");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router();

router.use(function (req, res, next) {
  return (0, _logging.allowCors)(res, next);
});
router.use((0, _morgan.default)('tiny'));
router.get('/', function (req, res) {
  (0, _logging.logNewRequest)('/');
  res.send('API is running sucessfully.');
});
module.exports = router;