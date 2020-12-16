import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [tasks, setTask] = useState([]);
  const addStack = (task) => {
    setTask([...tasks, task]);
  };
  return (
    <div className="App">
      <Form onSave={addStack} />
      <List tasks={tasks} />
    </div>
  );
}

export function List(props) {
  const { tasks } = props;
  return (
    <div className="task-list">
      {tasks.map((task) => {
        return (
          <div className="task-card">
            <span>{task}</span>
            <div className="actions">
              <button>Check</button>
              <button>Delite</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function Form(props) {
  const { onSave } = props;
  const [text, setText] = useState("");
  return (
    <div>
      <input
        className="task-field"
        placeholder="write the task"
        onChange={(e) => setText(e.currentTarget.value)}
      />
      <button className="save-button" onClick={() => onSave(text)}>
        Add
      </button>
    </div>
  );
}
