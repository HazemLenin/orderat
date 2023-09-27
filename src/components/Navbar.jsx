/* eslint-disable no-unused-vars */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faUserCircle,
	faSignOutAlt,
	faUserPlus,
	faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { initializeApp } from "@firebase/app";
import { getAuth } from "@firebase/auth";
const Navbar = () => {
	const [user, setUser] = useState(null);
	useEffect(() => {
		const firebaseConfig = {
			apiKey: "AIzaSyDacCMh0IFhFZmDs8uTseuLwMcXs7RZDV8",
			authDomain: "urpr-e74ab.firebaseapp.com",
			projectId: "urpr-e74ab",
			storageBucket: "urpr-e74ab.appspot.com",
			messagingSenderId: "683963509393",
			appId: "1:683963509393:web:df5fc02c58dc08f99ead30",
		};

		// Initialize Firebase
		const app = initializeApp(firebaseConfig);

		const unsubscribe = getAuth().onAuthStateChanged((user) => {
			setUser(user);
			console.log(user);
		});

		// Clean up the event listener when the component unmounts
		return () => unsubscribe();
	}, []);

	return (
		<nav className="z-20 fixed w-full bg-red-700 shadow">
			<div className="max-w-7xl shadow-2xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex  items-center justify-between h-14 ">
					<div className="flex items-center gap-10">
						<div className="text-3xl text-white flex-shrink-0 font-['Kaushan_Script']">
							Quicky
						</div>
						<div className="flex">
							<div className="hidden md:block">
								<div className="flex items-baseline space-x-4">
									<Link
										to="/"
										className="text-white rounded-md text-sm font-medium"
									>
										Restaurants
									</Link>
								</div>
							</div>
						</div>
						<div className="hidden md:block">
							<div className="flex items-baseline space-x-4">
								<Link
									to="/about"
									className="text-white rounded-md text-sm font-medium"
								>
									About us
								</Link>
							</div>
						</div>
					</div>
					{user ? (
						<span className="text-white">{user?.email}</span>
					) : (
						<>
							<div className="flex gap-5">
								{/* <button className="text-white">
							<FontAwesomeIcon icon={faSignOutAlt} />
						</button> */}
								<button className="text-white">
									<Link to="/signup">
										<FontAwesomeIcon icon={faUserPlus} className="mr-3" />
										<span className="hidden md:inline">Sign Up</span>
									</Link>
								</button>
								<button className="text-white">
									<Link to="/login">
										<FontAwesomeIcon icon={faRightToBracket} className="mr-3" />
										<span className="hidden md:inline">Sign In</span>
									</Link>
								</button>
							</div>
						</>
					)}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
