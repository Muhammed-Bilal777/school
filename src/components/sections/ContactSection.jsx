import React, { useState } from "react";

export const ContactSection = () => {
	const [formData, setFormData] = useState({
		fullName: "",
		email: "",
		message: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission here
		console.log(formData);
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	return (
		<section className="relative contact-section  w-full   py-12 flex justify-center items-center">
			<div className="w-[90%] md:w-[50%] relative flex flex-col  ">
				<div className="  bg-[#f5f5f5] p-4">
					<div className="max-w-5xl mx-auto relative">
						{/* Wooden frame container */}
						<div className="bg-[#8B4513] p-4 rounded-lg">
							<div className="bg-[#CD853F] p-2 rounded">
								{/* White paper background with pins */}
								<div className="bg-white rounded-lg p-8 relative">
									{/* Decorative pins at the top */}
									<div className="absolute top-0 left-0 right-0 flex justify-between px-2">
										{[...Array(20)].map((_, i) => (
											<div key={i} className="w-3 h-3 bg-[#CD5C5C] rounded-full -mt-1.5" />
										))}
									</div>

									{/* Form content */}
									<div className="mt-6">
										<h2 className="text-custum-sky font-bold text-center text-3xl font-my-heading tracking-wider th leading-10">
											Contact Us
										</h2>
										<p className="text-lg text-center   my-4 text-black  leading-6 mb-12 max-w-3xl  md:text-xl">
											"We'd love to hear from you! Please fill out the form below with your
											questions or feedback, and we'll get back to you as soon as
											possible."
										</p>

										<form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
											<div>
												<input
													type="text"
													placeholder="Full Name*"
													required
													className="w-full px-4 py-2 placeholder:text-black border border-custom-purple rounded-md focus:outline-red-700 focus:ring-2 focus:ring-[#00bcd4] focus:border-transparent"
													value={formData.fullName}
													onChange={(e) =>
														setFormData({ ...formData, fullName: e.target.value })
													}
												/>
											</div>

											<div>
												<input
													type="email"
													placeholder="Your Email Address*"
													required
													className="w-full px-4 py-2  placeholder:text-black border border-custom-purple  rounded-md focus:outline-none focus:ring-2 focus:ring-[#00bcd4] focus:border-transparent"
													value={formData.email}
													onChange={(e) =>
														setFormData({ ...formData, email: e.target.value })
													}
												/>
											</div>

											<div>
												<textarea
													placeholder="Your Message*"
													required
													rows={6}
													className="w-full px-4 py-2 placeholder:text-black border border-custom-purple  rounded-md focus:outline-none focus:ring-2 focus:ring-[#00bcd4] focus:border-transparent resize-none"
													value={formData.message}
													onChange={(e) =>
														setFormData({ ...formData, message: e.target.value })
													}
												/>
											</div>

											<div className="flex justify-center">
												<button
													type="submit"
													className="bg-[#ff4500] hover:bg-custom-purple text-white font-medium px-8 py-2 rounded-md transition duration-300 ease-in-out"
												>
													Contact Us
												</button>
											</div>
										</form>
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
