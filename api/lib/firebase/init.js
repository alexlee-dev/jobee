"use strict";

var _app = _interopRequireDefault(require("firebase/app"));

var _config = _interopRequireDefault(require("./config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_app.default.initializeApp(_config.default);