import React from "react";
import Spline from "@splinetool/react-spline/next";
import { handleButtonClick } from "../ExtensionButton.js";

const Page = () => {
  return (
    <>
      <div className="flex mt-10 justify-center items-center">
        <a className="p-8 max-w-[70%] h-[50vh] border border-indigo-300 rounded-2xl transition-all transform hover:shadow-lg flex gap-5 items-center">
          <div className="w-[60%] h-full flex items-center justify-center">
            <img
              src="/bugatti.png"
              className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-500 transform hover:scale-105"
            />
          </div>
          <div className="w-[40%]">
            <h4 className="font-bold text-xl">Bugatti Chiron</h4>
            <p className="mt-2 text-gray-400">
              The Bugatti Chiron is a luxury hypercar with a 1,479 HP quad-turbo W16 engine, reaching 261 mph. It combines speed, aerodynamics, and luxury for an unmatched driving experience.
            </p>
            <div className="mt-9 flex gap-2.5 items-center">
              <h3 className="bg-gray-800 text-white px-4 py-2 rounded-lg text-lg font-semibold shadow-md">
                ₹28,40,00,000
              </h3>
              <button
                type="button"
                onClick={handleButtonClick}
                className="flex justify-center gap-2 items-center shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full text-black before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-white transition-colors duration-500 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 cursor-pointer hover:bg-green-400 rounded-full group"
              >
                Purchase
                <svg
                  className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                  viewBox="0 0 16 19"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                    className="fill-gray-800 group-hover:fill-gray-800"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </a>
      </div>
      <div className="flex mt-10 justify-center items-center">
        <a className="p-8 max-w-[70%] h-[50vh] border border-indigo-300 rounded-2xl transition-all transform hover:shadow-lg flex gap-5 items-center">
          <div className="w-[60%] h-full flex items-center justify-center">
            <img
              src="/lambo.png"
              className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-500 transform hover:scale-105"
            />
          </div>
          <div className="w-[40%]">
            <h4 className="font-bold text-xl">Lamborghini Aventador</h4>
            <p className="mt-2 text-gray-400">
              The Lamborghini Aventador is a high-performance supercar with a 6.5L V12 engine, delivering 769 HP and a top speed of 350 km/h. Known for its iconic scissor doors, aggressive aerodynamics, and lightning-fast 0-100 km/h in 2.8 seconds, it's a masterpiece of speed and luxury.
            </p>
            <div className="mt-9 flex gap-2.5 items-center">
              <h3 className="bg-gray-800 text-white px-4 py-2 rounded-lg text-lg font-semibold shadow-md">
                ₹5,62,00,000
              </h3>
              <button
                type="button"
                onClick={handleButtonClick}
                className="flex justify-center gap-2 items-center shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full text-black before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-white transition-colors duration-500 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 cursor-pointer hover:bg-green-400 rounded-full group"
              >
                Purchase
                <svg
                  className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                  viewBox="0 0 16 19"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                    className="fill-gray-800 group-hover:fill-gray-800"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </a>
      </div>
      <div className="flex mt-10 mb-10 justify-center items-center">
        <a className="p-8 max-w-[70%] h-[50vh] border border-indigo-300 rounded-2xl transition-all transform hover:shadow-lg flex gap-5 items-center">
          <div className="w-[60%] h-full flex items-center justify-center">
            <img
              src="/rolls-royce.png"
              className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-500 transform hover:scale-105"
            />
          </div>
          <div className="w-[40%]">
            <h4 className="font-bold text-xl">Rolls-Royce Phantom</h4>
            <p className="mt-2 text-gray-400">
              The Rolls-Royce Phantom is the pinnacle of luxury, featuring a 6.75L V12 engine, handcrafted interiors, and an ultra-smooth ride. With its iconic starlight headliner, unmatched comfort, and whisper-quiet performance, it's the ultimate symbol of prestige and elegance.
            </p>
            <div className="mt-9 flex gap-2.5 items-center">
              <h3 className="bg-gray-800 text-white px-4 py-2 rounded-lg text-lg font-semibold shadow-md">
                ₹9,50,00,000
              </h3>
              <button
                type="button"
                onClick={handleButtonClick}
                className="flex justify-center gap-2 items-center shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full text-black before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-white transition-colors duration-500 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 cursor-pointer hover:bg-green-400 rounded-full group"
              >
                Purchase
                <svg
                  className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                  viewBox="0 0 16 19"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                    className="fill-gray-800 group-hover:fill-gray-800"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default Page;