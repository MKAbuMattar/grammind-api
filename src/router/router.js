import express from 'express'
import {
  readGrammind,
  getBySlugGrammind,
} from '../controllers/grammind.conteraller.v1'

const router = express.Router()

router.get('/', (req, res) => {
  res.redirect('https://github.com/MKAbuMattar/grammind-api')
})

const API_URL = [`/api/v1/`]

router.get(`${API_URL[0]}`, readGrammind)
router.get(`${API_URL[0]}:slug`, getBySlugGrammind)

export default router
