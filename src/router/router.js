import express from 'express'
import {
  readGrammind,
  getBySlugGrammind,
  getByLanguageGrammind,
  getByLanguageAndTypeGrammind,
  getByLanguageAndNoGrammind,
} from '../controllers/grammind.conteraller.v1'

const router = express.Router()

router.get('/', (req, res) => {
  res.redirect('https://github.com/MKAbuMattar/grammind-api')
})

const API_URL_VERSION = [`/api/v1`]

router.get(`${API_URL_VERSION[0]}/`, readGrammind)
router.get(`${API_URL_VERSION[0]}/:slug`, getBySlugGrammind)
router.get(`${API_URL_VERSION[0]}/language/:language`, getByLanguageGrammind)
router.get(
  `${API_URL_VERSION[0]}/language/:language/type/:type`,
  getByLanguageAndTypeGrammind,
)
router.get(
  `${API_URL_VERSION[0]}/language/:language/pattern_no/:pattern_no`,
  getByLanguageAndNoGrammind,
)

export default router
