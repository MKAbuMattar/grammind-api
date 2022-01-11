import error404 from './error404.middleware'
import errorHandle from './errorHandle.middleware'

export const error404Middleware = error404
export const errorHandleMiddleware = errorHandle

export default {
  error404Middleware,
  errorHandleMiddleware,
}
