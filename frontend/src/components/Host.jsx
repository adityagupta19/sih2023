import { useState } from "react"
import React from 'react'
import { Navigate } from "react-router-dom"
import Logo from '../assets/logo.svg'

const Host = () => {
    const [eventid,setEventid] = useState("")
    const[isSubmitted,setIsSubmitted] = useState(false);
    const [data, setData] = useState({
		eventName: "",
		imageUrl: "",
		desc: "",
		venue: "",
        date:"",
        hostid:localStorage.getItem("userid")
	});
	const handleChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};
	const handleImage = async (e) => {
        console.log(1);
		const imageData = new FormData();
		imageData.append("file", e.target.files[0]);
		imageData.append("upload_preset", "syncfit");
		imageData.append("cloud_name", "dk78mn6gs");

		fetch("https://api.cloudinary.com/v1_1/dk78mn6gs/image/upload", {
			method: "POST",
			body: imageData,
		})
			.then((res) => res.json())
			.then((imageUpData) => {
				console.log(imageUpData.url)
				setData({ ...data, [e.target.name]: imageUpData.url });
				
			});
	};

    const handleSubmit = async()=>{

        
        console.log(data);
        const res = await fetch("https://syncfit.onrender.com/event/host",{
            method:"POST",
            headers:{
                "content-Type":"application/json"
            },
            body: JSON.stringify(data)
        })
        const event = await res.json();
        console.log(event)
        if(event._id){
            setEventid(event._id)
            setIsSubmitted(true)
        }
        
    } 
if(localStorage.getItem("userid")!== "" && isSubmitted) {
    let url = `../events/${eventid}`;
    
    return <Navigate to={url}/>}

  return (
    <section>
			<div className=" bg-gray-800 flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
				<div className=" bg-white p-8 rounded-md xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
					<div className="mb-4 flex justify-center">
                    <img src={Logo} className="max-w-16 max-h-16" alt="logo" />
					</div>
					<h2 className="text-center text-2xl font-bold leading-tight text-black">
						Fill Up the details to host a event
					</h2>
					<p className="mt-2 text-center text-base text-gray-600">
						 {" "}
						<a
							href="/"
							title=""
							className="font-medium text-black transition-all duration-200 hover:underline"
						>
							Are you a Business?
						</a>
					</p>
					<form action="#"  method="POST" className="mt-8">
						<div className="space-y-5">
							<div>
								<label
									htmlFor="name"
									className="text-base font-medium text-gray-900"
								>
									{" "}
									Event Name{" "}
								</label>
								<div className="mt-2">
									<input
										className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
										type="text"
										placeholder="Event Name"
										id="name"
										name="eventName"
										value={data.eventNameName}
										onChange={handleChange}
									></input>
								</div>
							</div>
							
							<div>
								<label
									htmlFor="city"
									className="text-base font-medium text-gray-900"
								>
									{" "}
									Venue{" "}
								</label>
								<div className="mt-2">
									<input
										className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
										type="text"
										placeholder="Venue Name"
										id="venue"
										name="venue"
										value={data.venue}
										onChange={handleChange}
									></input>
								</div>
							</div>
                            <div>
								<label
									htmlFor="city"
									className="text-base font-medium text-gray-900"
								>
									{" "}
									Date{" "}
								</label>
								<div className="mt-2">
									<input
										className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
										type="text"
										placeholder="Date"
										id="date"
										name="date"
										value={data.date}
										onChange={handleChange}
									></input>
								</div>
							</div>
                            <div>
								<label
									htmlFor="city"
									className="text-base font-medium text-gray-900"
								>
									{" "}
									Description{" "}
								</label>
								<div className="mt-2">
									<textarea
										className="flex h-32 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
										type="text"
										placeholder="Enter the event description here"
										id="desc"
										name="desc"
										value={data.desc}
										onChange={handleChange}
									></textarea>
								</div>
							</div>

							<div>
								<label
									htmlFor="image"
									className="text-base font-medium text-gray-900"
								>
									{" "}
									Event Display Image{" "}
								</label>
								<div className="mt-2">
									<input
										className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
										type="file"
										placeholder="Event Display Image"
										id="image"
										name="imageUrl"
										onChange={handleImage}
									></input>
								</div>
							</div>
							<div>
								<button
                                onClick={handleSubmit}
									type="button"
									className="inline-flex w-full items-center justify-center rounded-md bg-gray-600 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-green-400/80"
								>
									Create Event
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</section>
  )
}

export default Host;