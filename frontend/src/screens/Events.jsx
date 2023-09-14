import React from "react";
import Eventslist from "../components/Eventslist";
import { Navigate } from "react-router-dom";

const Events = () => {
	if (localStorage.getItem("userid") === "") {
		return <Navigate to="/login" />;
	}
	return (
		<div>
			<Eventslist />
		</div>
	);
};

export default Events;
