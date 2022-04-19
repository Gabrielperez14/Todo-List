import React from "react";
import { useState } from "react";

const Todos = () => {
	const [todo, setTodo] = useState("");

	const [todoList, setTodoList] = useState([]);

	const [error, setError] = useState(false);

	const handleChange = (event) => {
		setTodo(event.target.value);
	};

	const handleKeypress = (event) => {
		if (event.key === "Enter") {
			setTodoList([...todoList, todo]);
			setTodo("");
		}

		// if (todo.trim() != "" && event.key === "Enter") {
		// 	setTodoList([...todoList, todo]);
		// 	setTodo("");
		// 	setError(false);
		// } else {
		// 	setError(true);
		// }
	};

	const handleDelete = (id) => {
		const newTodoList = todoList.filter((item, index) => id != index);
		setTodoList(newTodoList);
	};

	return (
		<div className="row justify-content-center flex-column">
			<div className="container col-4">
				<ul className="list-group">
					<li className="list-group-item">
						<input
							className="entrada"
							type="text"
							placeholder="Wha needs to be done?"
							value={todo}
							onChange={handleChange}
							onKeyPress={handleKeypress}
						/>
					</li>
				</ul>
			</div>

			{error && (
				<div className="alert alert-danger">
					El campo no puede estar vacio
				</div>
			)}

			<div className="container col-4">
				{todoList.map((item, index) => {
					return (
						<li className="list-group-item todos" key={index}>
							{item}
							<div
								className="borrar"
								onClick={() => handleDelete(index)}>
								X
							</div>
						</li>
					);
				})}
				<li className="list-group-item">{todoList.length} item left</li>
			</div>
		</div>
	);
};
export default Todos;
