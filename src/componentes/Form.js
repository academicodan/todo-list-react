import React, { useState } from "react";

export default function Form(props) {
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
