import React from "react";

export const AwardsSection = () => {
	return (
		<section className="relative event-section  w-full   py-12 flex justify-center items-center">
			<div className="w-[90%] relative flex flex-col  ">
				<div className="flex event-first-col justify-center items-center flex-col">
					<h2 className="text-4xl text-center md:text-start font-my-heading md:text-5xl lg:text-4xl font-bold mb-4 text-custum-sky tracking-wider">
						Awards and Recognition
					</h2>
				</div>

				<div className="flex flex-wrap py-12 gap-16 md:gap-8 justify-around items-center">
					<div className="w-16 h-16 hover:scale-125 transform transition-all flex justify-center items-center">
						<img className="w-16 h-22" src="src\assets\sponsor1.png" alt="" />
					</div>
					<div className="w-16 hover:scale-125 transform transition-all h-16 flex justify-center items-center">
						<img className="w-16 h-22" src="src\assets\sponsor2.png" alt="" />
					</div>
					<div className="w-16 hover:scale-125 transform transition-all h-16 flex justify-center items-center">
						<img className="w-16  h-22" src="src\assets\sponsor3.png" alt="" />
					</div>
					<div className="w-16 hover:scale-125 transform transition-all h-16 flex justify-center items-center">
						<img className="w-16 h-22" src="src\assets\sponsor4.png" alt="" />
					</div>
					<div className="w-16 hover:scale-125 transform transition-all h-16 flex justify-center items-center">
						<img className="w-16 h-22" src="src\assets\sponsor5.png" alt="" />
					</div>
					<div className="w-16 hover:scale-125 transform transition-all h-16 flex justify-center items-center">
						<img className="w-16 h-22" src="src\assets\sponsor6.png" alt="" />
					</div>
				</div>
			</div>
		</section>
	);
};
