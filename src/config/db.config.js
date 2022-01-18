import { connect } from 'mongoose'
import { log } from '../utils'

const connectDb = async (URL) => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }

  try {
    const connection = await connect(URL, connectionParams)
    log.info(`
Mongo DB is connected to: ${connection.connection.host}
`)
  } catch (err) {
    log.error(`
An error ocurred\n\r\n\r${err}
`)
  }
}

export default connectDb
