import React from "react";
export default function List(props) {
  const { tasks } = props;
  return (
    <ul className="ui cards item-cards">
      {tasks.map((task, index) => {
        return (
          <li className="ui card">
            <div className="content" key={index}>
              <span className={task.isComplete ? "complete" : " "}>
                {task.task}
              </span>
            </div>
            <div className="extra content">
              <button
                className="left floated like ui teal button"
                onClick={() => props.toggleComplete(index)}
              >
                Check
              </button>
              <button
                className="right floated star ui black button"
                onClick={() => props.deleteTask(index)}
              >
                Delite
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
