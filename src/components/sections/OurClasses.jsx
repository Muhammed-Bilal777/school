import { useEffect, useState } from "react";

import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
export default function OurClasses() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [cardsToShow, setCardsToShow] = useState(4);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 640) {
				setCardsToShow(1);
			} else if (window.innerWidth < 1024) {
				setCardsToShow(2);
			} else if (window.innerWidth < 1280) {
				setCardsToShow(3);
			} else {
				setCardsToShow(4);
			}
		};

		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const classes = [
		{
			image: "src/assets/classes-image1.png",
			age: "6 Years",
			size: "20 Seats",
			price: "20",
			title: "Numbers Matching",
			description:
				"It is a long established fact that a reader will be distracted by the readable content of a",
		},
		{
			image: "src/assets/classes-image2.png",
			age: "6 Years",
			size: "20 Seats",
			price: "20",
			title: "Letter Recognition",
			description:
				"It is a long established fact that a reader will be distracted by the readable content of a",
		},
		{
			image: "src/assets/classes-image3.png",
			age: "6 Years",
			size: "20 Seats",
			price: "20",
			title: "Shape Sorting",
			description:
				"It is a long established fact that a reader will be distracted by the readable content of a",
		},
		{
			image: "src/assets/classes-image1.png",
			age: "6 Years",
			size: "20 Seats",
			price: "20",
			title: "Color Learning",
			description:
				"It is a long established fact that a reader will be distracted by the readable content of a",
		},
		{
			image: "src/assets/classes-image2.png",
			age: "6 Years",
			size: "20 Seats",
			price: "20",
			title: "Pattern Matching",
			description:
				"It is a long established fact that a reader will be distracted by the readable content of a",
		},
		{
			image: "src/assets/classes-image2.png",
			age: "6 Years",
			size: "20 Seats",
			price: "20",
			title: "Basic Counting",
			description:
				"It is a long established fact that a reader will be distracted by the readable content of a",
		},
	];

	const nextSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex >= classes.length - cardsToShow ? 0 : prevIndex + 1
		);
	};

	const prevSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? classes.length - cardsToShow : prevIndex - 1
		);
	};

	return (
		<section className="relative our-classes-section w-full   py-12 flex justify-center items-center">
			<div className="w-[90%] relative">
				<h2 className="text-2xl text-center md:text-start font-my-heading md:text-3xl lg:text-4xl font-bold mb-4 text-custum-sky tracking-wider">
					Our Classes
				</h2>
				<p className="text-md text-center md:text-start my-4 text-black  leading-6 mb-12 max-w-3xl text-sm md:text-lg">
					At our school, we offer a diverse range of classes designed to cater to the
					varied interests and academic needs of our students. From core subjects
					like mathematics, science, and language arts to specialized courses in the
					arts, technology, and physical education, our curriculum is designed to
					foster a well-rounded education.
				</p>
				<div className="relative">
					<div className="overflow-hidden">
						<div
							className="flex transition-transform duration-300 ease-in-out"
							style={{
								transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
							}}
						>
							{classes.map((classItem, index) => (
								<div
									key={index}
									className={`w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 flex-shrink-0 px-2 mb-4 transform transition hover:translate-y-2
                    `}
									style={{ flex: `0 0 ${100 / cardsToShow}%` }}
								>
									<div className="bg-white rounded-2xl overflow-hidden shadow-lg h-full flex flex-col justify-center items-center flex">
										<div className="aspect-video">
											<img
												src={classItem.image}
												alt={classItem.title}
												className="w-full h-full object-cover"
											/>
										</div>
										<div className="classes-cards bg-white text-white py-3 px-4">
											<div className="flex justify-between items-center text-xs sm:text-sm">
												<div className="text-center">
													<div className="opacity-75">Age</div>
													<div className="font-medium">{classItem.age}</div>
												</div>
												<div className="h-8 w-px bg-white/20" />
												<div className="text-center">
													<div className="opacity-75">Size</div>
													<div className="font-medium">{classItem.size}</div>
												</div>
												<div className="h-8 w-px bg-white/20" />
												<div className="text-center">
													<div className="opacity-75">Price</div>
													<div className="font-medium">{classItem.price}</div>
												</div>
											</div>
										</div>
										<div className="p-4 sm:p-6 flex-grow flex flex-col justify-between">
											<div>
												<h3 className="text-lg sm:text-xl font-bold mb-3 text-center text-custom-purple my-font ">
													{classItem.title}
												</h3>
												<p className="text-black text-center mb-4 text-md">
													{classItem.description}
												</p>
											</div>
											<div className="flex justify-center">
												<button className="bg-[#ff3366] hover:bg-[#ff1a4d] text-white font-bold px-4 sm:px-6 py-2 rounded-md transition-colors text-sm sm:text-base">
													Read More
												</button>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className="absolute top-96  md:top-[45%] lg:top-[5%] w-full md:w-fit lg:left-[80%]  ">
					<button
						onClick={prevSlide}
						className="absolute md:left- top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black flex items-center justify-center text-white hover:bg-gray-800 transition-colors"
						aria-label="Previous slide"
					>
						<FaArrowCircleLeft className="w-6 h-6" />
					</button>
					<button
						onClick={nextSlide}
						className="absolute left-[83%]  sm:left-[90%] md:left-[94%] lg:left-10 top-1/2 -translate-y-1/2 translate-x-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black flex items-center justify-center text-white hover:bg-gray-800 transition-colors"
						aria-label="Next slide"
					>
						<FaArrowCircleRight className="w-6 h-6" />
					</button>
				</div>
				;
			</div>
		</section>
	);
}
