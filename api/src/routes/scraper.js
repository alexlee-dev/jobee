import express from 'express'
import morgan from 'morgan'
import { allowCors, logNewRequest } from '../util/logging'
import scraper from '../util/scraper'
const router = express.Router()

router.use((req, res, next) => allowCors(res, next))
router.use(morgan('tiny'))

router.get('/scraper', (req, res) => {
  logNewRequest('/scraper')
  scraper()
  res.send('scraper response')
})

module.exports = router
