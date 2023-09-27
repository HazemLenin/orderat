/* eslint-disable no-unused-vars */
import React from "react";

function About() {
	return (
		<>
			<div className="">
				<h1 className="text-xl mt-6 text-red-700 font-bold">About Quicky</h1>
				<h2 className="mt-6 mx-6">
					Welcome to <b>Quicky</b> We are dedicated to providing you with
					convenient and delicious meals delivered right to your doorstep. At{" "}
					<b>Quicky</b>, we have carefully designed our website to ensure a
					seamless and user-friendly experience for our customers. Our website
					structure is built to make it easy for you to browse through a wide
					variety of mouthwatering dishes, place orders, and track your
					deliveries. When you first visit our website, you will be greeted with
					a visually appealing and intuitive interface. Our homepage showcases
					featured dishes, special offers, and customer reviews to give you a
					glimpse of the delightful culinary experiences that await you.
				</h2>
				<br />
			</div>
			<h1 className="text-center align-middle text-xl mt-6 text-red-700  font-bold">
				Developers of Quicky
			</h1>
			<img
				src="/developers/Team.jpg"
				className="mx-auto mt-10 w-2/3 border-4 border-red-700"
				alt="Team"
			/>
			<div className="flex flex-col md:flex-row justify-center gap-10 mt-20">
				<div className="flex flex-col justify-center items-center gap-3">
					<img
						src="/developers/Hazem Lenin.jpg"
						className="h-48 w-48 rounded-full border-4 border-gray-700"
						alt="Hazem Lenin"
					/>
					<h2 className="justify-center text-xl text-red-700">Hazem Lenin</h2>
					<small className="text-gray-500">Mentor</small>
				</div>
				<div className="flex flex-col justify-center items-center gap-3">
					<img
						src="/developers/Menna Ahmed.jpg"
						className="h-48 w-48 rounded-full border-4 border-gray-700"
						alt="Menna Ahmed"
					/>
					<h2 className="justify-center text-xl text-red-700">Menna Ahmed</h2>
					<small className="text-gray-500">Mentor</small>
				</div>
			</div>
			<div className="mt-10 gap-10 flex flex-col md:flex-row justify-between px-10">
				<div className="flex flex-col justify-center items-center gap-3">
					<img
						src="/developers/Omar Osama.jpg"
						className="h-48 w-48 rounded-full border-4 border-gray-700"
						alt="Omar Osama"
					/>
					<h2 className="justify-center text-xl text-red-700">Omar Osama</h2>
					<small className="text-gray-500">Participant</small>
				</div>
				<div className="flex flex-col justify-center items-center gap-3">
					<img
						src="/developers/Heba Amr.jpg"
						className="h-48 w-48 rounded-full border-4 border-gray-700"
						alt="Heba Amr"
					/>
					<h2 className="justify-center text-xl text-red-700">Heba Amr</h2>
					<small className="text-gray-500">Participant</small>
				</div>
				<div className="flex flex-col justify-center items-center gap-3">
					<img
						src="/developers/Basmala Osama.jpg"
						className="h-48 w-48 rounded-full border-4 border-gray-700"
						alt="Basmala Osama"
					/>
					<h2 className="justify-center text-xl text-red-700">Basmala Osama</h2>
					<small className="text-gray-500">Participant</small>
				</div>
				<div className="flex flex-col justify-center items-center gap-3">
					<img
						src="/developers/Rawan Elsaadany.jpg"
						className="h-48 w-48 rounded-full border-4 border-gray-700"
						alt="Rawan Elsaadany"
					/>
					<h2 className="justify-center text-xl text-red-700">
						Rawan Elsaadany
					</h2>
					<small className="text-gray-500">Participant</small>
				</div>
				<div className="flex flex-col justify-center items-center gap-3">
					<img
						src="/developers/Tassneem Omar.jpg"
						className="h-48 w-48 rounded-full border-4 border-gray-700"
						alt="Tassneem Omar"
					/>
					<h2 className="justify-center text-xl text-red-700">Tassneem Omar</h2>
					<small className="text-gray-500">Participant</small>
				</div>
			</div>
		</>
	);
}

export default About;
