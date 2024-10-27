const TodoData = (props) => {
  const {name, address, age, data, handleRemove} = props;
  return (
    <div className="todo-data">
      <ul>
          {data.map((item, i) => (
              <li key={i}>{item}
                  <button onClick={() => handleRemove(i)}>Delete</button>
              </li>

          ))}
      </ul>
    </div>
  );
};

export default TodoData;
