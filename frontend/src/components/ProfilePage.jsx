import React, { useEffect, useState } from "react";
import axios from "axios";

const ProfilePage = () => {
	const [user, setUser] = useState(false);
    const [rank,setRank] = useState(0);

	useEffect(() => {
		let url = `http://localhost:4000/user/${localStorage.getItem("userid")}`;
        let url2 = `http://localhost:4000/user/ranking/${localStorage.getItem("userid")}`
		axios.get(url).then((res) => {
			setUser(res.data);
		});
        axios.get(url2).then(res=>{
            setRank(res.data);
        })
	});
	if (user)
		return (
			<section className="pt-16 bg-blueGray-50">
				<div className="w-full lg:w-4/12 px-4 mx-auto">
					<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16 pb-8">
						<div className="px-6">
							<div className="flex flex-wrap justify-center">
								<div className="w-full px-4 flex justify-center">
									<div className="relative">
										<img
											alt="..."
											src={user.profilePic}
											className="shadow-xl rounded-full h-[140px] mt-8  align-middle "
										/>
									</div>
								</div>
								<div className="w-full px-4 text-center mt-20 text-black">
									<div className="flex justify-between py-4 lg:pt-4 pt-8">
										<div className=" p-3 w-16 text-center">
											<span className="text-xl font-bold block uppercase tracking-wide text-green-400">
												{user.points}
											</span>
											<span className="text-sm text-blueGray-400">Points</span>
										</div>
										<div className=" pl-5 pt-2 w-20 text-center">
											<span className="text-xl font-bold block uppercase tracking-wide text-green-400">
												{user.coins}
											</span>
											<span className="text-sm text-blueGray-400">
												Coins Available
											</span>
										</div>
										<div className=" p-3 pb-2 w-32 text-center">
											<span className="text-xl font-bold block uppercase tracking-wide text-green-400">
												{user.eventsParticipated.length}
											</span>
											<span className="text-sm text-blueGray-400">
												Number of Events Participated
											</span>
										</div>
									</div>
								</div>
							</div>
							<div className="text-center mt-12">
								<h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 ">
									{user.displayName}
								</h3>
								<div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
									<i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
									{user.city}
								</div>
                                <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 ">
									{rank.rank}
								</h3>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
};

export default ProfilePage;
