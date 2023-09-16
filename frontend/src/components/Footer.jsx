import React from 'react'
import insta from '../assets/instag.png'

const Footer = () => {
  return (
    <section className="py-10 nav">
			<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
				<div className="max-w-2xl mx-auto text-center">
					<h2 className="text-5xl l font-bold text-gray-800 dark:text-gray-300">
						Contact Us
					</h2>
				</div>

				<div className="mt-12  mx-auto flex items-center justify-center flex-wrap">
				<a href="https://www.linkedin.com/in/adityagupta11219/">
					<div className="rounded-md h-20 w-48 my-4 mx-4 flex ">
						<svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"> <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
					</div>
					</a>
                <a href="/">
                <div className="rounded-md h-20 w-48 my-4 mx-4 flex ">
                <img src={insta} className="min-w-[52px] min-h-[62px]" alt="logo" />
                    </div>
                </a>
                    </div>
			</div>
		</section>
  )
}

export default Footer