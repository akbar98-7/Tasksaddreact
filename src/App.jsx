import { useState } from 'react'; // 1. Add useState
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import AddTask from './Components/AddTask'
import { Link } from 'react-router-dom'
import web from './assets/web.jpg'


function App() {

  // 5. Create a function to delete a task
  const deleteTask = (columnId, taskId) => {
    // 1. Create a copy of the data
    const updatedData = kanbanData.map((col) => {
      // 2. Find the column where the task lives
      if (col.id === columnId) {
        return {
          ...col,
          // 3. Keep every task EXCEPT the one we want to delete
          items: col.items.filter((item) => item.id !== taskId),
        };
      }
      return col;
    });

    // 4. Update the state
    setKanbanData(updatedData);
  };

  const [kanbanData, setKanbanData] = useState([
    { id: 1, title: "To Do", items: [{ id: 1, name: "Design Login Page" }] },
    { id: 2, title: "In Process", items: [{ id: 3, name: "API Integration" }] },
    { id: 3, title: "Completed", items: [] }

  ]);

  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">

          <div className="container-fluid ">

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-center mt-5 gap-5" id="navbarNav">
              <img src={web} alt="" width={150} />
              <ul className="navbar-nav gap-5">
                <Link to="/" className="nav-link fs-2">
                  Home
                </Link>

                <Link to="/addtask" className="nav-link fs-2">
                  Add task
                </Link>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>

          <Route path="/" element={<Home data={kanbanData} onDelete={deleteTask} />} />
          <Route path="/addtask" element={<AddTask data={kanbanData} setData={setKanbanData} />} />

        </Routes>
      </div>

    </>
  )
}

export default App
