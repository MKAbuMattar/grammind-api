import * as grammindConterallerV1 from './grammind.conteraller.v1'

// export api conteraller version 1
export const getAllGrammindV1 = grammindConterallerV1.getAllGrammind
export const getBySlugGrammindV1 = grammindConterallerV1.getBySlugGrammind
export const getByLanguageGrammindV1 = grammindConterallerV1.getByLanguageGrammind
export const getByLanguageAndTypeGrammindV1 = grammindConterallerV1.getByLanguageAndTypeGrammind
export const getByLanguageAndNoGrammindV1 = grammindConterallerV1.getByLanguageAndNoGrammind

export default {
  getAllGrammindV1,
  getBySlugGrammindV1,
  getByLanguageGrammindV1,
  getByLanguageAndTypeGrammindV1,
  getByLanguageAndNoGrammindV1,
}
