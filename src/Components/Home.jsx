
import React from "react";
import "../App.css";
import { useState } from "react";
import AddTask from './AddTask';

const Card = ({ title }) => (
  <div className="kanban-card">{title}</div>
);

const Home = () => {
  const [kanbanData, setKanbanData] = useState([
    { id: 1, title: "Tasks", items: [] },
    { id: 2, title: "In Process", items: [] },
    { id: 3, title: "Completed", items: [] }
  ]);

  const handleAddTask = (task) => {
    setKanbanData(prev =>
      prev.map(column =>
        column.title === task.status
          ? {
            ...column,
            items: [
              ...column.items,
              { id: Date.now(), name: task.name }
            ]
          }
          : column
      )
    );
  };

  return (
    <div className="kanban-container">

      <AddTask onAddTask={handleAddTask} />


      <div className="kanban-row">
        {kanbanData.map(column => (
          <div className="kanban-column" key={column.id}>
            <h3 className="kanban-column-title">{column.title}</h3>

            {column.items.map(item => (
              <Card key={item.id} title={item.name} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Home;

