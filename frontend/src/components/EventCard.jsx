
import React from 'react'
import { useNavigate } from 'react-router-dom'





export function EventCard({eventName,imageUrl,venue,date,host,isVerified,desc,eventid}) {
  
  const navigate = useNavigate();
  const handleEvent = () => {
    
    navigate(`/events/${eventid}`)
  
    
  }
  
  return (
    <div className=" mt-8 flex max-w-2xl flex-col items-center rounded-lg border md:flex-row bg-slate-50">
      <div className="p-2 h-full w-full ">
        <img
          src={imageUrl}
          alt="Laptop"
          className="h-full w-full rounded-md object-cover"
        />
      </div>
      <div>
        <div className="p-4">
          <h1 className="inline-flex items-center text-lg font-bold text-green-400">
            {eventName} 
          </h1>
          <p className="mt-3 text-sm text-gray-600">
            {desc.substring(0,100)+" ..."}
          </p>
          <div className="mt-4">
            <span className="mb-2 mr-2 inline-block rounded-full bg-green-400 px-3 py-1 text-[12px] font-semibold text-gray-900">
              {isVerified && <span>verified</span>}
            </span>
          </div>
          <div className="mt-3 flex justify-between">
            <span className="flex flex-col text-black">
              {venue}</span>
              <span className="flex flex-col text-black">
              {date}</span>
            <button
            onClick={handleEvent}
            type="button"
            className="rounded-md bg-gray-600 px-2 py-1 text-sm text-white shadow-sm hover:bg-green-400/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            More Details &rarr;
          </button>
          </div>
        </div>
      </div>
    </div>
  )
}
