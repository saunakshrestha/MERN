const todoForm = document.getElementById('todo-form')
const input = document.getElementById('input')
let todoText
todoForm.addEventListener('submit', (e) => {
  e.preventDefault()
  addTodo()
})
function addTodo() {
  todoText = input.value
  if (todoForm) {

    console.log(todoForm)
  }
}
