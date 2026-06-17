import { useContext } from "react";
import { GlobalContext } from "../src/context/GlobalContext";

export default function TaskList() {

    const { tasks } = useContext(GlobalContext);
    console.log("Tasks:", tasks)

    return (
        <div>
            <h1>Full Task List</h1>
            <p>Showing all tasks</p>
        </div>
    )
}