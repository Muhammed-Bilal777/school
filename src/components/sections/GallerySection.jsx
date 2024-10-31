import { Grid, Grid2 } from "@mui/material";
import React from "react";

const GallerySection = () => {
	return (
		<section className="relative gallery-section w-full   py-12 flex justify-center items-center">
			<div className="w-[90%] relative flex flex-col">
				<div className="gallry-bg w-full flex justify-center items-center flex-col">
					<h2 className="text-2xl text-center md:text-start font-my-heading md:text-3xl lg:text-4xl font-bold mb-4 text-custum-sky tracking-wider">
						Our Awesome Gallery
					</h2>
					<p className="text-md text-center md:text-start my-4 text-black  leading-6 mb-12 max-w-3xl text-sm md:text-lg">
						"Explore the vibrant moments of our school community captured in our
						gallery, where every image tells a story of creativity, achievement, and
						unforgettable memories."
					</p>

					<div className="w-full">
						<Grid2 container spacing={2}>
							<Grid2 size={{ xs: 12, md: 3 }}>
								<div className="card-1 h-72 w-full rounded-xl">1</div>
							</Grid2>
							<Grid2 size={{ xs: 12, md: 6 }}>
								<div className="card-2 h-72 w-full rounded-xl">1</div>
							</Grid2>
							<Grid2 size={{ xs: 12, md: 3 }}>
								<div className="card-3 h-72 w-60 rounded-xl">1</div>
							</Grid2>

							<Grid2 size={{ xs: 12, md: 5 }}>
								<div className="card-1 h-72 w-full rounded-xl">1</div>
							</Grid2>
							<Grid2 size={{ xs: 12, md: 2 }}>
								<div className="card-2 h-72 w-full rounded-xl">1</div>
							</Grid2>
							<Grid2 size={{ xs: 12, md: 5 }}>
								<div className="card-5 h-72 w-60 rounded-xl">1</div>
							</Grid2>

							<Grid2 size={{ xs: 12, md: 6 }}>
								<div className="card-2 h-72 w-full rounded-xl">1</div>
							</Grid2>
							<Grid2 size={{ xs: 12, md: 6 }}>
								<div className="card-5 h-72 w-60 rounded-xl">1</div>
							</Grid2>
						</Grid2>
					</div>
				</div>
			</div>
		</section>
	);
};

export default GallerySection;
