import { Router } from 'express'

import {
  getAllGrammindV1,
  getBySlugGrammindV1,
  getByLanguageGrammindV1,
  getByLanguageAndTypeGrammindV1,
  getByLanguageAndNoGrammindV1,
} from '../controllers'

const router = Router()

router.get('/', (req, res, next) => {
  res.redirect('https://github.com/MKAbuMattar/grammind-api')

  next()
})

const API_URL_VERSION = [`/api/v1`]

router.get(`${API_URL_VERSION[0]}/`, getAllGrammindV1)
router.get(`${API_URL_VERSION[0]}/:slug`, getBySlugGrammindV1)
router.get(`${API_URL_VERSION[0]}/language/:language`, getByLanguageGrammindV1)
router.get(`${API_URL_VERSION[0]}/language/:language/type/:type`, getByLanguageAndTypeGrammindV1)
router.get(
  `${API_URL_VERSION[0]}/language/:language/pattern_no/:pattern_no`,
  getByLanguageAndNoGrammindV1,
)

export default router
