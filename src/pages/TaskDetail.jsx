import { useParams } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export default function TaskDetail() {
    const { id } = useParams();
    const { tasks } = useContext(GlobalContext);

    const task = tasks.find(t => t.id === parseInt(id));

    if (!task) {
        return (
            <h2>Task not found</h2>
        )
    }

    const handleDelete = () => {
        console.log("Deleting task:", task.id);
    }

    return (
        <div>
            <h1>Task details</h1>
            <p><strong>Name:</strong>{task.title}</p>
            <p><strong>Description:</strong>{task.description}</p>
            <p><strong>Status:</strong>{task.status}</p>
            <p><strong>Created at:</strong>{new Date(task.createdAt).toLocaleDateString()}</p>
            <button onClick={handleDelete}>Delete Task</button>
        </div>
    )
}