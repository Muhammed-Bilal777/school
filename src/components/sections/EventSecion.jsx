import React from "react";

const EventSecion = () => {
	return (
		<section className="relative event-section  w-full   py-12 flex justify-center items-center">
			<div className="w-[90%] relative flex flex-col py-4 md:py-14">
				<div className="flex event-first-col justify-center items-center flex-col">
					<h2 className="text-4xl text-center md:text-start font-my-heading md:text-5xl lg:text-4xl font-bold mb-4 text-custum-sky tracking-wider">
						Join Our Event
					</h2>
					<p className="text-lg text-center   my-4 text-black  leading-6 mb-12 max-w-3xl  md:text-2xl">
						Welcome to our vibrant world of school events! At{" "}
						<strong className="my-font">"Shanti Sagar"</strong>, we believe in
						creating enriching experiences that go beyond traditional classroom
						learning.
					</p>
				</div>
				<div className="flex gap-10 flex-wrap flex-row justify-center">
					<div className="events-card  w-full md:w-[40%] flex-col lg:flex-row h-3/5  bg-white rounded-3xl flex  gap-2 lg:gap-0">
						<div>
							<img
								className="w-full h-full"
								src="src\assets\events-card1.png"
								alt=""
							/>
						</div>
						<div className="flex flex-col px-2 py-3 justify-center">
							<div className="   events-inside-card w-66 flex flex-row gap-3 py-2  px-4 justify-between">
								<div className="inner-card  w-[100%] flex flex-row justify-evenly p-6">
									<div>
										<h3 className="text-sm   my-font text-white">Date</h3>
										<p className="text-white text-sm">17/12/23</p>
									</div>
									<div>
										<h3 className="text-sm  my-font text-white">Time</h3>
										<p className="text-white text-sm">9Am</p>
									</div>
									<div>
										<h3 className="text-sm   my-font text-white">Location</h3>
										<p className="text-white text-sm">School Room</p>
									</div>
								</div>
							</div>
							<div className="py-2 px-2 my-font">
								<h3 className="text-3xl md:text-xl text-center md:text-left  font-bold    text-custom-purple my-font ">
									Fun Party
								</h3>
							</div>
							<div>
								<p className="text-center text-xl md:text-left md:text-sm">
									It is a long established fact that a reader will be distracted by the
									readable
								</p>
							</div>
							<div className="flex my-4 justify-center py-5 md:justify-start ">
								<button className="bg-[#ff3366] hover:bg-custom-purple text-white font-bold px-4 sm:px-6 py-2 rounded-md transition-colors text-xl sm:text-base">
									Read More
								</button>
							</div>
						</div>
					</div>

					<div className="events-card  w-full md:w-[40%] flex-col lg:flex-row h-3/5  bg-white rounded-3xl flex  gap-2 lg:gap-0">
						<div>
							<img
								className="w-full h-full"
								src="src\assets\events-card1.png"
								alt=""
							/>
						</div>
						<div className="flex flex-col px-2 py-3 justify-center">
							<div className="   events-inside-card w-66 flex flex-row gap-3 py-2  px-4 justify-between">
								<div className="inner-card  w-[100%] flex flex-row justify-evenly p-6">
									<div>
										<h3 className="text-sm   my-font text-white">Date</h3>
										<p className="text-white text-sm">17/12/23</p>
									</div>
									<div>
										<h3 className="text-sm  my-font text-white">Time</h3>
										<p className="text-white text-sm">9Am</p>
									</div>
									<div>
										<h3 className="text-sm   my-font text-white">Location</h3>
										<p className="text-white text-sm">School Room</p>
									</div>
								</div>
							</div>
							<div className="py-2 px-2 my-font">
								<h3 className="text-3xl md:text-xl text-center md:text-left  font-bold    text-custom-purple my-font ">
									Fun Party
								</h3>
							</div>
							<div>
								<p className="text-center text-xl md:text-left md:text-sm">
									It is a long established fact that a reader will be distracted by the
									readable
								</p>
							</div>
							<div className="flex my-4 justify-center py-5 md:justify-start ">
								<button className="bg-[#ff3366] hover:bg-custom-purple text-white font-bold px-4 sm:px-6 py-2 rounded-md transition-colors text-xl sm:text-base">
									Read More
								</button>
							</div>
						</div>
					</div>

					<div className="events-card  w-full md:w-[40%] flex-col lg:flex-row h-3/5  bg-white rounded-3xl flex  gap-2 lg:gap-0">
						<div>
							<img
								className="w-full h-full"
								src="src\assets\events-card1.png"
								alt=""
							/>
						</div>
						<div className="flex flex-col px-2 py-3 justify-center">
							<div className="   events-inside-card w-66 flex flex-row gap-3 py-2  px-4 justify-between">
								<div className="inner-card  w-[100%] flex flex-row justify-evenly p-6">
									<div>
										<h3 className="text-sm   my-font text-white">Date</h3>
										<p className="text-white text-sm">17/12/23</p>
									</div>
									<div>
										<h3 className="text-sm  my-font text-white">Time</h3>
										<p className="text-white text-sm">9Am</p>
									</div>
									<div>
										<h3 className="text-sm   my-font text-white">Location</h3>
										<p className="text-white text-sm">School Room</p>
									</div>
								</div>
							</div>
							<div className="py-2 px-2 my-font">
								<h3 className="text-3xl md:text-xl text-center md:text-left font-bold    text-custom-purple my-font ">
									Fun Party
								</h3>
							</div>
							<div>
								<p className="text-center text-xl md:text-left md:text-sm">
									It is a long established fact that a reader will be distracted by the
									readable
								</p>
							</div>
							<div className="flex my-4 justify-center py-5 md:justify-start ">
								<button className="bg-[#ff3366] hover:bg-custom-purple text-white font-bold px-4 sm:px-6 py-2 rounded-md transition-colors text-xl sm:text-base">
									Read More
								</button>
							</div>
						</div>
					</div>

					<div className="events-card  w-full md:w-[40%] flex-col lg:flex-row h-3/5  bg-white rounded-3xl flex  gap-2 lg:gap-0">
						<div>
							<img
								className="w-full h-full"
								src="src\assets\events-card1.png"
								alt=""
							/>
						</div>
						<div className="flex flex-col px-2 py-3 justify-center">
							<div className="   events-inside-card w-66 flex flex-row gap-3 py-2  px-4 justify-between">
								<div className="inner-card  w-[100%] flex flex-row justify-evenly p-6">
									<div>
										<h3 className="text-sm   my-font text-white">Date</h3>
										<p className="text-white text-sm">17/12/23</p>
									</div>
									<div>
										<h3 className="text-sm  my-font text-white">Time</h3>
										<p className="text-white text-sm">9Am</p>
									</div>
									<div>
										<h3 className="text-sm   my-font text-white">Location</h3>
										<p className="text-white text-sm">School Room</p>
									</div>
								</div>
							</div>
							<div className="py-2 px-2 my-font">
								<h3 className="text-3xl md:text-xl text-center md:text-left  font-bold    text-custom-purple my-font ">
									Fun Party
								</h3>
							</div>
							<div>
								<p className="text-center text-xl md:text-left md:text-sm">
									It is a long established fact that a reader will be distracted by the
									readable
								</p>
							</div>
							<div className="flex my-4 justify-center py-5 md:justify-start ">
								<button className="bg-[#ff3366] hover:bg-custom-purple text-white font-bold px-4 sm:px-6 py-2 rounded-md transition-colors text-xl sm:text-base">
									Read More
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default EventSecion;
