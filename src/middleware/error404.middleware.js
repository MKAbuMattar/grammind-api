export const error404 = (req, res, next) => {
  const err = new Error('URL Not Found')
  err.status = 404
  next(err)
}

export default error404
