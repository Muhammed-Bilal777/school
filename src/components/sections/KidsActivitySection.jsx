import React from "react";

export const KidsActivitySection = () => {
	return (
		<section className="relative kids-activity-section w-full   py-12 flex justify-center items-center">
			<div className="w-[90%] relative flex flex-col py-4 md:py-14">
				<div className="flex justify-center items-center flex-col">
					<h2 className="text-2xl text-center md:text-start font-my-heading md:text-3xl lg:text-4xl font-bold mb-4 text-custum-sky tracking-wider">
						Kids Activities
					</h2>
					<p className="text-md text-center   my-4 text-black  leading-6 mb-12 max-w-3xl text-sm md:text-lg">
						Engaging school kids through creative, educational, and fun hands-on
						activities that promote learning, teamwork, and personal growth.
					</p>
				</div>
				<div className="w-full flex flex-col lg:flex-row">
					<div className="w-[100%] md:w-[40%] self-center flex justify-center items-center">
						<img src="src\assets\kids-activity-section-left-image.png" alt="" />
					</div>
					<div className="  w-[100%] lg:w-[60%] p-4 flex flex-col md:flex-row lg:flex-wrap    gap-2 md:gap-5">
						<div className="  w-full  lg:w-[48%] flex flex-col   items-center lg:justify-start lg:items-start gap-4 md:gap-2  py-4 ">
							<img src="src\assets\icon1.png" alt="" />
							<h3 className="font-my-heading text-xl md:text-2xl lg:text-3xl text-custom-purple">
								Full Day Session
							</h3>
							<p className="my-font text-center md:text-start text-black text-md md:text-lg">
								Little scientists exploring the wonders of chemistry through colorful
								experiments 🧪
							</p>
						</div>
						<div className="  w-full  lg:w-[48%] flex flex-col   items-center lg:justify-start lg:items-start gap-4 md:gap-2  py-4 ">
							<img src="src\assets\icon2.png" alt="" />
							<h3 className="font-my-heading text-xl md:text-2xl lg:text-3xl text-custom-purple">
								Table/Floor Toys
							</h3>
							<p className="my-font text-center md:text-start text-black text-md md:text-lg">
								Future athletes mastering teamwork in mini-basketball sessions 🏀
							</p>
						</div>
						<div className="  w-full  lg:w-[48%] flex flex-col   items-center lg:justify-start lg:items-start gap-4 md:gap-2  py-4 ">
							<img src="src\assets\icon3.png" alt="" />
							<h3 className="font-my-heading text-xl md:text-2xl lg:text-3xl text-custom-purple">
								Outdoor Games
							</h3>
							<p className="my-font text-center md:text-start text-black text-md md:text-lg">
								Young gardeners learning about nature while planting their first seeds
								🌱
							</p>
						</div>
						<div className="  w-full  lg:w-[48%] flex flex-col   items-center lg:justify-start lg:items-start gap-4 md:gap-2  py-4 ">
							<img src="src\assets\icon4.png" alt="" />
							<h3 className="font-my-heading text-xl md:text-2xl lg:text-3xl text-custom-purple">
								Half Day Session
							</h3>
							<p className="my-font text-center md:text-start text-black text-md md:text-lg">
								Future athletes mastering teamwork in mini-basketball sessions 🏀
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
