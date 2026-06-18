import { useState, useRef } from "react";
import Modal from "./Modal";
import { Form } from "react-router-dom";

export default function EditTaskModal({ show, onClose, task, onSave }) {
    const [editedTask, setEditedTask] = useState(task);
    const editFormRef = useRef();

    const changeEditedTask = (key, event) => {
        setEditedTask(prev => ({ ...prev, [key]: event.target.value }))
    }

    const handleSubmit = e => {
        e.preventDefault();
        onSave(editedTask);
    }

    const { title, description, status } = editedTask

    return (
        <Modal
            title="Edit task"
            content={
                <form ref={editFormRef} onSubmit={handleSubmit}>
                    <label>
                        Task name:
                        <input
                            type="text"
                            value={title}
                            onChange={e => changeEditedTask("title", e)}
                        />
                    </label>
                    <label>
                        Description:
                        <textarea
                            value={description}
                            onChange={e => changeEditedTask("description", e)}
                        />
                    </label>
                    <label>
                        Status:
                        <select
                            value={status}
                            onChange={e => changeEditedTask("status", e)}
                        >
                            {["To do", "Doing", "Done"].map((value, index) => (
                                <option key={index} value={value}>{value}</option>
                            ))}
                        </select>
                    </label>
                </form>
            }
            confirmText="Save"
            show={show}
            onClose={onClose}
            onConfirm={() => editFormRef.current.requestSubmit()}
        />
    )
}