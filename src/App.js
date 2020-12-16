import React, { useState } from "react";
import "./styles.css";
import Form from "./componentes/Form";
import List from "./componentes/List";

export default function App() {
  const [tasks, setTask] = useState([]);

  const addStack = (task) => {
    setTask([...tasks, task]);
  };

  const deleteTask = (index) => {
    let newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTask(newTasks);
  };

  return (
    <div className="App">
      <Form onSave={addStack} />
      <List tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}
