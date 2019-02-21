import fetch from 'node-fetch'
import dotenv from 'dotenv'
import chalk from 'chalk'
import cheerio from 'cheerio'
import {
  connectToCollection,
  checkIfDocumentExists,
  storeNewDocument
} from '../firebase/firestore'
import fs from 'fs'
dotenv.config()
const mainListingURL = process.env.MAIN_LISTING_URL
const singlePostURL = process.env.SINGLE_POST_URL

export default () => {
  fetch(mainListingURL)
    .then(response => response.text())
    .then(htmlString => {
      // Give Cheerio all the raw HTML
      const $ = cheerio.load(htmlString)

      // Array that will hold all jobId's
      const jobIds = []

      // Push the jobId of each job link to the array
      $('.jv-job-list-name > a').each((i, element) => {
        const { href } = element.attribs
        const jobId = href.replace('/newrelic/job/', '')
        jobIds.push(jobId)
      })

      // * Now you need to go through each jobId,
      // * check if it already exists in the database
      // * if it does already exist in the database - skip it
      // * if it does not already exist in the database - add it to the database

      jobIds.forEach(jobId => {
        checkIfDocumentExists(jobId).then(result => {
          if (!result) {
            // Fetch information about the job
            fetch(singlePostURL + jobId)
              .then(response => response.text())
              .then(htmlString => {
                const $ = cheerio.load(htmlString)
                // Job Posting JSON
                const parsedApplicationInfo = JSON.parse(
                  $('script[type="application/ld+json"]').get(0).firstChild.data
                )

                const {
                  addressCountry,
                  addressLocality,
                  addressRegion
                } = parsedApplicationInfo.jobLocation[0].address
                const {
                  datePosted,
                  description,
                  employmentType,
                  industry,
                  title
                } = parsedApplicationInfo

                // Important information to be stored
                const jobInformation = {
                  addressCountry: addressCountry || null,
                  addressLocality: addressLocality || null,
                  addressRegion: addressRegion || null,
                  datePosted: datePosted || null,
                  description: description || null,
                  employmentType: employmentType || null,
                  industry: industry || null,
                  title: title || null
                }

                // Store the information in the database
                storeNewDocument(jobId, jobInformation)
                // const fileData = { jobId, jobInformation }
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
              })
              .catch(error => console.log(error))
          }
        })
      })
    })
    .catch(error => console.log(error))
}
