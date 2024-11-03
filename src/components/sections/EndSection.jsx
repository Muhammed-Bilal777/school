import React from "react";

export const EndSection = () => {
	return (
		<section className="w-full end-section bg-[#76AD1E] h-[180px] md:h-[100px] ">
			<div className="w-[90%] gap-5 flex flex-col md:flex-row justify-center md:justify-around">
				<div>
					<img
						className="  md:h-[100px] md:w-[200px] mt-[-50px]"
						src="src\assets\end-section-logo.png"
						alt=""
					/>
				</div>
				<div className="flex justify-center items-center mt-0 md:mt-5">
					<h2 className="text-center text-xl md:text-2xl text-white my-font">
						© Copyright 2024 Kindergarten{" "}
						<strong className="font-bold my-font text-red-600">
							Muhammed Bilal❤️
						</strong>
					</h2>
				</div>
			</div>
		</section>
	);
};
