import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const EventPage = () => {
	const [event, setEvent] = useState(false);

	const params = useParams();
	const { eventid } = params;

	const handleSubmit = async () => {
		let userid = localStorage.getItem("userid");
		if (localStorage.getItem("userid") !== "") {
			const res = await fetch(
				`http://localhost:4000/event/${eventid}/register`,
				{
					method: "POST",
					headers: {
						"content-Type": "application/json",
					},
					body: JSON.stringify({ userid: userid }),
				}
			);
			const eventres = await res.json();
			console.log(eventres);
			setEvent({ ...event, users: eventres.users });
		} else {
			alert("please Login");
		}
	};

	useEffect(() => {
		let url = `http://localhost:4000/event/${eventid}`;

		axios.get(url).then((res) => {
			setEvent(res.data);
		});
		console.log(event);
	}, []);

	return (
		<section className="text-gray-700 body-font overflow-hidden bg-white">
			{event && (
				<div className="container px-5 py-24 mx-auto">
					<div className="mx-auto flex flex-wrap">
						<img
							alt="ecommerce"
							className=" w-[700px] object-cover object-center rounded border border-gray-200"
							src={event.imageUrl}
						/>
						<div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
							<h2 className="text-sm title-font text-gray-500 tracking-widest">
								{true && (
									<div className="badge badge-success gap-2 mb-2">verified</div>
								)}
							</h2>
							<h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
								{event.eventName}
							</h1>
							<div className="flex mb-4">
								<span className="text-gray-600">
									{event.users.length} Users Registered
								</span>
							</div>
							<p className="leading-relaxed">{event.desc}</p>
							<div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
								<div className="flex">{event.date}</div>
								<div className="flex ml-6 items-center">
									Venue: {event.venue}
								</div>
							</div>
							<div className="flex">
								<button
									onClick={handleSubmit}
									type="button"
									className="mt-2 inline-flex w-full items-center justify-center rounded-md bg-gray-600 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-green-400/80"
								>
									Register
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</section>
	);
};

export default EventPage;
