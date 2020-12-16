import React, {useState} from "react";
import "./styles.css";

export default function App() {
  const[tasks, setTask] = useState([])
  const addStack = task => {
    setTask([...tasks, task ])
  }
  return (
    <div className="App">
      <Form onSave={addStack}/>
      <List tasks={tasks}/>
    </div>
  );
}

export function List(props){
  const{ tasks } = props;
  return(
    <div>
      {tasks.map(task => {
        return(
          <div>
            <span>{task}</span>
            <button>Delete</button>
            <button>Check</button>
          </div>
        );
      })}
    </div>
  );
}

export function Form(props){
  const{ onSave } = props;
  const[text, setText] = useState("");
  return(
    <div>
      <input onChange={e => setText(e.currentTarget.value)}/>
      <button onClick={()=> onSave(text)}>Add</button>
    </div>
  );
}