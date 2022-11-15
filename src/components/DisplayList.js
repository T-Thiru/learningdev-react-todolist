import React from "react";

import bin from "../img/bin.svg";

const DisplayList = ({ task, checked, setChecked }) => {
  // const removeTask = () => {};

  return (
    <div className="wrapper displayList">
      <input
        // checked={}
        type="checkbox"
        id={task}
        onChange={(e) => {
          setChecked((task.isChecked = e.target.checked));
        }}
      />
      <label htmlFor={task}>
        <h2 style={{ textDecoration: task.isChecked ? "line-through" : "" }}>
          {task.task}
        </h2>
      </label>
      <div
        onClick={(e) => {
          // removeTask;
        }}
      >
        <img className="bin" src={bin} alt="bin" id={task} />
      </div>
    </div>
  );
};

export default DisplayList;
