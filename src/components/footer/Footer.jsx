import React from "react";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BsThreadsFill } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
export const Footer = () => {
	return (
		<footer className="footer-section py-16">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{/* Description Column */}
					<div className="space-y-4">
						<h2 className="text-custom-purple font-bold text-2xl my-font tracking-wider th leading-10">
							Join Us!
						</h2>
						<p className="text-md my-4 text-black  leading-6">
							Explore our programs, meet our dedicated staff, and discover how{" "}
							<strong className="font-bold my-font">Shanti Sagar Kerebilchi</strong>{" "}
							can be the perfect place for your child's education. For more
							information, feel free to contact us.
						</p>
					</div>

					{/* Links Column */}
					<div className="">
						<h2 className="text-custom-purple text-xl font-bold my-font mb-6 relative">
							LINKS
							<span className="absolute bottom-0 left-0 w-12 h-1 bg-[#00bcd4] -mb-2"></span>
						</h2>
						<nav className="space-y-3">
							<Link
								to="#"
								className="block text-gray-700 hover:text-[#00bcd4] transition-colors"
							>
								Home
							</Link>
							<Link
								to="#"
								className="block text-gray-700 hover:text-[#00bcd4] transition-colors"
							>
								About Us
							</Link>
							<Link
								to="#"
								className="block text-gray-700 hover:text-[#00bcd4] transition-colors"
							>
								Pages
							</Link>
							<Link
								to="#"
								className="block text-gray-700 hover:text-[#00bcd4] transition-colors"
							>
								Contact Us
							</Link>
							<button className="mt-4 bg-custum-red hover:bg-custom-purple text-white px-6 py-2 rounded hover:bg-[#e91e63]/90 transition-colors">
								Buy now
							</button>
						</nav>
					</div>

					{/* Get in Touch Column */}
					<div>
						<h2 className="   text-custom-purple text-xl font-bold my-font mb-6 relative">
							GET IN TOUCH
							<span className="absolute bottom-0 left-0 w-12 h-1 bg-[#00bcd4] -mb-2"></span>
						</h2>
						<div className="space-y-4">
							<div className="flex items-start space-x-3">
								<div className="text-custum-red mt-1">
									<FaLocationDot size={20} />
								</div>
								<Link className="text-gray-700">Kerebilchi</Link>
							</div>
							<div className="flex items-center space-x-3">
								<div className="text-custum-red">
									<MdMarkEmailRead size={20} />
								</div>
								<Link
									to="mailto:info@gmail.com"
									className="text-gray-700 hover:text-[#00bcd4] transition-colors"
								>
									shantisagarkerebilchi@gmail.com
								</Link>
							</div>
							<div className="flex items-center space-x-3">
								<div className="text-custum-red">
									<FaSquarePhone size={20} />
								</div>
								<Link
									to="tel:+123456789"
									className="text-gray-700 hover:text-[#00bcd4] transition-colors"
								>
									+91 812345678
								</Link>
							</div>
							<div className="flex space-x-4 mt-6">
								<Link
									to="#"
									className="bg-[#2030de] hover:scale-125 transform transition-all p-2 rounded-full text-white hover:opacity-90  "
								>
									<FaFacebookSquare size={20} />
								</Link>
								<Link
									to="#"
									className="bg-[#23bed2] hover:scale-125 transform transition-all   p-2 rounded-full text-white hover:opacity-90  "
								>
									<FaSquareXTwitter size={20} />
								</Link>
								<Link
									to="#"
									className="bg-custum-red p-2 hover:scale-125 transform transition-all rounded-full text-white hover:opacity-90  "
								>
									<GrInstagram size={20} />
								</Link>
								<Link
									to="#"
									className="bg-[#e91e63] p-2 hover:scale-125 transform transition-all rounded-full text-white hover:opacity-90  "
								>
									<BsThreadsFill size={20} />
								</Link>
							</div>
						</div>
					</div>

					{/* School Timing Column */}
					<div className="bg-custum-red text-white p-6 rounded-lg">
						<h2 className="text-xl font-bold my-font mb-4">SCHOOL TIMING</h2>
						<p className="text-sm mb-4">Click edit button to change this text.</p>
						<div className="space-y-3">
							{["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((day) => (
								<div key={day} className="flex justify-between items-center">
									<span className="my-font">{day}</span>
									<span className="my-font">10Am - 5PM</span>
								</div>
							))}
							<div className="flex justify-between items-center">
								<span className="my-font">Saturday</span>
								<span className="my-font">8Am - 1PM</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};
