import React from "react";

const tests = [
	{
		text: "Attending Dwaraka Express Runners was a game-changer for me. The variety of workouts, expert guidance, and the incredible sense of community motivated me like never before. I've gained not only fitness but also friends for life.",
		img: "http://res.cloudinary.com/dk78mn6gs/image/upload/v1694822458/qlryvllzotghpipr0ddg.jpg",
	},
	{
		text: "Kudos to the team behind Delhi Half Marathon! This event exceeded my expectations. The workshops were enlightening, the workouts challenging, and the positive energy was infectious. I can't wait for the next one!",
		img: "http://res.cloudinary.com/dk78mn6gs/image/upload/v1694822542/i8tnyrflnp1zzaspy96l.jpg",
	},
	{
		text: "9th Edition Hindustan Marathon was a breath of fresh air. It helped me break out of my fitness rut and embrace a healthier lifestyle. The event's organizers truly care about their participants, and it shows in every detail. Highly recommended!",
		img: "http://res.cloudinary.com/dk78mn6gs/image/upload/v1694822564/dwog57250iyf7cggfgzo.jpg",
	},
	{
		text: "I was hesitant at first, but Run For Success Trust turned out to be a life-changing experience. The diverse range of fitness activities and the supportive atmosphere made me push my limits and achieve fitness goals I never thought possible. Thank you for the inspiration!",
		img: "http://res.cloudinary.com/dk78mn6gs/image/upload/v1694822579/frijljlw5wsn4b0u2tou.jpg",
	},
];

function TestimonialThree({ text,img }) {
	return (
		<div className="mx-2 max-w-xl flex flex-col rounded-md bg-white">
			<div className="flex flex-1 flex-col  p-8">
            <div className="ml-16 rounded-md">
                <img src={img} className="h-32 rounded-3xl my-2" alt="profile"/>
            </div>
				<div className="flex-1 pt-2">
					<blockquote>
						<p className="text-lg text-gray-800">"{text}"</p>
					</blockquote>
				</div>
			</div>
		</div>
	);
}

const Testimonials = () => {
	return (
		<>
			<h1 className="text-4xl mt-8 text-white font-bold text-center">
				Our Testimonials
			</h1>
			<div className="p-16  flex justify-between">
				{tests.map((test) => {
					return <TestimonialThree text={test.text} img={test.img} />;
				})}
			</div>
		</>
	);
};

export default Testimonials;
