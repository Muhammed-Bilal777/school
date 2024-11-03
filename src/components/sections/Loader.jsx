import React from "react";

const Loader = () => {
	return (
		<div className="min-h-screen bg-white flex items-center justify-center">
			<div className="relative w-24 h-24 animate-spin">
				{/* Star shape SVG */}
				<svg
					className="w-full h-full"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
						stroke="url(#star-gradient)"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>

				{/* Animated gradient overlay */}
				<div className="absolute inset-0 rounded-full animate-pulse bg-gradient-to-br from-purple-500/20 to-transparent" />
			</div>

			{/* Gradient definition */}
			<svg width="0" height="0">
				<defs>
					<linearGradient id="star-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
						<stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.2">
							<animate
								attributeName="stop-opacity"
								values="0.2;0.8;0.2"
								dur="2s"
								repeatCount="indefinite"
							/>
						</stop>
						<stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.8">
							<animate
								attributeName="stop-opacity"
								values="0.8;0.2;0.8"
								dur="2s"
								repeatCount="indefinite"
							/>
						</stop>
					</linearGradient>
				</defs>
			</svg>
		</div>
	);
};

export default Loader;
