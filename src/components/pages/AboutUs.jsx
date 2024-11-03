import React from "react";
import HeroBannerInternalPages from "../sections/HeroBannerInternalPages";

const AboutUs = () => {


    


	const services = [
		{
			title: " Innovative Learning Environment",
			description:
				"At Shanti Sagar School, we prioritize creating a dynamic and engaging learning atmosphere. Our classrooms are equipped with the latest technology and resources, allowing students to explore concepts through hands-on experiences. We encourage curiosity and creativity, fostering a love for learning that extends beyond textbooks.",
			price: "From $550 AUD",
			image: "src/assets/innovative.png",
		},
		{
			title: " Academic Excellence",
			description:
				"At Shanti Sagar School, we are committed to providing a rigorous and enriching academic curriculum that prepares students for future success. Our dedicated faculty employs innovative teaching methods and personalized learning plans to cater to the diverse needs of our students. We believe that fostering a strong foundation in core subjects is essential for developing critical thinking and problem-solving skills.",
			price: "From $750 AUD",
			image: "src/assets/academic-excellence.png",
		},
		{
			title: "Empowering Extracurricular Activities",
			description:
				"We recognize the importance of a well-rounded education that goes beyond academics. Our school offers a wide range of extracurricular activities, including sports, arts, music, and clubs, allowing students to explore their passions and develop new skills. These programs promote teamwork, leadership, and creativity, helping students build confidence and lasting friendships.",

			image: "src/assets/empowering-eduaction.png",
		},
		{
			title: "Commitment to Lifelong Learning",
			description:
				"We believe that education is a lifelong journey. Our school instills a love for learning that extends beyond the classroom, encouraging students to be curious and seek knowledge throughout their lives. We provide resources and opportunities for personal growth and development, equipping our students with the skills they need to adapt and thrive in an ever-changing world.",

			image: "src/assets/life-long-learning.png",
		},
	];
	return (
		<section
			className="
    flex justify-center items-center flex-col"
		>
			<HeroBannerInternalPages link={"About Us"} />
			<div className="w-full md:w-[80%] flex justify-center items-center px-5">
				<div className="container flex justify-center items-center flex-col mx-auto px-4 py-12">
					<div>
						<h2 className="text-custum-sky font-bold text-center text-3xl font-my-heading tracking-wider th leading-10">
							About Us
						</h2>
						<p className="text-lg text-center   my-4 text-black  leading-6 mb-12 max-w-3xl  md:text-xl">
							"Join us in building a bright future for your children, where learning is
							engaging, relevant, and tailored to their individual needs. Together, we
							can inspire a love for learning that lasts a lifetime."
						</p>
					</div>
					<div className=" flex justify-center items-center   flex-col gap-8 my-8  ">
						{services.map((service, index) => (
							<div
								className={`flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
							>
								<div
									key={index}
									className="flex flex-col md:flex-row w-full group cursor-pointer md:w-[80%] gap-10"
								>
									<div className="relative overflow-hidden  md:aspect-[4/3]">
										<img
											src={service.image}
											alt={service.title}
											className="w-[450px]  h-[250px] object-cover rounded-3xl transition-transform duration-300 group-hover:scale-105"
										/>
									</div>
									<div className="mt-4 space-y-2">
										<h3 className="text-xl font-semibold text-gray-900 my-font">
											{service.title}
										</h3>
										<p className="text-lg text-center md:text-left   my-4 text-black  leading-6 mb-12 max-w-3xl  md:text-x">
											{service.description}
										</p>
										<div className="flex items-center justify-center md:justify-start      rounded-sm hover:text-custum-red">
											<button className="text-gray-900 bg-[#f0f0f0] p-4  rounded-xl font-medium ">
												Contact Us
											</button>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
