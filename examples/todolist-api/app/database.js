import mongoose from 'mongoose'

export default async () => {
  try {
    const connectionStr = process.env.MONGODB_CONNECTION_STRING

    console.log('MONGODB:', connectionStr)
    await mongoose.connect(connectionStr, { useNewUrlParser: true })

    console.log('Connection with database succeeded')
    return mongoose.connection

  } catch (e) {
    console.error('Error on connecting to the database:', e)
    throw e
  }
}
