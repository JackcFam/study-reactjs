import {useState} from "react";

const TodoNew = (props) => {
    const {myFunction} = props;
    const handleClick = () => {
        myFunction(value)
    }
    const [value, setValue] =useState('')
     const handleOnChange = (name) => {
         setValue(name)
     }
    return (<div className="todo-add">
        <input onChange={(event) => handleOnChange(event.target.value)} type="text"/>
        <button style={{cursor: 'pointer'}} onClick={handleClick}>Add</button>
    </div>)
}
export default TodoNew