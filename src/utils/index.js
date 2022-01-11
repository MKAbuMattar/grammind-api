import getPaginationParamsUtils from './getPaginationParams'
import getRandomUtils from './getRandom'

import * as regEx from './regEx'

export const getPaginationParams = getPaginationParamsUtils
export const getRandom = getRandomUtils

export const { regExRemoveMethodName } = regEx

export default {
  getPaginationParams,
  getRandom,
  regExRemoveMethodName,
}
