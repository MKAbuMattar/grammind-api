import express from 'express'
import cors from 'cors'

import router from './router/index'
import { PORT, DATABASE_URL } from './env/index'
import connectDb from './config/index'

connectDb(DATABASE_URL)

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.use(router)

app.listen(PORT, () => {})
