import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Logo from '../assets/logo.svg'

export function SignUp() {
    const [isSubmited,setIsSubmited] = useState(false)
	const [data, setData] = useState({
		displayName: "",
		email: "",
		password: "",
		profilePic: "",
	});
	const handleChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};
	const handleImage = (e) => {
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
				
				setData({ ...data, [e.target.name]: imageUpData.url });
				
			});
	};

    const handleSubmit = async()=>{
        
        const res = await fetch("https://syncfit.onrender.com/user/signup",{
            method:"POST",
            headers:{
                "content-Type":"application/json"
            },
            body: JSON.stringify(data)
        })
        const user = await res.json();
        console.log(user)
        console.log(user._id)
        localStorage.setItem("userid",user._id);
        if(user._id){
            setIsSubmited(true);
        }
        
        
    }
    if(localStorage.getItem("userid")!== "" && isSubmited) {return <Navigate to='../events'/>}
	return (
		<section>
			<div className=" bg-gray-800 flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
				<div className=" bg-white p-8 rounded-md xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
				<div className="mb-4 flex justify-center">
                    <img src={Logo} className="max-w-16 max-h-16" alt="logo" />
					</div>
					<h2 className="text-center text-2xl font-bold leading-tight text-black">
						Sign up to create account
					</h2>
					<p className="mt-2 text-center text-base text-gray-600">
						Already have an account?{" "}
						<a
							href="/login"
							title=""
							className="font-medium text-black transition-all duration-200 hover:underline"
						>
							Login In
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
									Full Name{" "}
								</label>
								<div className="mt-2">
									<input
										className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
										type="text"
										placeholder="Full Name"
										id="name"
										name="displayName"
										value={data.displayName}
										onChange={handleChange}
									></input>
								</div>
							</div>
							<div>
								<label
									htmlFor="email"
									className="text-base font-medium text-gray-900"
								>
									{" "}
									Email address{" "}
								</label>
								<div className="mt-2">
									<input
										className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
										type="email"
										placeholder="Email"
										id="email"
										name="email"
										value={data.email}
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
									City{" "}
								</label>
								<div className="mt-2">
									<input
										className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
										type="text"
										placeholder="City Name"
										id="city"
										name="city"
										value={data.city}
										onChange={handleChange}
									></input>
								</div>
							</div>

							<div>
								<div className="flex items-center justify-between">
									<label
										htmlFor="password"
										className="text-base font-medium text-gray-900"
									>
										{" "}
										Password{" "}
									</label>
								</div>
								<div className="mt-2">
									<input
										className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
										type="password"
										placeholder="Password"
										id="password"
										name="password"
										value={data.password}
										onChange={handleChange}
									></input>
								</div>
							</div>
							<div>
								<label
									htmlFor="image"
									className="text-base font-medium text-gray-900"
								>
									{" "}
									Profile photo{" "}
								</label>
								<div className="mt-2">
									<input
										className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
										type="file"
										placeholder="Profile Image"
										id="image"
										name="profilePic"
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
									Create Account
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
}
