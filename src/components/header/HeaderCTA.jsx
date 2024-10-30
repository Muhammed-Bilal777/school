import React from "react";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
export const HeaderCTA = () => {
	return (
		<section className="w-full bg-black h-[60px] flex justify-around items-center m-0 ">
			<nav className="flex justify-around">
				<ul className="flex justify-center items-center gap-4">
					<li className="cta-icons flex justify-center items-center gap-1 ">
						<span>
							<FaLocationDot color="#18C0CB" size={18} />
						</span>
						<Link className="hidden md:flex text-white font-bold text-sm tracking-widest none ">
							Kerebilchi
						</Link>
					</li>
					<li className="cta-icons flex justify-center items-center gap-1 ">
						<span>
							<MdMarkEmailRead color="#18C0CB" size={18} />
						</span>
						<Link className="hidden md:flex text-white font-bold text-sm tracking-widest">
							shantisagarschool@gmail.com
						</Link>
					</li>
					<li className="cta-icons flex justify-center items-center gap-1">
						<span>
							<FaSquarePhone color="#18C0CB" size={18} />
						</span>
						<Link className="hidden md:flex text-white font-bold text-sm text-spa tracking-widest">
							+91 812345678
						</Link>
					</li>
				</ul>
			</nav>
			<div>
				<ul className="flex justify-center items-center gap-4">
					<li className="social-icons w-8 h-8 bg-slate-50 rounded-full">
						<Link className="social-circle flex justify-center items-center w-8 h-8 ">
							<AiFillInstagram
								color="red"
								size={18}
								className="transform hover:scale-150 transition-transform duration-300"
							/>
						</Link>
					</li>
					<li className="social-icons social-icons w-8 h-8 bg-slate-50 rounded-full">
						<Link className="social-circle flex justify-center items-center w-8 h-8 ">
							<FaFacebookSquare
								color="#490D59"
								size={18}
								className="transform hover:scale-150 transition-transform duration-300"
							/>
						</Link>
					</li>
					<li className="social-icons social-icons w-8 h-8 bg-slate-50 rounded-full">
						<Link className="social-circle flex justify-center items-center w-8 h-8 ">
							<FaXTwitter
								color="#05dbe9"
								size={18}
								className="transform hover:scale-150 transition-transform duration-300"
							/>
						</Link>
					</li>
				</ul>
			</div>
		</section>
	);
};
