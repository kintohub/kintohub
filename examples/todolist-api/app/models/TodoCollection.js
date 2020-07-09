import mongoose from 'mongoose'
import { TodoSchema } from './Todo'

const TodoCollectionSchema = new mongoose.Schema({
  todos: [TodoSchema]
})

TodoCollectionSchema.statics.findOnlyCollection = async function() {
  const todos = await this.find({})
  let collection
  if (todos.length === 0) {
    collection = new this({})
    await collection.save()
  } else {
    collection = todos[0]
  }
  return collection
}

TodoCollectionSchema.statics.updateTodo = async function(todoId, updatedTodo) {
  const collection = await this.findOnlyCollection()
  const todo = collection.todos.id(todoId)
  if (!todo) {
    throw new Error('Invalid todo id')
  }
  Object.keys(updatedTodo).forEach(k => {
    todo[k] = updatedTodo[k]
  })
  await collection.save()
  return todo
}

TodoCollectionSchema.statics.updateTodos = async function(updatedTodo) {
  const collection = await this.findOnlyCollection()
  collection.todo = collection.todos.map(todo => {
    Object.keys(updatedTodo).forEach(k => {
      todo[k] = updatedTodo[k]
    });
  })
  return collection.save()
}

TodoCollectionSchema.statics.removeTodo = async function(todoId) {
  const collection = await this.findOnlyCollection()
  const todo = collection.todos.id(todoId)
  if (!todo) {
    throw new Error('Invalid todo id')
  }
  todo.remove()
  await collection.save()
}

TodoCollectionSchema.statics.removeTodos = async function(todoIds = []) {
  const collection = await this.findOnlyCollection()

  collection.todos = collection.todos.filter(t => todoIds.indexOf(t.id) === -1);

  return collection.save()
}

export default mongoose.model('TodoCollection', TodoCollectionSchema)
