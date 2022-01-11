export const regExRemoveMethodName = (str) => str.replace(`${str.match(/\`([^)]+)\)\`/)[0]} `, '')

export default {
  regExRemoveMethodName,
}
