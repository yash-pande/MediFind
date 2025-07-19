import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  const [showBar, setShowBar] = useState(false); // use boolean, not string

  async function getMovie() {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=0e08ada4255dc7573361095a80a0dd00"
    );
    const data = await response.json();
    console.log(data);
  }

  return (
    <>
      {/* Toggle Button (Always visible) */}
      <button onClick={() => setShowBar(!showBar)} className="text-xl p-4">
        <FaSearch />
      </button>

      {/* Show search bar only if showBar is true */}
      {showBar && (
        <div className="flex w-full justify-center ">
          <input
            placeholder="Search for info"
            className="flex-grow max-w-xl pl-4 border-4 border-r-0"
          />
          <button
            onClick={getMovie}
            className=" text-xl border-l-0 border-4"
          >
            <FaSearch />
          </button>
        </div>
      )}
    </>
  );
};

export default Search;
