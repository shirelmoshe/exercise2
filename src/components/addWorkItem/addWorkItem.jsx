import React, { useState } from "react";

export const AddWorkItem = ({ newMession }) => {
  const handleValue = (inputValue) => {
    setvalue(inputValue.target.value);
  };
  const [value, setvalue] = useState("");
  const restartInput = () => {
    document.getElementsByTagName("input")[0].value = "";
  };
  return (
    <>
      <h1>Today work items that should be done</h1>
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          onChange={handleValue}
        />
        <button
          onClick={() => {
            newMession(value);
            restartInput();
          }}
          className="add-task btn btn-outline-secondary"
          type="button"
          id="button-addon2"
        >
          Add task
        </button>
      </div>
    </>
  );
};
