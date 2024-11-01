import React, { useState } from "react";

export const ReviewsSection = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const testimonials = [
		{
			text:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining",
			name: "Delia Smith",
			role: "Lorem ipsum dolor sit amet",
			image: "/placeholder.svg?height=80&width=80",
			color: "bg-[#e91e63]",
		},
		{
			text:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining",
			name: "Ande Shatma",
			role: "Lorem ipsum dolor sit amet",
			image: "/placeholder.svg?height=80&width=80",
			color: "bg-[#8bc34a]",
		},
		{
			text:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining",
			name: "John Doe",
			role: "Lorem ipsum dolor sit amet",
			image: "/placeholder.svg?height=80&width=80",
			color: "bg-[#e91e63]",
		},
	];

	const nextSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === testimonials.length - 2 ? 0 : prevIndex + 1
		);
	};

	const prevSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? testimonials.length - 2 : prevIndex - 1
		);
	};

	return (
		<section className="relative reviews-section  w-full   py-12 flex justify-center items-center">
			<div className="w-[90%] relative flex flex-col justify-center items-center py-4 md:py-14">
				<div className="flex event-first-col justify-center items-center flex-col">
					<h2 className="text-4xl text-center md:text-start font-my-heading md:text-5xl lg:text-4xl font-bold mb-4 text-custum-sky tracking-wider">
						What Parents Say
					</h2>
					<p className="text-lg text-center   my-4 text-black  leading-6 mb-12 max-w-3xl  md:text-2xl">
						Find out what parents are saying about our school.
					</p>
				</div>
				<div className="relative w-[90%] flex justify-center items-center">
					<div className="flex gap-14 md:gap-8 px-10 overflow-hidden">
						{testimonials
							.slice(currentIndex, currentIndex + 2)
							.map((testimonial, index) => (
								<div
									key={currentIndex + index}
									className="w-full md:w-1/2 flex-shrink-0 transition-all duration-300"
								>
									<div
										className={`relative p-6 rounded-3xl ${testimonial.color} text-white mb-8`}
									>
										<div className="relative z-10">{testimonial.text}</div>
										<div
											className={`absolute -bottom-4 left-8 w-8 h-8 ${testimonial.color} rotate-45`}
										/>
									</div>
									<div className="flex items-center gap-4 px-6">
										<img
											src={testimonial.image}
											alt={testimonial.name}
											className="w-16 h-16 rounded-full object-cover"
										/>
										<div>
											<h3 className="font-bold text-xl">{testimonial.name}</h3>
											<p className="text-gray-600">{testimonial.role}</p>
										</div>
									</div>
								</div>
							))}
					</div>

					<button
						onClick={prevSlide}
						className="absolute left-5 top-[40%] -translate-y-1/2 -translate-x-4 bg-black text-white w-12 h-12 rounded-full flex items-center justify-center focus:outline-none"
						aria-label="Previous testimonial"
					>
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M15 19l-7-7 7-7"
							/>
						</svg>
					</button>

					<button
						onClick={nextSlide}
						className="absolute right-7 md:right-0 top-[40%] -translate-y-1/2 translate-x-4 bg-black text-white w-12 h-12 rounded-full flex items-center justify-center focus:outline-none"
						aria-label="Next testimonial"
					>
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M9 5l7 7-7 7"
							/>
						</svg>
					</button>
				</div>
			</div>
		</section>
	);
};
