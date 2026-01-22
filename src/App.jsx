import { useState } from 'react'; // 1. Add useState
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import AddTask from './Components/AddTask'
import { Link } from 'react-router-dom'
import web from './assets/web.jpg'


function App() {


  const [kanbanData, setKanbanData] = useState([
    { id: 1, title: "To Do", items: [{ id: 1, name: "Design Login Page" }] },
    { id: 2, title: "Intiation", items: [{ id: 3, name: "API Integration" }] },
    { id: 3, title: "Planning", items: [] },
    { id: 4, title: "Executuion", items: [] },
    { id: 5, title: "Monitor", items: [] },
    { id: 6, title: "Closure", items: [] },
    { id: 7, title: "Done", items: [] }
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

          <Route path="/" element={<Home data={kanbanData} />} />
          <Route path="/addtask" element={<AddTask data={kanbanData} setData={setKanbanData} />} />

        </Routes>
      </div>

    </>
  )
}

export default App
