import mongoose from 'mongoose'

const connectDb = async (URL) => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }

  try {
    await mongoose.connect(URL, connectionParams)
  } catch (err) {}
}

export default connectDb
