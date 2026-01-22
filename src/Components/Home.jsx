import React from "react";
import "../App.css";


const Card = ({ title }) => (
  <div className="kanban-card">{title}</div>
);

const Home = ({data}) => {

  


  return (
      <div className="kanban-container">
      <div className="kanban-row">

        {data.map((column) => (
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

