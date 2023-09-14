
import React from 'react'

export function EventCard({eventName,imageUrl,venue,date,host,isVerified}) {
  return (
    <div className=" mt-8 flex max-w-2xl flex-col items-center rounded-lg border md:flex-row bg-slate-50">
      <div className="m-1 h-full w-full md:h-[200px] md:w-[300px]">
        <img
          src="https://images.unsplash.com/photo-1553969546-6f7388a7e07c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80"
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
          </p>
          <div className="mt-4">
            <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
              #Macbook
            </span>
            <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
              #Apple
            </span>
            <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
              #Laptop
            </span>
          </div>
          <div className="mt-3 flex justify-between">
            <span className="flex flex-col">
              <span className="text-[10px] font-medium text-gray-900">Dan Abromov</span>
              <span className="text-[8px] font-medium text-gray-500">@dan_abromov</span>
            </span>
            <button
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
