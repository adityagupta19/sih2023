import React from 'react'

export function Hero() {
  return (
    <div className="relative h-[500px] rounded-md">
      <img
        src="https://images.unsplash.com/photo-1603102859961-64b17d43580d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
        alt="running"
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute "></div>
      <div className="absolute top-32 left-16 text-left max-w-[700px]">
        <h1 className="text-5xl font-bold text-white">SyncFit</h1>
        <p className="mt-6 text-lg text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
        </p>
        <h2 className='pt-4 text-2xl font-bold text-green-400'>"You are the One"</h2>
        <button
            type="button"
            className="mt-8 rounded-md bg-gray-600 px-4 py-3 text-md font-bold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Browse Events &rarr;
          </button>
      </div>
    </div>
  )
}
