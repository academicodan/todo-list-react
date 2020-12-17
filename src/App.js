import React, { useState } from "react";
import "./styles.css";
import Form from "./componentes/Form";
import List from "./componentes/List";

export default function App() {
  const [tasks, setTask] = useState([]);

  const addTask = (task) => {
    const newTask = {
      info: task,
      isComplete: false
    };
    setTask([...tasks, newTask]);
  };

  const deleteTask = (index) => {
    let newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTask(newTasks);
  };

  const toggleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].isComplete = !newTasks[index].isComplete;
    setTask(newTasks);
  };

  return (
    <div className="ui container App">
      <h3>Minha lista de tarefas</h3>
      <Form addTask={addTask} />
      <List
        tasks={tasks}
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
      />
    </div>
  );
}
