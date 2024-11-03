import React from "react";
 
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
import { AwardsSection } from "../sections/AwardsSection";

const HomePage = () => {
	return (
		<section>
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
			<AwardsSection />
		</section>
	);
};

export default HomePage;
