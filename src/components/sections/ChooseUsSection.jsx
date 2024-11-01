import React from "react";

export const ChooseUsSection = () => {
	return (
		<section className="relative choose-us-section  w-full   py-12 flex justify-center items-center">
			<div className="w-[90%] relative flex flex-col py-4 md:py-14">
				<div className="flex justify-center items-center flex-col">
					<h2 className="text-2xl text-center md:text-start font-my-heading md:text-3xl lg:text-4xl font-bold mb-4 text-custum-sky tracking-wider">
						Why Choose Us
					</h2>
					<p className="text-md text-center   my-4 text-black  leading-6 mb-12 max-w-3xl text-sm md:text-lg">
						At our school, we offer a unique and enriching educational experience that
						sets us apart from the rest.By choosing our school, you're investing in
						your child's future and providing them with the tools they need to thrive
						in an ever-changing world.
					</p>
				</div>
				<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
					<div class="  flex flex-col gap-4 p-4">
						<div
							className="flex flex-grow justify-c
            items-center gap-4 lg:gap-8"
						>
							<div className="flex flex-col gap-4">
								<h2 className="text-custom-purple my-font text-xl ">Meals Provided</h2>
								<p>
									Lorem ipsum dolor amet consectetur adipisicing elit sed eiusmod tempor
									01
								</p>
							</div>
							<div>
								<img className="h-42 w-44" src="src\assets\meals.png" alt="" />
							</div>
						</div>
						<div
							className="flex flex-grow justify-c
            items-center gap-4 lg:gap-8"
						>
							<div className="flex flex-col gap-4">
								<h2 className="text-custom-purple my-font text-xl ">
									Special Education
								</h2>
								<p>
									Lorem ipsum dolor amet consectetur adipisicing elit sed eiusmod tempor
									01
								</p>
							</div>
							<div>
								<img className="h-42 w-44" src="src\assets\hat.png" alt="" />
							</div>
						</div>
						<div
							className="flex flex-grow justify-c
            items-center gap-4 lg:gap-8"
						>
							<div className="flex flex-col gap-4">
								<h2 className="text-custom-purple my-font text-xl ">
									Full Day Session
								</h2>
								<p>
									Lorem ipsum dolor amet consectetur adipisicing elit sed eiusmod tempor
									01
								</p>
							</div>
							<div>
								<img className="h-42 w-44" src="src\assets\session.png" alt="" />
							</div>
						</div>
					</div>
					<div class="  flex justify-center items-center  p-4">
						<img src="src\assets\child.png" className="h-[360px]" alt="" />
					</div>
					<div class="  flex flex-col gap-4 p-4">
						<div
							className="flex flex-grow justify-c
            items-center gap-4 lg:gap-8"
						>
							<div className="flex flex-col gap-4">
								<h2 className="text-custom-purple my-font text-xl ">Meals Provided</h2>
								<p>
									Lorem ipsum dolor amet consectetur adipisicing elit sed eiusmod tempor
									01
								</p>
							</div>
							<div>
								<img className="h-42 w-44" src="src\assets\language.png" alt="" />
							</div>
						</div>
						<div
							className="flex flex-grow justify-c
            items-center gap-4 lg:gap-8"
						>
							<div className="flex flex-col gap-4">
								<h2 className="text-custom-purple my-font text-xl ">
									Special Education
								</h2>
								<p>
									Lorem ipsum dolor amet consectetur adipisicing elit sed eiusmod tempor
									01
								</p>
							</div>
							<div>
								<img className="h-42 w-44" src="src\assets\bus.png" alt="" />
							</div>
						</div>
						<div
							className="flex flex-grow justify-c
            items-center gap-4 lg:gap-8"
						>
							<div className="flex flex-col gap-4">
								<h2 className="text-custom-purple my-font text-xl ">
									Full Day Session
								</h2>
								<p>
									Lorem ipsum dolor amet consectetur adipisicing elit sed eiusmod tempor
									01
								</p>
							</div>
							<div>
								<img className="h-42 w-44" src="src\assets\teaching.png" alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
