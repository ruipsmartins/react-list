// Overview.js

import React from "react";

const Overview = (props) => {
  const { tasks } = props;

  return (
    <ul>
      {tasks.map((task, number) => {
        number++;
        return (
          <li key={task.id}>
            {number} {task.text}
          </li>
        );
      })}
    </ul>
  );
};

export default Overview;
