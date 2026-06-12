import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import TaskList from "../pages/TaskList"
import AddTask from "../pages/AddTask"

function App() {

    return (
        <BrowserRouter>

            <nav>
                <NavLink to="/Task List">Task list</NavLink>
                <NavLink to="/New Task">New Task</NavLink>
            </nav>

            <div>
                <Routes>
                    <Route path="/" element={<TaskList />}></Route>
                    <Route path="/add" element={<AddTask />}></Route>
                </Routes>
            </div>

        </BrowserRouter >
    )
}

export default App
