import React from "react";
import { HeaderCTA } from "../header/HeaderCTA";
import { Header } from "../header/Header";
import { HeroBanner } from "../sections/HeroBanner";
import AboutUsSection from "../sections/AboutUsSection";
import OurClasses from "../sections/OurClasses";
import GallerySection from "../sections/GallerySection";
import { KidsActivitySection } from "../sections/KidsActivitySection";
import { ChooseUsSection } from "../sections/ChooseUsSection";
import EventSecion from "../sections/EventSecion";
import { FrequentlyAskedW } from "../sections/FAQ";
import { ReviewsSection } from "../sections/ReviewsSection";
import { NewsLatter } from "../sections/NewsLatter";

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
				<ChooseUsSection />
				<EventSecion />
				<FrequentlyAskedW />
				<ReviewsSection />
				<NewsLatter />
			</section>
		</div>
	);
};

export default HomePage;
