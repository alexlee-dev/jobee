"use strict";

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _logging = require("../util/logging");

var _scraper = _interopRequireDefault(require("../util/scraper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router();

router.use(function (req, res, next) {
  return (0, _logging.allowCors)(res, next);
});
router.use((0, _morgan.default)('tiny'));
router.get('/scraper', function (req, res) {
  (0, _logging.logNewRequest)('/scraper');
  (0, _scraper.default)();
  res.send('scraper response');
});
module.exports = router;