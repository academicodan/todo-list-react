import React from "react";
export default function List(props) {
  const { tasks } = props;
  return (
    <div className="task-list">
      {tasks.map((task, index) => {
        return (
          <div className="task-card" key={index}>
            <span className={task.isComplete ? "complete" : " "}>
              {task.task}
            </span>
            <div className="actions">
              <button onClick={() => props.toggleComplete(index)}>Check</button>
              <button onClick={() => props.deleteTask(index)}>Delite</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
