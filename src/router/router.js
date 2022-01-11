import { Router } from 'express'

import {
  getAllGrammindV1,
  getBySlugGrammindV1,
  getByLanguageGrammindV1,
  getByTypeGrammindV1,
  getByPatternGrammindV1,
  getByNoGrammindV1,
  getByLanguageAndTypeGrammindV1,
  getByLanguageAndPatternGrammindV1,
  getByLanguageAndNoGrammindV1,
} from '../controllers'

import { error404Middleware, errorHandleMiddleware } from '../middleware'

import { API_V } from '../env'

const router = Router()

router.get('/', (req, res, next) => {
  res.redirect('https://github.com/MKAbuMattar/grammind-api')
})

// Version 1
router.get(`${API_V[0]}/`, getAllGrammindV1)
router.get(`${API_V[0]}/:slug`, getBySlugGrammindV1)
router.get(`${API_V[0]}/language/:language`, getByLanguageGrammindV1)
router.get(`${API_V[0]}/type/:type`, getByTypeGrammindV1)
router.get(`${API_V[0]}/pattern/:pattern`, getByPatternGrammindV1)
router.get(`${API_V[0]}/pattern_no/:pattern_no`, getByNoGrammindV1)
router.get(`${API_V[0]}/language/:language/type/:type`, getByLanguageAndTypeGrammindV1)
router.get(`${API_V[0]}/language/:language/pattern/:pattern`, getByLanguageAndPatternGrammindV1)
router.get(`${API_V[0]}/language/:language/pattern_no/:pattern_no`, getByLanguageAndNoGrammindV1)

router.use(error404Middleware)
router.use(errorHandleMiddleware)

export default router
