import React from "react";


const dd = [{
	title:"Mission",
	text:"Our purpose is to keep people fit and healthy. We basically provide a platform to both fitness enthusiasts to register in various activities and to the event organizers to post event updates like marathons and races.",
	imageUrl:"http://res.cloudinary.com/dk78mn6gs/image/upload/v1694817767/m2icippxylwgkddggjxv.jpg"
},{
	title:"Vision",
	text:"We want to revolutionize the fitness industry and encourage a healthy lifestyle through physical activities and challenges. Our objective is to get event sponsors onboard and together we can build a community that will solely be fitness-oriented. Our CSR is to have a long-term impact on society.",
	imageUrl:"http://res.cloudinary.com/dk78mn6gs/image/upload/v1694817793/ofguakoozkdlnz2lorr0.jpg"
}]

function TestimonialOne({title,text,imageUrl}) {
	return (
	  <section className="px-2 py-16 md:px-0 bg-slate-200">
		<div className="mx-auto max-w-4xl">
		  <div className="md:flex md:items-center md:justify-center md:space-x-14">
			<div className="relative h-48 w-48 flex-shrink-0">
			  <img
				className="relative h-[216px] w-[216px] rounded-full object-cover"
				src={imageUrl} 
				alt=""
			  />
			</div>
  
			<div className="mt-10 md:mt-0">
			<h1 className="text-3xl font-bold tracking-tight text-green-400 mb-3 xl:text-5xl">{title} </h1>
			  <blockquote>
				<p className="text-2xl text-black">
				  {text}
				</p>
			  </blockquote>
			  
			</div>
		  </div>
		</div>
	  </section>
	)
  }

const About = () => {
	return (
		<div id="about">
		{dd.map((d)=>{
			return(
			<TestimonialOne title={d.title} text={d.text} imageUrl={d.imageUrl}/>)
		})}
			
			
		</div>
	);
};

export default About;
