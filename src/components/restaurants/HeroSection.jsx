import React from "react";

function HeroSection() {
	return (
		<div className="relative bg-no-repeat opacity-80 bg-cover bg-center w-full flex md:h-auto">
			<video className="w-full" src="/video.mp4" autoPlay loop muted></video>
			<div className=" absolute top-0 left-0 w-full h-full bg-red-600/80 flex flex-col gap-10 justify-center items-center text-white">
				<h1 className="text-7xl md:text-9xl font-['Kaushan_Script']">Quicky</h1>
				<h2 className="text md:text-4xl text-center">
					Fast, Fresh, and Delivered in a Dash!
				</h2>
			</div>
		</div>
	);
}

export default HeroSection;
