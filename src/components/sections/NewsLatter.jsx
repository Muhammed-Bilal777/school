import React from "react";
import CountUp from "react-countup";

export const NewsLatter = () => {
	return (
		<section className="w-full news-letter-section max-w-7xl mx-auto px-4 my-5 flex justify-center items-center flex-col">
			{/* Stats Section */}

			<div className=" w-[90%]  grid grid-cols-1 md:grid-cols-2 justify-center items-center place-content-center place-items-center lg:grid-cols-4 gap-6 mb-12">
				<div className="flex items-center gap-4 w-full justify-center">
					<div className="bg-[#ff4500] rounded-full p-4">
						<img src="src\assets\bagpack.png" className="w-8 h-8 text-white" />
					</div>
					<div>
						<div className="text-3xl font-bold">
							<span>
								<CountUp duration={5} end={1000} />+
							</span>
						</div>
						<div className="text-gray-600">Student Enroll</div>
					</div>
				</div>

				<div className="flex items-center gap-4 w-full justify-center">
					<div className="bg-[#8bc34a] rounded-full p-4">
						<img src="src\assets\bagpack.png" className="w-8 h-8 text-white" />
					</div>
					<div>
						<div className="text-3xl font-bold">
							<span>
								<CountUp duration={5} end={40} />+
							</span>
						</div>
						<div className="text-gray-600">Total Classes</div>
					</div>
				</div>

				<div className="flex items-center gap-4 w-full justify-center">
					<div className="bg-[#e91e9b] rounded-full p-4">
						<img src="src\assets\bagpack.png" className="w-8 h-8 text-white" />
					</div>
					<div>
						<div className="text-3xl font-bold">
							<span>
								<CountUp duration={5} end={70} />+
							</span>
						</div>
						<div className="text-gray-600">Expert Teacher</div>
					</div>
				</div>

				<div className="flex items-center gap-4 w-full justify-center">
					<div className="bg-[#00bcd4] rounded-full p-4">
						<img src="src\assets\bagpack.png" className="w-8 h-8 text-white" />
					</div>
					<div>
						<div className="text-3xl font-bold">
							<span>
								<CountUp duration={5} end={15} />+
							</span>
						</div>
						<div className="text-gray-600">Years Experience</div>
					</div>
				</div>
			</div>

			{/* Newsletter Section */}
			<div className="relative w-full flex justify-center my-28 form-section bg-custom-purple rounded-3xl  mb-12">
				<div className="w-[90%] flex justify-center items-center flex-col">
					<div
						className="relative w-full flex flex-col lg:flex-row items-center justify-sta
					 p-8 md:p-12"
					>
						<div className="mb-8 order-2 lg:order-1 md:mb-0 md:mr-8">
							<div className="text-[#00bcd4] text-center lg:text-start text-xl mb-2">
								Subscribe To
							</div>
							<h2 className="text-4xl text-center md:text-start font-my-heading md:text-5xl lg:text-4xl font-bold mb-4 text-custum-sky tracking-wider">
								OUR NEWSLETTER
							</h2>
							<form className="flex w-full max-w-md">
								<input
									type="email"
									placeholder="Email Address*"
									className="flex-1 px-4 py-3 rounded-l-lg focus:outline-none"
									required
								/>
								<button
									type="submit"
									className="bg-[#00bcd4] text-white px-6 py-3 rounded-r-lg font-semibold hover:bg-[#00acc1] transition-colors"
								>
									SUBSCRIBE
								</button>
							</form>
						</div>
						<div className="w-full  order-1 lg:order-2 relative  lg:absolute bottom-20 right-0 md:w-auto h-60">
							<img
								src="src\assets\news-letter-child.png"
								alt="Student with graduation cap"
								className="h-80 lg:max-w-[300px] mx-auto"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
