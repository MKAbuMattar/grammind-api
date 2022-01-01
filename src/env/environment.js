import dotenv from 'dotenv'

dotenv.config()

export const { PORT } = process.env
export const { DATABASE_URL } = process.env

export default { PORT, DATABASE_URL }
