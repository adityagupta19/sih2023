import React, { useState,useEffect } from "react";
import { EventCard } from "./EventCard";

import axios from "axios";

const ListofBlogs = () => {
    const [events, setEvents] = useState([
        
    ]);
    
    useEffect(() => {
		let url = `https://syncfit.onrender.com/blog`;

		axios.get(url).then((res) => {
			setEvents(res.data);
		});
		console.log(events);
	}, []);

    
    if(events){
	return <div className="px-16 pb-[96px]">
    <div className="flex justify-between">
        <h1 className="text-4xl mt-8 text-white font-bold text-center">Blogs</h1>
        
        </div>
        <div className="mt-4 flex flex-wrap justify-between">
    {events.map((event)=>{
        return <EventCard key={event._id} eventName={event.title} imageUrl={event.imageUrl}  desc={event.desc} eventid={event._id} page="blogs" />
    })}
    </div>
    </div>;
};}





export default ListofBlogs