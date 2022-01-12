import express from 'express'
import helmet from 'helmet'
import compression from 'compression'
import cors from 'cors'
import cookieParser from 'cookie-parser'

import router from './router'
import { DATABASE_URL } from './env'
import connectDb from './config'

connectDb(DATABASE_URL)

const app = express()

//helmet
app.use(helmet())

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(compression())
app.use(cors())
app.use(cookieParser())
app.use(router)

export default app
