import React, { useEffect, useState } from 'react';
import Header from './Header';
import axios from 'axios';
import { FaRegTrashAlt } from "react-icons/fa";

function ToDO() {
  const [input, setInput] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  // const [tax,setTax] =useState(0)
  
  useEffect(() => {
    axios.get('https://dummyjson.com/todos')
      .then(function(response) {
        setInput(response.data.todos); // Assuming the todos are inside `response.data.todos`
         
      })
      .catch(function(error) {
        console.error("There was an error fetching the todos!", error);
      });
  }, []);

  // Add new todo
  const addTodo = () => {

    // if (!newTodo) return;
  
     

    // const todo = {
    //   title: newTodo,
    //   completed: false,
    //   userId: 5,
      
    // };
    

    // fetch('https://dummyjson.com/todos/add', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     todo: newTodo,
    //     completed: false,
    //     userId: 5,
    //   })
    // })
    // .then(res => {
    //   setInput([...input,res])
    //   setNewTodo()
    // })
    // .then(console.log);


    // axios.post('https://dummyjson.com/todos/add', todo, {
    //   headers: { 'Content-Type': 'application/json' }, // You can set headers here
    //   body: JSON.stringify({
    //     // todo: 'Use DummyJSON in the project',
    //     completed: false,
    //     userId: 5,
    //   })
    // })
      // .then(response => {
      //   // Use functional update for the todos state
      //   setInput( [...input, response.data]); // Update state with new todo
      //   setNewTodo(''); // Clear the input field
      //   // setTax(0)
      // })
      // .catch(error => {
      //   console.error('Error adding todo:', error);
      // });
  };

  
  const deleteButton = (id) => {

    console.log(id);
    fetch(`https://dummyjson.com/todos/${id}`, {
      method: 'DELETE',
    })
    .then(res => {
      setInput(input.filter(todo=>todo.id!==id))
      console.log('delete todo',res)
    
    })
    .then(console.log);

    // axios.delete(`${'https://dummyjson.com/todos'}${id}`)
    //   .then((response) => {
    //     setInput(todos=>{
    //       let updateTodos=[];
    //       for(let i=0;i<todos.length;i++){
    //         if(todos[i].Id !==id){
    //         updateTodos.push(todos[i])
    //         }else{
    //           console.log(`Deleted post with ID ${id}}`)
    //         }
    //       }

    //     })
    //   })
    //   .catch(error => {
    //     console.error('Error deleting todo:', error);
    //   });
  };

    return (
        <div>
          <Header />

          <div className="todo-container">
            <h1>To-Do List App</h1>
           
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Please add task here ..."
            />
            <button onClick={addTodo}>Add Task</button>
    
            <ul>
              {input.map((value) => {

                console.log(value);
                return (
                  <li key={value.id}>
                    <span >{value.todo}{value.title}</span>
                    <button onClick={() => deleteButton(value.id)}>
                      <FaRegTrashAlt />
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      );
    }
    
    export default ToDO;
