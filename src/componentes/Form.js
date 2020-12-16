import React, { useState } from "react";

export default function Form(props) {
  const { onSave } = props;
  const [text, setText] = useState("");
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        className="task-field"
        Placeholder="writh the task"
        onChange={(e) => setText(e.currentTarget.value)}
        value={text || ""}
      />
      <button
        className="save-button"
        onClick={() => {
          onSave(text);
          setText(" ");
        }}
      >
        Add
      </button>
    </form>
  );
}
