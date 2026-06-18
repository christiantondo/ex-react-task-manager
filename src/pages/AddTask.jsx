import { useState, useRef, useMemo } from "react";

const symbols = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~";

function AddTask() {

	const [taskTitle, setTaskTitle] = useState("");
	const descriptionRef = useRef();
	const statusRef = useRef();

	const taskTitleError = useMemo(() => {
		if (!taskTitle.trim())
			return "Task name cannot be empty."
		if ([...taskTitle].some(char => symbols.includes(char)))
			return "Task name cannot include symbols."
		return "";
	}, [taskTitle]);

	const handleSubmit = event => {
		event.preventDefault();
		if (taskTitleError)
			return;

		const newTask = {
			title: taskTitle.trim(),
			description: descriptionRef.current.value,
			status: statusRef.current.value
		}

		console.log("Task to be added:", newTask)
	}

	return (
		<div>
			<h1>Add New Task</h1>
			<form onSubmit={handleSubmit}>
				<label>
					Task Name:
					<input
						type="text"
						value={taskTitle}
						onChange={e => setTaskTitle(e.target.value)}
					/>
				</label>
				{taskTitleError &&
					<p style={{ color: "red" }}>{taskTitleError}</p>
				}
				<label>
					Description:
					<textarea ref={descriptionRef}></textarea>
				</label>
				<label>
					Status
					<select ref={statusRef} defaultValue="To do">
						{["To do", "Doing", "Done"].map((value, i) => (
							<option key={i} value={value}>{value}</option>
						))}
					</select>
				</label>

				<button type="submit" disabled={taskTitleError}>
					Add New Task
				</button>
			</form>
		</div>
	)
}
export default AddTask;