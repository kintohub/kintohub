export const outputTodo = t => ({
  id: t._id,
  text: t.text,
  isCompleted: t.isCompleted,
  createdAt: t.createdAt
})
