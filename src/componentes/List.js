import React from "react";
export default function List(props) {
  const { tasks } = props;
  return (
    <div className="task-list">
      {tasks.map((task, index) => {
        return (
          <div className="task-card" key={index}>
            <span>{task}</span>
            <div className="actions">
              <button>Check</button>
              <button onClick={() => props.deleteTask(index)}>Delite</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
