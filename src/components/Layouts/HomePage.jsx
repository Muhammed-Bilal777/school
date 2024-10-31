import React from "react";
import { HeaderCTA } from "../header/HeaderCTA";
import { Header } from "../header/Header";
import { HeroBanner } from "../sections/HeroBanner";
import AboutUsSection from "../sections/AboutUsSection";
import OurClasses from "../sections/OurClasses";
import GallerySection from "../sections/GallerySection";
import { KidsActivitySection } from "../sections/KidsActivitySection";

const HomePage = () => {
	return (
		<div>
			<section>
				<HeaderCTA />
				<Header />
				<HeroBanner />
				<AboutUsSection />
				<OurClasses />
				<GallerySection />
				<KidsActivitySection />
			</section>
		</div>
	);
};

export default HomePage;
