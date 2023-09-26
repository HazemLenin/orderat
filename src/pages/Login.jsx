import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";

export default function DefaultForm() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = () => {
		const storedData = localStorage.getItem("userData");
		if (storedData) {
			const userData = JSON.parse(storedData);
			if (email === userData.email && password === userData.password) {
				alert("Login successful!");
			} else {
				alert("Invalid username or password");
			}
		} else {
			alert("User not found");
		}
		setEmail("");
		setPassword("");
	};

	return (
		<div className=" justify-center ">
			<form className="pb-10 mt-10 h-full flex max-w-md flex-col gap-4 align-middle mx-auto text-center border-2 border-gray-300 shadow-xl ">
				<h2 className=" mt-10 text-2xl text-red-700">Sign In</h2>
				<div>
					<div className="mt-2 block">
						<Label htmlFor="email1" value="Your email" />
					</div>

					<input
						className="border-2 h-8 rounded-lg w-full"
						id="email1"
						placeholder="   Put your email here"
						required
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						type="email"
						theme={{ dark: false }}
					/>
				</div>
				<div>
					<div className="mt-2 ">
						<Label htmlFor="password1" value="Your password" />
					</div>
					<input
						className="border-2 h-8 rounded-lg w-full"
						id="password1"
						required
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						placeholder="  Password"
						type="password"
						theme={{ dark: false }}
					/>
				</div>
				<div className="flex items-center gap-2">
					<Checkbox id="remember" />
					<Label htmlFor="remember">Remember me</Label>
				</div>
				<Button
					onClick={() => handleLogin()}
					className="text-white border-red-700 bg-red-700"
					type="submit"
				>
					Submit
				</Button>
			</form>
		</div>
	);
}
