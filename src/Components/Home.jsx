import React from "react";
import "../App.css";


const Card = ({ title }) => (
  <div className="kanban-card">{title}</div>
);

const Home = ({ data, onDelete }) => {

  return (

    <>
      <div className="d-flex gap-3 p-4">
        <h1 className="mt-4 px-2">Delete Tasks</h1>
        {data.map((col) => (
          <div key={col.id} className="card p-2" style={{ width: "300px" }}>
            <h4>{col.title}</h4>

            {col.items.map((item) => (
              <div key={item.id} className="border p-2 mb-2 d-flex justify-content-between shadow-sm">
                <span>{item.name}</span>

                {/* THE DELETE BUTTON */}
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => onDelete(col.id, item.id)}
                >
                  X
                </button>
              </div>
            ))}

          </div>
        ))}
      </div>

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
    </>
  );
};


export default Home;

