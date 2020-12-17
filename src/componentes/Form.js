import React, { useState } from "react";

export default function Form(props) {
  const { addTask } = props;
  const [info, setInfo] = useState("");
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="ui action input">
        <input
          className="ui action input"
          Placeholder="write the task"
          onChange={(e) => setInfo(e.currentTarget.value)}
          value={info || ""}
        />
        <button
          className="ui grey button"
          onClick={() => {
            addTask(info);
            setInfo(" ");
          }}
        >
          <i class="sticky note outline icon"></i>
          Add
        </button>
      </div>
    </form>
  );
}
