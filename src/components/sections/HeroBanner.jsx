import React from "react";
import { CarouselSection } from "./CarouselSection";

export const HeroBanner = () => {
	return (
		<section className="w-full hero-banner-section relative">
			<div className="carousel ">
				<CarouselSection className="z-10 " />
			</div>
		</section>
	);
};
