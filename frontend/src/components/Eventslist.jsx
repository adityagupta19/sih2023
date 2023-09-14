import React, { useState } from "react";
import { EventCard } from "./EventCard";
import { useNavigate } from "react-router-dom";

const Eventslist = () => {
	const [events, setEvents] = useState([
        {
            "_id": "64fc5e4d3466a55381527f77",
            "eventName": "marathon for the win",
            "imageUrl": "awfsaefsoefusoef",
            "desc": "this is a event for running lovers /nwe are the running experts nice isnt it",
            "venue": "gk Park",
            "date": "January 5th 5am",
            "host": "64fc5810022fe89ccc2d0a95",
            "users": [
                "64fc5baa3a46de7600147f2b"
            ],
            "rankings": [],
            "createdAt": "2023-09-09T12:00:13.716Z",
            "updatedAt": "2023-09-09T12:04:02.662Z",
            "__v": 1
        },
        {
            "_id": "64fc5e4d3466a55381527f76",
            "eventName": "marathon for the win",
            "imageUrl": "awfsaefsoefusoef",
            "desc": "this is a event for running lovers /nwe are the running experts nice isnt it",
            "venue": "gk Park",
            "date": "January 5th 5am",
            "host": "64fc5810022fe89ccc2d0a95",
            "users": [
                "64fc5baa3a46de7600147f2b"
            ],
            "rankings": [],
            "createdAt": "2023-09-09T12:00:13.716Z",
            "updatedAt": "2023-09-09T12:04:02.662Z",
            "__v": 1
        },{
            "_id": "64fc5e4d3466a55381527f79",
            "eventName": "marathon for the win",
            "imageUrl": "awfsaefsoefusoef",
            "desc": "this is a event for running lovers /nwe are the running experts nice isnt it",
            "venue": "gk Park",
            "date": "January 5th 5am",
            "host": "64fc5810022fe89ccc2d0a95",
            "users": [
                "64fc5baa3a46de7600147f2b"
            ],
            "rankings": [],
            "createdAt": "2023-09-09T12:00:13.716Z",
            "updatedAt": "2023-09-09T12:04:02.662Z",
            "__v": 1
        }
    ]);
    const navigate = useNavigate();

    

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
        return <EventCard key={event._id} eventName={event.eventName} imageUrl={event.imageUrl} venue={event.venue} date={event.date} host={event.host} isVerified={true} />
    })}
    </div>
    </div>;
};

export default Eventslist;
