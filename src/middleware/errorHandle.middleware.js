import { regExRemoveMethodName } from '../utils'

export const errorHandle = (error, req, res, next) => {
  const status = error.status || 500
  const message = error.message || 'Something went wrong'

  const err = {
    status,
    message: regExRemoveMethodName(message),
  }

  const spaces = err.spaces || 2

  if (!res.get('Content-Type')) {
    res.set('Content-Type', 'application/json')
  }

  res.status(status).send(
    JSON.stringify(
      {
        error: err,
      },
      null,
      spaces,
    ),
  )
}

export default errorHandle
