import getPaginationParamsUtils from './getPaginationParams'
import getRandomUtils from './getRandom'

import logger from './logger'

import * as regEx from './regEx'

export const getPaginationParams = getPaginationParamsUtils
export const getRandom = getRandomUtils

export const log = logger

export const { regExRemoveMethodName } = regEx

export default {
  getPaginationParams,
  getRandom,
  log,
  regExRemoveMethodName,
}
