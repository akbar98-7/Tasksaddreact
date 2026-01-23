import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddTask = ({ data, setData }) => {

  const [taskName, setTaskName] = useState("");
  const [selectedColumnId, setSelectedColumnId] = useState(data[0].id);

  const navigate = useNavigate();

  // 2. A clear function to handle what happens when the button is clicked
  const handleAddClick = (e) => { 
    e.preventDefault(); // Stop the page from refreshing

    // Validation: Don't add empty tasks
    const newTask = { id: Date.now(), name: taskName };

    // 2. Logic moved here: Map through the data to find the right column
    const updatedData = data.map((col) => {
      if (col.id === parseInt(selectedColumnId)) {
        return {
          ...col, //Spread operator being used here to copy the object.
          items: [...col.items, newTask]
        };
      }
      return col;
    });

    // 3. Use the setter function passed from App.jsx
    setData(updatedData);

    // 4. Go back home
    navigate("/");
  };

  return (
    <div className="container mt-5">
      <div className="card p-4">
        <h3>Create New Task</h3>
 
        <form onSubmit={handleAddClick}>
          {/* INPUT FIELD */}
          <div className="mb-3">
            <label>What needs to be done?</label>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Clean the kitchen"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
            />
          </div>

          {/* DROP-DOWN SELECT */}
          <div className="mb-3">
            <label>Which column should it go in?</label>
            <select
              className="form-select"
              value={selectedColumnId}
              onChange={(e) => setSelectedColumnId(e.target.value)}
            >
              {data.map((col) => (
                <option key={col.id} value={col.id}>
                  {col.title}
                </option>
              ))}
            </select>
          </div>

          <button type="submit" className="btn btn-success">
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTask
