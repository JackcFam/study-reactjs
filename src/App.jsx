import './App.css'
import TodoNew from "./components/todo/TodoNew.jsx";
import TodoData from "./components/todo/TodoData.jsx";
import reactLogo from './assets/react.svg'
import {useState} from "react";
const App = () => {

  const todo = "Nhat"
  const age = 25
  const data = {
    address: 'Hanoi',
    country: 'VietNam'
  }
  const [list, setList] = useState([]);
  const myFunction = (name) => {
    setList([...list, name])
    console.log(list)
  }
  const handleRemove = (index) => {
    setList(list.filter((item,index1) => index1 !== index));
  }


  return (<div className="todo-container">
    <div className="todo-title">Todo List</div>
    <TodoNew myFunction={myFunction}></TodoNew>
    {
      list && list.length > 0
          ? <TodoData name={todo} age={age} data={list} handleRemove={handleRemove}></TodoData>
          : <div className="todo-image">
              <img src={reactLogo} className="logo-react" alt="React Logo" style={{width: "100%", margin: "10px"}}/>
            </div>
    }


  </div>);
};

export default App;
