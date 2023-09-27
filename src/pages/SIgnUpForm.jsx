import React, { useState } from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";

function SignUpForm() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");

	const handleSignUp = () => {
		const userData = { username, password, email };
		localStorage.setItem("userData", JSON.stringify(userData));
		setUsername("");
		setPassword("");
		setEmail("");
		alert("Sign up successful!");
	};

	return (
		<div className=" justify-center ">
			<form className="pb-10 mt-10 h-full flex max-w-md flex-col gap-4 align-middle mx-auto text-center border-2 border-gray-300 shadow-xl ">
				<h2 className=" mt-10 text-2xl text-red-700">Sign Up</h2>
				<div>
					<Label htmlFor="username" value="Username" />
					<input
						className="border-2 h-8 rounded-lg w-full"
						id="username"
						placeholder="   Put your User Name here"
						required
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						type="name"
					/>
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
					/>
				</div>
				<Label htmlFor="phone" value="Phone Number" />
				<input
					className="border-2 h-8 rounded-lg w-full"
					id="phone"
					placeholder="   Put your phone number here"
					required
					value={phone}
					onChange={(e) => setPhone(e.target.value)}
					type="number"
				/>
				<div className="flex items-center gap-2">
					<Checkbox id="remember" />
					<Label htmlFor="remember">Remember me</Label>
				</div>
				<Button
					onClick={() => handleSignUp()}
					className="text-white border-red-700 bg-red-700"
					type="submit"
				>
					Submit
				</Button>
			</form>
		</div>
	);
}

export default SignUpForm;
