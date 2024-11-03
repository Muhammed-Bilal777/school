import React from "react";
import { Link } from "react-router-dom";

const HeroBannerInternalPages = ({ link }) => {
	return (
		<div className="w-full h-80 hero-banner-internal-pages flex justify-center items-center">
			<div className=" mt-40 bg-custom-purple rounded-3xl p-4">
				<p className="text-white text-xl md:text-2xl px-4">
					<Link to="/" className="px-4 text-custum-sky">
						Home {"⬅️"}{" "}
					</Link>
					<Link to={`/${link}`}>{link}</Link>
				</p>
			</div>
		</div>
	);
};

export default HeroBannerInternalPages;
