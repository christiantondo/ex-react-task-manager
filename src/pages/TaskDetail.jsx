import { useParams, useNavigate } from "react-router-dom";
import { use, useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import Modal from "../components/Modal";

export default function TaskDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { tasks, removeTask } = useContext(GlobalContext);

    const task = tasks.find(t => t.id === parseInt(id));

    const [showDeleteModal, setShowDeleteModal] = useState(false);

    if (!task) {
        return (
            <h2>Task not found</h2>
        )
    }

    const handleDelete = async () => {
        try {
            await removeTask(task.id);
            alert("Task deleted.");
            navigate("/");
        } catch (error) {
            console.error(error);
            alert(error.message);
        }
    }

    return (
        <div>
            <h1>Task details</h1>
            <p><strong>Name:</strong>{task.title}</p>
            <p><strong>Description:</strong>{task.description}</p>
            <p><strong>Status:</strong>{task.status}</p>
            <p><strong>Created at:</strong>{new Date(task.createdAt).toLocaleDateString()}</p>
            <button onClick={() => setShowDeleteModal(true)}>Delete Task</button>

            <Modal
                title="Confirm delete"
                content={<p>Are you sure you want to delete this task?</p>}
                show={showDeleteModal}
                onClose={() => setShowDeleteModal(false)}
                onConfirm={handleDelete}
                confirmText="Delete"
            />
        </div >
    )
}