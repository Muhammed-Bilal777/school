import React from "react";
import { HeaderCTA } from "../header/HeaderCTA";
import { Header } from "../header/Header";
import { HeroBanner } from "../sections/HeroBanner";

const HomePage = () => {
	return (
		<div>
			<section>
				<HeaderCTA />
				<Header />
				<HeroBanner />
			</section>
		</div>
	);
};

export default HomePage;
