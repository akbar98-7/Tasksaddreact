
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import AddTask from './Components/AddTask'
import { Link } from 'react-router-dom'


function App() {


  return (
    <>

      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid ">

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center mt-5" id="navbarNav">
              <ul className="navbar-nav gap-5">
                <Link to="/">
                  <li className="nav-item">

                    <a className="nav-link active fs-2" aria-current="page" >Home</a>
                  </li>
                </Link>

                <Link to="/addtask">
                  <li className="nav-item">
                    <a className="nav-link active fs-2" >Add task</a>
                  </li>
                </Link>

              </ul>
            </div>
          </div>
        </nav>

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/addtask" element={<AddTask />} />

        </Routes>
      </div>

    </>
  )
}

export default App
