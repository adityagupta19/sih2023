import React from "react";

const About = () => {
	return (
		<>
			<section id="about" className="bgrnd layer2 pt-16  bg-slate-300">
				<div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
					<h2 className="text-3xl font-bold tracking-tight text-green-400 mb-3 xl:text-5xl">
						What Inspired Us To Do This ?
					</h2>

					<p className="block max-w-4xl mt-4 text-2xl text-black">
						Our purpose is to keep people fit and healthy. We basically provide
						a platform to both fitness enthusiasts to register in various
						activities and to the event organizers to post event updates like
						marathons and races.
					</p>
				</div>
                <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
					<h2 className="text-3xl font-bold tracking-tight text-green-400 xl:text-5xl mb-3">
						What We Look Forward To ?
					</h2>

					<p className="block max-w-4xl mt-4 text-2xl text-black">
						We want to revolutionize the fitness industry and encourage a
						healthy lifestyle through physical activities and challenges. Our
						objective is to get event sponsors onboard and together we can build
						a community that will solely be fitness-oriented. Our CSR is to have
						a long-term impact on society.
					</p>
				</div>
			</section>
			
		</>
	);
};

export default About;
