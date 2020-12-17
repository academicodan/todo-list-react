import React, { useState } from "react";

export default function Form(props) {
  const { onSave } = props;
  const [text, setText] = useState("");
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="ui action input">
        <input
          className="ui action input"
          Placeholder="writh the task"
          onChange={(e) => setText(e.currentTarget.value)}
          value={text || ""}
        />
        <button
          className="ui grey button"
          onClick={() => {
            onSave(text);
            setText(" ");
          }}
        >
          Add
        </button>
      </div>
    </form>
  );
}
