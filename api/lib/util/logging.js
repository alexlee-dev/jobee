"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPreloadedJSON = exports.allowCors = exports.logResponse = exports.logNewRequest = exports.error = exports.success = exports.log = exports.createTitle = void 0;

var _figlet = _interopRequireDefault(require("figlet"));

var _boxen = _interopRequireDefault(require("boxen"));

var _gradientString = _interopRequireDefault(require("gradient-string"));

var _chalk = _interopRequireDefault(require("chalk"));

var _moment = _interopRequireDefault(require("moment"));

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createTitle = function createTitle(text) {
  return new Promise(function (resolve, reject) {
    (0, _figlet.default)(text, {
      font: 'Speed'
    }, function (err, data) {
      if (err) {
        console.log('Error in Figlet.');
        console.log(err);
        reject(err);
      } else {
        console.log((0, _boxen.default)(_gradientString.default.pastel(data), {
          padding: 1,
          margin: 1,
          borderStyle: 'round',
          align: 'center',
          float: 'center'
        }));
        resolve();
      }
    });
  });
};

exports.createTitle = createTitle;

var log = function log(message) {
  return console.log(_chalk.default.yellowBright(message));
};

exports.log = log;

var success = function success(message) {
  return console.log(_chalk.default.greenBright(message));
};

exports.success = success;

var error = function error(message) {
  return console.log(_chalk.default.redBright(message));
};

exports.error = error;

var logNewRequest = function logNewRequest(path) {
  var time = (0, _moment.default)().format('h:mm:ss A');
  log('--------------------');
  log("New request for \"".concat(path, "\" at ").concat(time, "."));
};

exports.logNewRequest = logNewRequest;

var logResponse = function logResponse(content) {
  console.log('');

  if (content.length > 99) {
    var final = content.slice(0, 99);
    console.log(_chalk.default.greenBright('RESPONSE: ') + _chalk.default.italic('Response too long. Shortened to ... ') + _chalk.default.magentaBright(final));
    return;
  }

  console.log(_chalk.default.greenBright('RESPONSE: ') + _chalk.default.magentaBright(content));
};

exports.logResponse = logResponse;

var allowCors = function allowCors(res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
};
/**
 * Reads a JSON file.
 * @param {String} responseName Name of JSON file in responses folder.
 * @returns {Promise}
 */


exports.allowCors = allowCors;

var getPreloadedJSON = function getPreloadedJSON(responseName) {
  return new Promise(function (resolve, reject) {
    _fs.default.readFile(__dirname + "/responses/".concat(responseName, ".json"), 'utf8', function (err, data) {
      if (err) {
        reject(err);
      } else {
        var obj = JSON.parse(data);
        resolve({
          parsedJSON: obj,
          originalData: data
        });
      }
    });
  });
};

exports.getPreloadedJSON = getPreloadedJSON;