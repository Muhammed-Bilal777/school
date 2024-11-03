import React, { useEffect, useState } from "react";

export const FrequentlyAskedW = () => {
	const [openIndex, setOpenIndex] = useState(null);

	const accordionItems = [
		{
			question: "What are the school hours?",
			answer:
				"School hours typically vary by grade level and district. Most elementary schools operate from 8:00 AM to 3:00 PM, while middle and high schools may start earlier and end later.",
			color: "text-[#ff3300]",
			borderColor: "border-[#ff3300]",
		},
		{
			question: "How do I enroll my child in school?",
			answer:
				"To enroll your child, you will need to complete the registration process through your local school district. This usually involves providing proof of residency, your child’s birth certificate, and previous school transcripts.",
			color: "text-[#ff0066]",
			borderColor: "border-[#ff0066]",
		},
		{
			question: " How can I support my child’s education at home?",
			answer:
				"You can support your child by establishing a consistent homework routine, providing a quiet study space, encouraging reading, and maintaining open communication about their school experiences.",
			color: "text-[#66cc00]",
			borderColor: "border-[#66cc00]",
		},
		{
			question: "What should I do if my child is struggling academically?",
			answer:
				"If your child is facing academic challenges, start by discussing the issues with their teacher. Consider scheduling a meeting to explore options such as tutoring, additional resources, or special education services, if necessary.",
			color: "text-[#FF4545]",
			borderColor: "border-[#FF4545]",
		},
		{
			question: "How can I communicate with my child’s teacher?",
			answer:
				"You can communicate with your child’s teacher via email, phone calls, or during scheduled parent-teacher conferences. ",
			color: "text-[#133E87]",
			borderColor: "border-[#133E87]",
		},

		{
			question: "What should I do if my child is late to school?",
			answer:
				"If your child is late, ensure they check in at the school office upon arrival. Depending on the school’s policy, they may need a note explaining the tardiness.",
			color: "text-[#859F3D]",
			borderColor: "border-[#859F3D]",
		},
		{
			question: "How can I access my child’s academic records?",
			answer:
				"Parents can typically access their child’s academic records through the school’s online portal or by requesting copies from the school office. ",
			color: "text-[#FF77B7]",
			borderColor: "border-[#FF77B7]",
		},

		{
			question: "How can I help my child prepare for standardized tests?",
			answer:
				"To help your child prepare for standardized tests, encourage regular study habits, provide access to practice materials, and create a stress-free environment.",
			color: "text-[#024CAA]",
			borderColor: "border-[#024CAA]",
		},
	];

	const [timeLeft, setTimeLeft] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});

	useEffect(() => {
		// Set target date to 1 year from now
		const targetDate = new Date();
		targetDate.setFullYear(targetDate.getFullYear() + 1);

		const timer = setInterval(() => {
			const now = new Date().getTime();
			const distance = targetDate.getTime() - now;

			setTimeLeft({
				days: Math.floor(distance / (1000 * 60 * 60 * 24)),
				hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
				minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
				seconds: Math.floor((distance % (1000 * 60)) / 1000),
			});
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	return (
		<section className="relative FAQ-section  w-full   py-12 flex justify-center items-center">
			<div className="w-[90%] relative flex flex-col  py-4 md:py-14">
				<div className="flex event-first-col justify-center items-center flex-col">
					<h2 className="text-4xl text-center md:text-start font-my-heading md:text-5xl lg:text-4xl font-bold mb-4 text-custum-sky tracking-wider">
						Frequently Asked Questions
					</h2>
					<p className="text-lg text-center   my-4 text-black  leading-6 mb-12 max-w-3xl  md:text-xl">
						Most commonly asked questions related to our school
					</p>
				</div>
				<div className="flex justify-center gap-10 flex-col md:flex-row">
					<div>
						<div className="w-full max-w-2xl mx-auto space-y-4 p-4">
							{accordionItems.map((item, index) => (
								<div
									key={index}
									className={`border-2 rounded-2xl overflow-hidden transition-all duration-200 ${
										item.borderColor
									} ${openIndex === index ? "bg-white" : "bg-white"}`}
								>
									<button
										onClick={() => setOpenIndex(openIndex === index ? null : index)}
										className="w-full flex justify-between items-center p-4 text-left"
										aria-expanded={openIndex === index}
									>
										<span className={`text-lg font-medium ${item.color}`}>
											{item.question}
										</span>
										<svg
											className={`w-6 h-6 transform transition-transform duration-200 ${
												openIndex === index ? "rotate-180" : ""
											} ${item.color}`}
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M19 9l-7 7-7-7"
											/>
										</svg>
									</button>
									<div
										className={`overflow-hidden transition-all duration-200 ${
											openIndex === index ? "max-h-40" : "max-h-0"
										}`}
									>
										<div className="p-4 text-gray-600">{item.answer}</div>
									</div>
								</div>
							))}
						</div>
					</div>
					<div>
						<div className="flex   items-center justify-center    ">
							<div className="w-full max-w-md rounded-3xl bg-custom-purple p-8 text-white">
								{/* Header */}
								<h2 className="text-2xl text-center md:text-start font-my-heading md:text-5xl lg:text-4xl font-bold mb-4 text-custum-sky tracking-wider">
									Registration Now
								</h2>
								<p className="mb-8 text-center text-purple-200">
									Fill in the form below with your name, email address
								</p>

								{/* Form */}
								<form className="space-y-4">
									<input
										type="text"
										placeholder="Name*"
										className="w-full rounded-lg bg-white p-3 text-gray-800 placeholder-gray-500"
										required
									/>

									<select className="w-full rounded-lg bg-white p-3 text-gray-800">
										<option value="">Program</option>
										<option value="program1">Program 1</option>
										<option value="program2">Program 2</option>
										<option value="program3">Program 3</option>
									</select>

									<select className="w-full rounded-lg bg-white p-3 text-gray-800">
										<option value="">Time Shift</option>
										<option value="morning">Morning</option>
										<option value="afternoon">Afternoon</option>
										<option value="evening">Evening</option>
									</select>

									<button
										type="submit"
										className="w-full rounded-lg bg-cyan-400 py-3 font-semibold text-white transition-transform hover:scale-105 active:scale-95"
									>
										Enroll Classes
									</button>
								</form>

								{/* Timer Section */}
								<div className="mt-12">
									<p className="mb-6 text-center text-lg font-bold tracking-wide">
										IT&apos;S LIMITED. HURRY UP!
									</p>
									<div className="flex justify-center gap-0 md:gap-4">
										{/* Days */}
										<div className="flex flex-col items-center">
											<div className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-2xl font-bold text-red-500">
												{timeLeft.days}
											</div>
											<span className="mt-2 text-sm">Days</span>
										</div>
										{/* Hours */}
										<div className="flex flex-col items-center">
											<div className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-2xl font-bold text-pink-500">
												{timeLeft.hours}
											</div>
											<span className="mt-2 text-sm">Hours</span>
										</div>
										{/* Minutes */}
										<div className="flex flex-col items-center">
											<div className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-2xl font-bold text-lime-500">
												{timeLeft.minutes}
											</div>
											<span className="mt-2 text-sm">Mins</span>
										</div>
										{/* Seconds */}
										<div className="flex flex-col items-center">
											<div className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-2xl font-bold text-red-500">
												{timeLeft.seconds}
											</div>
											<span className="mt-2 text-sm">Sec</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
