// Set environment configuration before importing.
require('dotenv').config();

import Hapi from '@hapi/hapi'
import db from './database'
import { outputTodo } from './utils'
import TodoCollection from './models/TodoCollection'

// Create a server with a host and port
const server = Hapi.server({
  host: process.env.SERVER_HOST || '0.0.0.0',
  port: process.env.SERVER_PORT || '8000',
  routes: { cors: true }, // So that localhost from different ports can connect.
  debug: { request: ['error'] } // Always log errors.
})

/**
 * @api {get} /{listId}/todos get all todos
 * @apiName GetTodos
 * @apiParam (Url) {String} listId the id for the list to fetch all the todos for (ignored for now)
 * @apiSuccess {Object[]} response list of todos, response is a placeholder
 * @apiSuccess {String} response.id the todo id
 * @apiSuccess {String} response.text the todo text
 * @apiSuccess {Boolean} response.isCompleted the todo state
 * @apiSuccess {Date} response.createdAt created date for the todo
 */
server.route({
  method: 'GET',
  path: '/{listId}/todos',
  handler: async () => {

    console.info('INCOMING REQUEST for /{listId}/todos')
    const collection = await TodoCollection.findOnlyCollection()
    const returnData = collection.todos.map(outputTodo)
    console.info("GOT TODOS DATA: ", returnData)
    return returnData
  }
})

/**
 * @api {post} /{listId}/todos create a new todo
 * @apiName CreateTodos
 * @apiParam (Url) {String} listId the id for the list that the todo belongs to (ignored for now)
 * @apiParam [String] text the todo text
 * @apiSuccess {String} id the todo id
 * @apiSuccess [String] text the todo text
 * @apiSuccess {Boolean} isCompleted the todo state
 * @apiSuccess {Date} createdAt created date for the todo
 */
server.route({
  method: 'POST',
  path: '/{listId}/todos',
  handler: async request => {

    console.info("INCOMING CREATE TODO REQUEST: ", JSON.stringify(request.payload))

    const { text } = request.payload
    const collection = await TodoCollection.findOnlyCollection()
    const todo = collection.todos.create({
      text,
      isCompleted: false,
      createdAt: new Date()
    })

    console.info("SAVING DATA: ", JSON.stringify({
      text,
      isCompleted: false,
      createdAt: new Date()
    }))

    collection.todos.push(todo)
    await collection.save()
    return outputTodo(todo)
  }
})

/**
 * @api {put} /{listId}/todos/{todoId} update a todo
 * @apiName UpdateTodo
 * @apiParam (Url) {String} listId the id for the list that the todo belongs to (ignored for now)
 * @apiParam [String] text the updated todo text
 * @apiParam [Boolean] isCompleted the updated todo state
 * @apiSuccess {Object} updated todo
 * @apiSuccess {String} id the todo id
 * @apiSuccess [String] text the todo text
 * @apiSuccess {Boolean} isCompleted the todo state
 * @apiSuccess {Date} createdAt created date for the todo
 * @apiError {String} error error message when todoId is invalid
 */
server.route({
  method: 'PUT',
  path: '/{listId}/todos/{todoId}',
  handler: async (request, h) => {

    const { todoId } = request.params
    try {
      console.info("INCOMING UPDATE TODO REQUEST: ", JSON.stringify(request.payload))
      const todo = await TodoCollection.updateTodo(todoId, request.payload)
      return outputTodo(todo)
    } catch (e) {
      return h.response({ error: 'Invalid todo id' }).code(400)
    }
  }
})

/**
 * @api {put} /{listId}/todos bulk update all todos
 * @apiName UpdateTodos
 * @apiParam (Url) {String} listId the id for the list that the todo belongs to (ignored for now)
 * @apiParam [String] text the updated todo text
 * @apiParam [Boolean] isCompleted the updated todo state
 * @apiSuccess {Object[]} response list of todos
 * @apiSuccess {String} id the todo id
 * @apiSuccess [String] text the todo text
 * @apiSuccess {Boolean} isCompleted the todo state
 * @apiSuccess {Date} createdAt created date for the todo
 * @apiError {String} error error message when todoId is invalid
 */
server.route({
  method: 'PUT',
  path: '/{listId}/todos',
  handler: async (request, h) => {

    try {
      console.info("INCOMING BULK UPDATE TODO REQUEST: ", JSON.stringify(request.payload))
      const collection = await TodoCollection.updateTodos(request.payload)
      var returnData = collection.todos.map(outputTodo)
      return returnData
    } catch (e) {
      return h.response({ error: 'Invalid todo ids' }).code(400)
    }
  }
})

/**
 * @api {delete} /{listId}/todos/{todoId} delete a todo
 * @apiName DeleteTodo
 * @apiParam (Url) {String} listId the id for the list that the todo belongs to (ignored for now)
 * @apiParam (Url) {String} todoId the id for the todo to be deleted
 * @apiError {String} error error message when todoId is invalid
 */
server.route({
  method: 'DELETE',
  path: '/{listId}/todos/{todoId}',
  handler: async (request, h) => {

    const { todoId } = request.params
    try {
      console.info("INCOMING DELETE TODO REQUEST: ", JSON.stringify(request.payload))
      await TodoCollection.removeTodo(todoId)
      return h.response().code(200)
    } catch (e) {
      console.error(e)
      return h.response({ error: 'Invalid todo id' }).code(400)
    }
  }
})

/**
 * @api {delete} /{listId}/todos bulk delete todos by provided array of todoIds
 * @apiName DeleteTodos
 * @apiSuccess {Object[]} response list of todos, response is a placeholder
 * @apiParam (Url) {String} listId the id for the list that the todo belongs to (ignored for now)
 * @apiParam (Url) {String} todoIds an array of todo Ids to be deleted
 * @apiError {String} error error message when todoId is invalid
 */
server.route({
  method: 'DELETE',
  path: '/{listId}/todos',
  handler: async (request, h) => {

    const { todoIds = "" } = request.query

    console.log("INCOMING BULK DELETE REQUEST: ", todoIds)

    let todoIdsParsed = []

    if (todoIds) {
      try {
        todoIdsParsed = todoIds.split(",")
      } catch (error) {
        console.error("todoIds is malformed: " + JSON.stringify(error))
      }
    }

    try {
      const collection = await TodoCollection.removeTodos(todoIdsParsed)

      var returnData = collection.todos.map(outputTodo)

      console.info("DELETED SUCCESSFULLY")

      return returnData;
    } catch (e) {
      console.error(e)
      return h.response({ error: 'Invalid todo id' }).code(400)
    }
  }
})

const init = async () => {

  await db()
  await server.start()
  console.log('Server running on %s', server.info.uri)
}

process.on('unhandledRejection', (err) => {

  console.error(err)
  process.exit(1)
})

init()
