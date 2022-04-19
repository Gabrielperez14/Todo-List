import React from "react";
import Todos from "./todo.jsx";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<>
			<div className="container d-flex justify-content-center mt-4">
				<h1 className="text-secondary">Todos</h1>
			</div>
			<Todos />
		</>
	);
};

export default Home;
