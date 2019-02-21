import express from 'express'
import './firebase/init'
import { createTitle } from './util/logging'
import { success } from './util/logging'
import main from './routes/index'
import scraper from './routes/scraper'
import { appName } from '../package.json'
const app = express()
const port = 777

app.get('/', main)
app.get('/scraper', scraper)

// Listen for requests
app.listen(port, () => {
  console.clear()
  createTitle(`${appName} API`)
    .then(() =>
      setTimeout(() => {
        success(`${appName} API is now listening on port ${port}`)
      }, 333)
    )
    .catch(error => error(error))
})
