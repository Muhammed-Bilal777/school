import React from "react";
import { ImCheckboxChecked } from "react-icons/im";
const AboutUsSection = () => {
	return (
		<section className="about-us flex w-full   py-4 px-4 justify-center items-center">
			<div className=" w-[90%] flex flex-col md:flex-row gap-2 justify-center items-center">
				<div className="about-us-container w-full md:w-6/12  ">
					<div className="px-8 md:px-4 py-3">
						<h2 className="text-custum-sky font-bold text-3xl font-my-heading tracking-wider th leading-10">
							About Us
						</h2>
						<h3 className=" font-my-heading tracking-wider text-3xl my-2 font-bold text-custom-purple leading-10">
							We Learn Smart Way To Build Bright Futute For Your Children.
						</h3>
						<p className="text-md my-4 text-black  leading-6">
							Learning smart ways to build a bright future for children is essential in
							today’s rapidly changing world. By adopting innovative educational
							approaches, children develop critical thinking and problem-solving skills
							that are vital for success in any field. Early exposure to STEM education
							not only enhances their understanding of science and technology but also
							prepares them for future careers in high-demand industries.
						</p>
						<ul>
							<li>
								<div className="flex flex-row gap-2  items-center">
									<span>
										<ImCheckboxChecked color="" className="text-custum-sky" />
									</span>
									<h3 className="text-lg   font-bold text-custom-purple leading-6">
										Educational Approaches
									</h3>
								</div>
								<p className="text-md my-2 text-black   leading-6">
									<strong className="font-semibold">
										Innovative Learning Techniques :{" "}
									</strong>
									Discuss various innovative teaching methods that promote critical
									thinking and creativity in children.
								</p>
							</li>
							<li>
								<div className="flex flex-row gap-2  items-center">
									<ImCheckboxChecked color="" className="text-custum-sky" />
									<h3 className="text-lg   font-bold text-custom-purple leading-6">
										Importance of Early Education
									</h3>
								</div>
								<p className="text-md my-2 text-black  leading-6">
									<strong className="font-semibold">Brain Development : </strong>
									Explain how early childhood education impacts brain development and
									lifelong learning.
								</p>
							</li>
							<li>
								<div className="flex flex-row gap-2  items-center">
									<ImCheckboxChecked color="" className="text-custum-sky" />
									<h3 className="text-lg   font-bold text-custom-purple leading-6">
										Building a Bright Future
									</h3>
								</div>
								<p className="text-md my-1 text-black   leading-6">
									<strong className="font-semibold">Goal Setting for Children : </strong>
									Provide guidance on how parents can help their children set and achieve
									personal and academic goals.
								</p>
							</li>
						</ul>
					</div>
				</div>
				<div className="w-full md:w-6/12 flex justify-center items-center">
					<div className="img-div flex justify-center items-center">
						<img className="self-center" src="src\assets\section-2.png" alt="" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutUsSection;
