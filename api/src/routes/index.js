import express from 'express'
import morgan from 'morgan'
import { allowCors, logNewRequest } from '../util/logging'
const router = express.Router()

router.use((req, res, next) => allowCors(res, next))
router.use(morgan('tiny'))

router.get('/', (req, res) => {
  logNewRequest('/')
  res.send('API is running sucessfully.')
})

module.exports = router
