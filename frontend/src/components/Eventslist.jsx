import React, { useState,useEffect } from "react";
import { EventCard } from "./EventCard";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Eventslist = () => {
	const [events, setEvents] = useState([
        
    ]);
    const navigate = useNavigate();
    useEffect(() => {
		let url = `http://localhost:4000/event`;

		axios.get(url).then((res) => {
			setEvents(res.data);
		});
		console.log(events);
	}, []);

    
    if(events){
	return <div className="px-16 pb-[96px]">
    <div className="flex justify-between">
        <h1 className="text-4xl mt-8 text-white font-bold text-center">Events</h1>
        <button
        onClick={()=>{
            navigate("/events")
        }}
            type="button"
            className="mt-8 rounded-md bg-gray-600 px-3 py-2 text-md font-bold text-white shadow-sm hover:bg-green-400/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            More Events &rarr;
          </button>
        </div>
        <div className="mt-4 flex flex-wrap justify-between">
    {events.map((event)=>{
        return <EventCard key={event._id} eventName={event.eventName} imageUrl={event.imageUrl} venue={event.venue} date={event.date} host={event.host} isVerified={true} desc={event.desc} eventid={event._id} />
    })}
    </div>
    </div>;
};}

export default Eventslist;
