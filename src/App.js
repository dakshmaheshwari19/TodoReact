import './App.css';
import Header from "./My components/Header";
import { Footer } from "./My components/Footer";
import { Todos } from "./My components/Todos";
import { AddTodo } from "./My components/AddTodo";
import { About } from './My components/About';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';



function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }

  const addTodo = (title, desc) => {
    console.log("i am adding function");
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);

  }


  const onDelete = (todo) => {
    console.log("i am delete function bc", todo);


    setTodos(todos.filter((e) => {
      return e !== todo;
    }))

    localStorage.setItem("todos", JSON.stringify(todos));

  }
  // this way of deleting doesn't work because react doesnt work like angular
  // you have to use hooks like usestate
  // let index= todos.indexOf(todo);
  // todos.splice(index,1);

  const [todos, setTodos] = useState(initTodo);
  //run this arrow function when todos changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));

  }, [todos])


  return (
    <>
      <Router>
        <Header title="My Todos List" searchBar={false} />

        <Routes>

          <Route exact path='/' element={<>
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} />
            </>}/>
            

          <Route exact path='/about' element={<About/>}/>

        </Routes>

        <Footer />
      </Router>

    </>
  );
}

export default App;
