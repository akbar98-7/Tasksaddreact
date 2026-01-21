
import React from "react";
import "../App.css";

const Card = ({ title }) => {
  return <div className="kanban-card">{title}</div>;
};


const Home = () => {

  const Data = [
    {
      id: 1,
      title: "Tasks",
      items: [
        { id: 1, name: "Design Login Page" },
        { id: 2, name: "Create Wireframes" },
        { id: 3, name: "API Integration" },
        { id: 4, name: "Database Setup" },
        { id: 5, name: "Project Setup" },
        { id: 6, name: "Deployment" }

      ]
    },
    {
      id: 2,
      title: "In Process",
      items: [
        {
          id: 3, name: "API Integration"
        },
        {
          id: 4, name: "Database Setup"
        },
         {
          id: 5, name: "Project Setup"
         },
         {
          id: 6, name: "Deployment"
         }
      ]
    },
    {
      id: 3,
      title: "Completed",
      items: [
        {
          id: 4, name: "Project Setup"
        },
        {
          id: 5, name: "Deployment"
        }

      ]
    }
  ];

  return (
    <div className="kanban-container">
      <div className="kanban-row">

        {Data.map((column) => (
          <div className="kanban-column" key={column.id}>

            <h3 className="kanban-column-title">
              {column.title}
            </h3>

            {column.items.map((item) => (
              <Card key={item.id} title={item.name} />
            ))}

          </div>
        ))}

      </div>
    </div>
  );
};

export default Home;

