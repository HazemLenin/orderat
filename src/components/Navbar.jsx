/* eslint-disable no-unused-vars */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
	return (
		<nav className="z-20 fixed w-full bg-red-600 shadow">
			<div className="max-w-7xl shadow-2xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex  items-center justify-between h-14 ">
					<div className="flex items-center gap-10">
						<div className="flex-shrink-0 font-['Kaushan_Script']">
							<span className="text-3xl text-white">Quicky</span>
						</div>
						{/* <div className="hidden md:block">
								<div className="flex items-baseline space-x-4">
									<Link
										to="/"
										className="text-white rounded-md text-sm font-medium"
									>
										Restaurants
									</Link>
								</div>
							</div> */}
						<Link to="/" className="text-white">
							Restaurants
						</Link>
					</div>
					{/* <div className="flex gap-5">
						<button className="text-white">Sign up</button>
						<button className="text-white">Sign in</button>
					</div> */}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
