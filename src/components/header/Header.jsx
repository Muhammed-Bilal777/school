import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
export const Header = () => {
	const [show, setShow] = useState(false);
	const [display, setDisplay] = useState("hidden");
	const [slides, setSlide] = useState("slideOut");
	const handleClick = () => {
		setSlide(slides === "slideIn" ? "slideOut" : "slideIn");
		setDisplay("flex");
		setShow(!show);
	};
	// sm:w-[190px] sm:h-[110px]
	return (
		<section className="w-full h-[70px] flex justify-center items-center">
			<nav className="header z-10 w-4/5 flex justify-around items-center py-4 ">
				<div className="order-2 md:order-1">
					<img
						src="src\assets\Logo.png"
						alt="Logo"
						className="h-[110px] mt-[67px] w-[190px] bg"
					/>
				</div>
				<div className="order-3 md:order-2">
					{show ? (
						<span className="flex md:hidden">
							<IoClose onClick={handleClick} size={30} color="red" />
						</span>
					) : (
						<span className="flex md:hidden">
							<RxHamburgerMenu onClick={handleClick} size={30} color="red" />
						</span>
					)}
					<ul className={` space-x-4 hidden  md:flex`}>
						<li>
							<Link
								to="/"
								className="text-black hover:text-custum-sky active:text-custum-sky px-3 py-2 rounded"
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								to="/about"
								className="text-black hover:text-custum-sky px-3 py-2 rounded"
							>
								About Us
							</Link>
						</li>
						<li>
							<Link
								to="/services"
								className="text-black hover:text-custum-sky px-3 py-2 rounded"
							>
								Classes
							</Link>
						</li>
						<li>
							<Link
								to="/gallery"
								className="text-black hover:text-custum-sky px-3 py-2 rounded"
							>
								Gallery
							</Link>
						</li>
						<li>
							<Link
								to="/videos"
								className="text-black hover:text-custum-sky px-3 py-2 rounded"
							>
								Videos
							</Link>
						</li>
						<li>
							<Link
								to="/contact"
								className="text-black hover:text-custum-sky px-3 py-2 rounded"
							>
								Contact Us
							</Link>
						</li>
					</ul>
					{show && (
						<ul
							className={`burger mobile-menu ${slides} my-4 space-x-4 flex absolute flex-col right-0 w-full justify-center items-center top-33 bg-custom-purple transform  transition `}
						>
							<li className=" w-[250px]   text-center py-2   my-2 bg-white hover:bg-custum-sky hover:text-custom-purple rounded-md ">
								<Link
									to="/"
									className="text-black hover:text-custom-purple   px-3 py-2"
								>
									Home
								</Link>
							</li>
							<li className="w-[250px]    text-center py-2 my-2   bg-white hover:bg-custum-sky hover:text-custom-purple rounded-md ">
								<Link
									to="/about"
									className="text-black hover:text-custom-purple   px-3 py-2 "
								>
									About Us
								</Link>
							</li>
							<li className="w-[250px] text-center py-2 my-2 bg-white hover:bg-custum-sky hover:text-custom-purple rounded-md ">
								<Link
									to="/services"
									className="text-black   px-3 py-2 rounded hover:text-custom-purple"
								>
									Classes
								</Link>
							</li>
							<li className="w-[250px] text-center py-2 my-2 bg-white hover:bg-custum-sky hover:text-custom-purple rounded-md ">
								<Link
									to="/gallery"
									className="text-black h hover:text-custom-purple px-3 py-2 rounded"
								>
									Gallery
								</Link>
							</li>
							<li className="w-[250px] text-center py-2 my-2 bg-white hover:bg-custum-sky hover:text-custom-purple rounded-md ">
								<Link
									to="/videos"
									className="text-black hover:text-custum-sky px-3 py-2 rounded"
								>
									Videos
								</Link>
							</li>
							<li className="w-[250px] text-center py-2 my-2 bg-white hover:bg-custum-sky hover:text-custom-purple rounded-md ">
								<Link
									to="/contact"
									className="text-black  hover:text-custom-purple px-3 py-2 rounded"
								>
									Contact Us
								</Link>
							</li>
						</ul>
					)}
				</div>
				<div className="order-1 md:order-2">
					<button className="rounded-m bg-custom-purple text-white  py-2 px-4 m-0 border border-custom-purple rounded-sm ">
						Contact
					</button>
				</div>
			</nav>
		</section>
	);
};
