/* eslint-disable no-unused-vars */
import React from "react";

function About() {
  return (
    <>
      <div className="">
<h1 className="text-xl mt-6 text-red-700 animate-pulse " >About Quicky</h1>
        <h2 className="mt-6 mx-6">
          Welcome to <b>Quicky</b> We are dedicated to providing
          you with convenient and delicious meals delivered right to your
          doorstep. At <b>Quicky</b>, we have carefully designed our website to
          ensure a seamless and user-friendly experience for our customers. Our
          website structure is built to make it easy for you to browse through a
          wide variety of mouthwatering dishes, place orders, and track your
          deliveries. When you first visit our website, you will be greeted with
          a visually appealing and intuitive interface. Our homepage showcases
          featured dishes, special offers, and customer reviews to give you a
          glimpse of the delightful culinary experiences that await you.
        </h2>
        <br />
      </div>
      <h1 className="text-center align-middle text-xl mt-6 text-red-700 animate-pulse ">Developers of Quicky </h1>
      <div className="flex gap-10 mt-20">
        <div>
          <img className="h-48 w-48 rounded-full" src="/omar.jpg" alt="" />
          <h2 className="text-center justify-center text-xl mt-6 text-red-700">Omar</h2>
        </div>
        <div>
          <img src="/omar.jpg" alt="" className="h-48 w-48 rounded-full" />
          <h2 className="text-center justify-center text-xl mt-6 text-red-700">Omar</h2>
        </div>
        <div>
          <img src="/omar.jpg" alt="" className="h-48 w-48 rounded-full" />
          <h2 className="text-center justify-center text-xl mt-6 text-red-700">Omar</h2>
        </div>
        <div>
          <img src="/omar.jpg" alt="" className="h-48 w-48 rounded-full" />
          <h2 className="text-center justify-center text-xl mt-6 text-red-700">Omar</h2>
        </div>
        <div>
          <img src="/omar.jpg" alt="" className="h-48 w-48 rounded-full" />
          <h2 className="text-center justify-center text-xl mt-6 text-red-700">Omar</h2>
        </div>
        <div>
          {" "}
          <img src="/omar.jpg" alt="" className="h-48 w-48 rounded-full" />
          <h2 className="text-center justify-center text-xl mt-6 text-red-700">Omar</h2>
        </div>
      </div>
    </>
  );
}

export default About;
