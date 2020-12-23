import React, { useState } from "react";

export default function List(props) {
  const { tasks } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [tempTask, setTempTask] = useState();

  const handleEdit = () => {
    if (isEditing) {
      props.editTask(tempTask);
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };

  const handleChange = (e, tasks) => {
    const { value } = e.target;
    setTempTask({ ...tasks, info: value });
  };

  return (
    <ul className="ui cards item-cards">
      {tasks.map((task, index) => {
        return (
          <li className="ui card">
            <div className="content" key={index}>
              {!isEditing ? (
                <span className={task.isComplete ? "complete" : " "}>
                  {task.info}
                </span>
              ) : (
                <input
                  defaultValue={task.info}
                  onChange={(e) => handleChange(e, task)}
                />
              )}
              <span>
                <button
                  className=" mini right floated like ui teal basic button"
                  onClick={handleEdit}
                >
                  <i class="pencil alternate icon"></i>
                  {!isEditing ? "Edit" : "Save"}
                </button>
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
                className="right floated star circular ui black icon button"
                onClick={() => props.deleteTask(index)}
              >
                <i class="trash alternate outline icon"></i>
                
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
