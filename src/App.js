import React, {useEffect} from 'react';
import TodoList from './Todo/TodoList';
import Context from './context';
import Addtodo from './Todo/Addtodo'

//https://jsonplaceholder.typicode.com/



function App() {
  const [todos, setTodos] = React.useState([])

  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => response.json())
      .then(todos => { //мы получаем массив todos
        setTodos(todos) //тут чтобы изменить state мы обращаемся к ф-ции и передаем массив
      })
  }, [])


  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }
  function removeTodo(id) {
setTodos(todos.filter(todo => todo.id !== id))
  }

  function addTodo(title)  {
    setTodos(todos.concat([
      {
        title,
        id: Date.now(),
        completed: false
      }
    ]))
  }
  return (
    <Context.Provider value={{removeTodo: removeTodo} }>
      <div className="wrapper">
        <h1>React tutotial</h1>
        <Addtodo onCreate={addTodo}/>
        {todos.length ? <TodoList todos={todos} onToggle={toggleTodo}/> : <p>No todos!</p> }
        
      </div>
    </Context.Provider>
  );
}

export default App;


//toggleTodo придумали сами
//изменить state

//  <Addtodo onCreate={addTodo}/> - addTodo придумали сами