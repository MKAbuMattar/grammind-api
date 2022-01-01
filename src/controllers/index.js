import * as grammindConterallerV1 from './grammind.conteraller.v1'

export const readGrammindV1 = grammindConterallerV1.readGrammind
export const getBySlugGrammindV1 = grammindConterallerV1.getBySlugGrammind
export const getByLanguageGrammindV1 =
  grammindConterallerV1.getByLanguageGrammind
export const getByLanguageAndTypeGrammindV1 =
  grammindConterallerV1.getByLanguageAndTypeGrammind
export const getByLanguageAndNoGrammindV1 =
  grammindConterallerV1.getByLanguageAndNoGrammind

export default {
  readGrammindV1,
  getBySlugGrammindV1,
  getByLanguageGrammindV1,
  getByLanguageAndTypeGrammindV1,
  getByLanguageAndNoGrammindV1,
}
