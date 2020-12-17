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
                {task.info}
              </span>
            </div>
            <div className="extra content">
              <button
                className="left floated like ui teal button"
                onClick={() => props.toggleComplete(index)}
              >
                <i class="check circle outline icon"></i>
                Check
              </button>
              <button
                className="right floated star ui black button"
                onClick={() => props.deleteTask(index)}
              >
                <i class="trash alternate outline icon"></i>
                Delete
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
