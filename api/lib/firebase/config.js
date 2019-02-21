"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

var apiKey = process.env.FIREBASE_API_KEY;
var authDomain = process.env.FIREBASE_AUTH_DOMAIN;
var databaseURL = process.env.FIREBASE_DATABASE_URL;
var projectId = process.env.FIREBASE_PROJECT_ID;
var storageBucket = process.env.FIREBASE_STORAGE_BUCKET;
var messagingSenderId = proccess.env.FIREBASE_MESSAGING_SENDER_ID;
var _default = {
  apiKey: apiKey,
  authDomain: authDomain,
  databaseURL: databaseURL,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId
};
exports.default = _default;