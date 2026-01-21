import React from 'react'
import { useState } from "react";

const AddTask = ({ onAddTask }) => {
 
  const [taskName, setTaskName] = useState("");
  const [status, setStatus] = useState("Tasks");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!taskName) return;

    onAddTask({
      name: taskName,
      status: status
    });

    setTaskName("");
    setStatus("Tasks");
  };

  return (
    <div className="add-task-wrapper">
      <form className="add-task-form" onSubmit={handleSubmit}>

        <input
          className="add-task-input"
          type="text"
          placeholder="Enter task name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />

        <select
          className="add-task-select"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option>Tasks</option>
          <option>In Process</option>
          <option>Completed </option>
        </select>

        <button className="add-task-button" type="submit">
          Add Task
        </button>

      </form>
    </div>
  )
}

export default AddTask
