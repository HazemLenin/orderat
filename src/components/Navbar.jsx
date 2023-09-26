/* eslint-disable no-unused-vars */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
	return (
		<nav className="z-20 fixed w-full bg-red-700 shadow">
			<div className="max-w-7xl shadow-2xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex  items-center justify-between h-14 ">
					<div className="flex items-center gap-10">
						<div className="flex-shrink-0 font-['Kaushan_Script']">
							<Link to="/" className="text-3xl text-white">
								Quicky
							</Link>
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
					<div className="flex gap-5">
						<button className="text-white">
							{/* <FontAwesomeIcon icon={faSignOutAlt} /> */}
						</button>
						<button className="text-white">
							<Link to="/signup">Sign up</Link>{" "}
						</button>
						<button className="text-white">
							{" "}
							<Link to="/login">Sign in</Link>{" "}
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
