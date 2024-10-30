import React, { useEffect, useState } from "react";

export const CarouselSection = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	useEffect(() => {
		const interval = setInterval(nextSlide, 2000);
		return () => clearInterval(interval);
	}, [currentSlide]);
	const slides = [
		{
			title: "Great Place For Your Child To Grow At",
			description:
				"Get your kids excited about discovering something new by disguising the learning activities as fun time..",
			buttonText: "Enroll Your Child",
		},
		{
			title: "Discover Learning Through Play",
			description:
				"Our innovative approach combines education with entertainment to make learning a joyful experience.",
			buttonText: "Learn More",
		},
		{
			title: "Building Future Leaders",
			description:
				"We focus on developing essential skills while making sure your child enjoys every moment of learning.",
			buttonText: "Join Us",
		},
	];

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % slides.length);
	};

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
	};

	const goToSlide = (index) => {
		setCurrentSlide(index);
	};

	return (
		<section className="relative w-full h-screen overflow-hidden">
			{/* Background Image Div */}
			<div className="absolute inset-0">
				<img
					src="src\assets\hero-banner-bg.png"
					alt="Children playing and learning"
					className="w-full h-full object-cover"
				/>
			</div>

			{/* Carousel Div */}
			<div className="relative z-10 h-full">
				{/* Slides */}
				<div className="relative h-full">
					{slides.map((slide, index) => (
						<div
							key={index}
							className={`absolute inset-0 transition-opacity duration-500 ${
								currentSlide === index ? "opacity-100" : "opacity-0 pointer-events-none"
							}`}
						>
							<div className="flex flex-col items-start justify-center h-full max-w-5xl mx-auto px-8 text-center">
								<div className="  bg-opacity-75 p-6     max-w-2xl">
									<h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
										{slide.title}
									</h1>
									<p className="text-lg md:text-xl text-white mb-8">
										{slide.description}
									</p>
									<button className="px-8 py-3 bg-teal-400 hover:bg-teal-500 text-white rounded-md transition-colors">
										{slide.buttonText}
									</button>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Navigation Arrows */}
				<button
					onClick={prevSlide}
					className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 flex items-center justify-center transition-colors"
					aria-label="Previous slide"
				>
					<svg
						className="w-6 h-6 text-white"
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
					className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 flex items-center justify-center transition-colors"
					aria-label="Next slide"
				>
					<svg
						className="w-6 h-6 text-white"
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

				{/* Dot Indicators */}
				<div className="absolute bottom-28 left-1/2 -translate-x-1/2 flex space-x-2">
					{slides.map((_, index) => (
						<button
							key={index}
							onClick={() => goToSlide(index)}
							className={`w-2 h-2 rounded-full transition-colors ${
								currentSlide === index ? "bg-white" : "bg-white/50"
							}`}
							aria-label={`Go to slide ${index + 1}`}
						/>
					))}
				</div>
			</div>
		</section>
	);
};
