import React from "react";

const MainContent = () => {
  return (
    <section className="w-full flex justify-center">
      <div className="relative w-full max-w-xl md:max-w-2xl lg:max-w-3xl py-6 sm:py-8 md:py-10">
        <div className="absolute inset-0 -z-10 backdrop-blur-xl lg:backdrop-blur-2xl bg-white/40 md:bg-white/50 lg:bg-white/60 border border-white/40 rounded-3xl" />

        <div className="px-6 sm:px-8 md:px-10 lg:px-12 py-8 sm:py-10 md:py-12 text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-gray-900 antialiased drop-shadow-md">
            <span className="block">Build a better home,</span>
            <span className="block mt-2 md:mt-3 lg:mt-4 text-emerald-600 drop-shadow-lg">
              naturally
            </span>
          </h1>

          <p className="mt-4 sm:mt-6 md:mt-8 text-sm sm:text-base md:text-lg lg:text-xl text-gray-800 leading-relaxed max-w-prose antialiased">
            GreenNest brings sustainable living within reach. We source the
            finest eco-friendly products so you can live well without
            compromise.
          </p>

          <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
              Explore
            </button>
            <button className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
              Learn
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
