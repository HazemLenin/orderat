/* eslint-disable no-unused-vars */
import React from "react";
const Navbar = () => {
  return (
    <nav className="fixed w-full z-10 bg-red-600 shadow-2xl">
      <div className="max-w-7xl shadow-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex  items-center justify-between h-14">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-3xl text-white">Quicky</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#"
                  className="text-white  px-6 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-white  px-6 py-2 rounded-md text-sm font-medium"
                >
                  Restaurants
                </a>
              </div>
            </div>
          </div>
          <div className=" md:block">
            <div className="mb-4 flex items-center ">
              <div
                style={{ marginTop: 13 }}
                className="absolute inline-block top-0 "
              >
                <svg
                  className=""
                  xmlns="http://www.w3.org/2000/svg"
                  height="2em"
                  width="2em"
                  viewBox="0 0 576 512"
                >
                  <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                </svg>{" "}
              </div>
            </div>
            <button className=" p-12 py-2  text-white ">Sign up</button>
            <button className=" p-1 r text-white ">Sign in</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
