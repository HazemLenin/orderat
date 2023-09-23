import React from "react";

function HeroSection() {
	return (
		<div className="relative  bg-no-repeat opacity-80 bg-cover bg-center w-full flex pt-14">
			<div className=" absolute top-0 left-0 w-full h-full bg-red-600/80 flex flex-col gap-10 justify-center items-center text-white">
				<h1 className="text-9xl font-['Kaushan_Script']">Quicky</h1>
				<h3 className="text-4xl">
					Quicky: Fast, Fresh, and Delivered in a Dash!
				</h3>
			</div>
			<video
				className="w-full -mt-40"
				src="/video.mp4"
				autoPlay
				loop
				muted
			></video>
		</div>
	);
}

export default HeroSection;
