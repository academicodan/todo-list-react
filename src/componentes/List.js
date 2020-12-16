import React from "react";
export default function List(props) {
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
