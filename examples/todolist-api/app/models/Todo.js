import { Schema } from 'mongoose'

export const TodoSchema = new Schema({
  text: String,
  isCompleted: Boolean,
  createdAt: Date
})
