import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Searchbar() {
  const location = useLocation();

  // Check if the current route is the front page
  const isFrontPage = location.pathname === "/";

  // Render the Navbar only if it's not the front page
  if (isFrontPage) {
    return null;
  }
  return (
    <div className="search -mt-6 mb-4">
      <form class="border-4 border-black mt-10 mx-auto max-w-xs md:max-w-xl sm:max-w-md py-2 px-6 rounded-full bg-gray-50 flex focus-within:border-gray-300">
        <input
          type="text"
          placeholder="Search anything"
          class="bg-transparent w-full focus:outline-none pr-4 font-semibold border-0 focus:ring-0 px-0 py-0"
          name="topic"
        />
        <button class="flex flex-row items-center justify-center min-w-[130px] px-4 rounded-full font-small  border disabled:cursor-not-allowed disabled:opacity-50 transition ease-in-out duration-150 text-base bg-black text-lime-100 font-medium tracking-wide border-transparent py-1.5 h-[38px] -mr-3 hover:bg-lime-100 hover:text-black hover:font-extrabold hover:duration-300">
          Search
        </button>
      </form>
    </div>
  );
}

export default Searchbar;
