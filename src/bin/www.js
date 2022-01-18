#!/user/bin/env node
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import http from 'http'
import app from '..'

import { PORT } from '../env'
import { onYourNetwork } from '../config'

import { API_V } from '../env'
import { log } from '../utils'

/**
 * Normalize a port into a number, string, or false.
 */
const normalizePort = (val) => {
  const port = parseInt(val, 10)

  if (Number.isNaN(port)) {
    // named pipe
    return val
  }

  if (port >= 0) {
    // port number
    return port
  }

  return false
}

const port = normalizePort(PORT || '3001')
app.set('port', port)

/**
 * Create HTTP server.
 */
const server = http.createServer(app)

/**
 * Event listener for HTTP server "error" event.
 */
const onError = (error) => {
  if (error.syscall !== 'listen') {
    throw error
  }

  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`)
      process.exit(1)
      break
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`)
      process.exit(1)
      break
    default:
      throw error
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */
const onListening = () => {
  for (const url of API_V) {
    log.info(`
Server running at
    Local:            http://localhost:${PORT}${url}
    On Your Network:  http://${Object.values(onYourNetwork)[0][0]}:${PORT}${url}
`)
  }
}

server.listen(PORT)
server.on('error', onError)
server.on('listening', onListening)
