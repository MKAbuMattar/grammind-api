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
  res.status(200).json({
    API: 'Work',
  })
})

// Version 1
router.get(`${API_V}/`, getAllGrammindV1)
router.get(`${API_V}/:slug`, getBySlugGrammindV1)
router.get(`${API_V}/language/:language`, getByLanguageGrammindV1)
router.get(`${API_V}/type/:type`, getByTypeGrammindV1)
router.get(`${API_V}/pattern/:pattern`, getByPatternGrammindV1)
router.get(`${API_V}/pattern_no/:pattern_no`, getByNoGrammindV1)
router.get(`${API_V}/language/:language/type/:type`, getByLanguageAndTypeGrammindV1)
router.get(`${API_V}/language/:language/pattern/:pattern`, getByLanguageAndPatternGrammindV1)
router.get(`${API_V}/language/:language/pattern_no/:pattern_no`, getByLanguageAndNoGrammindV1)

router.use(error404Middleware)
router.use(errorHandleMiddleware)

export default router
