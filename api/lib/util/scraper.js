"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _chalk = _interopRequireDefault(require("chalk"));

var _cheerio = _interopRequireDefault(require("cheerio"));

var _firestore = require("../firebase/firestore");

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

var mainListingURL = process.env.MAIN_LISTING_URL;
var singlePostURL = process.env.SINGLE_POST_URL;

var _default = function _default() {
  (0, _nodeFetch.default)(mainListingURL).then(function (response) {
    return response.text();
  }).then(function (htmlString) {
    // Give Cheerio all the raw HTML
    var $ = _cheerio.default.load(htmlString); // Array that will hold all jobId's


    var jobIds = []; // Push the jobId of each job link to the array

    $('.jv-job-list-name > a').each(function (i, element) {
      var href = element.attribs.href;
      var jobId = href.replace('/newrelic/job/', '');
      jobIds.push(jobId);
    }); // * Now you need to go through each jobId,
    // * check if it already exists in the database
    // * if it does already exist in the database - skip it
    // * if it does not already exist in the database - add it to the database

    jobIds.forEach(function (jobId) {
      (0, _firestore.checkIfDocumentExists)(jobId).then(function (result) {
        if (!result) {
          // Fetch information about the job
          (0, _nodeFetch.default)(singlePostURL + jobId).then(function (response) {
            return response.text();
          }).then(function (htmlString) {
            var $ = _cheerio.default.load(htmlString); // Job Posting JSON


            var parsedApplicationInfo = JSON.parse($('script[type="application/ld+json"]').get(0).firstChild.data);
            var _parsedApplicationInf = parsedApplicationInfo.jobLocation[0].address,
                addressCountry = _parsedApplicationInf.addressCountry,
                addressLocality = _parsedApplicationInf.addressLocality,
                addressRegion = _parsedApplicationInf.addressRegion;
            var datePosted = parsedApplicationInfo.datePosted,
                description = parsedApplicationInfo.description,
                employmentType = parsedApplicationInfo.employmentType,
                industry = parsedApplicationInfo.industry,
                title = parsedApplicationInfo.title; // Important information to be stored

            var jobInformation = {
              addressCountry: addressCountry || null,
              addressLocality: addressLocality || null,
              addressRegion: addressRegion || null,
              datePosted: datePosted || null,
              description: description || null,
              employmentType: employmentType || null,
              industry: industry || null,
              title: title || null // Store the information in the database

            };
            (0, _firestore.storeNewDocument)(jobId, jobInformation); // const fileData = { jobId, jobInformation }
            // fs.writeFile(
            //   `${jobId}.json`,
            //   JSON.stringify(fileData, null, 2),
            //   err => {
            //     if (err) {
            //       console.log(err)
            //     } else {
            //       console.log(`${jobId}.json written successfully!`)
            //     }
            //   }
            // )
            // console.log({ jobId, jobInformation })
          }).catch(function (error) {
            return console.log(error);
          });
        }
      });
    });
  }).catch(function (error) {
    return console.log(error);
  });
};

exports.default = _default;