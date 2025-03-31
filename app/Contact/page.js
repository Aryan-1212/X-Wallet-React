import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">About Us</h1>
        <p className="text-gray-600 text-center mb-6">
          We are a passionate team dedicated to building innovative solutions. Our goal is to create
          a seamless and secure browser extension wallet that integrates with multiple blockchain networks.
        </p>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Meet the Team</h2>
        <div className="space-y-4">
          <div className="bg-gray-200 p-4 rounded-lg">
            <p className="text-lg font-bold text-black">Aryan Parvani</p>
            <p className="text-gray-700">Lead Developer and Backend Developer</p>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg">
            <p className="text-lg font-bold text-black">Krish Shah</p>
            <p className="text-gray-700">Web Developer</p>
          </div>
          <div className="bg-gray-200 p-4   rounded-lg">
            <p className="text-lg font-bold text-black">Tirth Vyas</p>
            <p className="text-gray-700">Web3 expert</p>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg">
            <p className="text-lg font-bold text-black">Arjun Jani</p>
            <p className="text-gray-700">Web3 Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;