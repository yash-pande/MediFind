import React, { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import {useNavigate } from "react-router-dom";

const SearchBox = () => {
  const [showBar, setShowBar] = useState(false); // use boolean, not string
  const [value , setValue ] = useState("");
  const [results ,setResults] = useState([]);
  const inputRef = useRef();
  const navigate = useNavigate();


  async function search() {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=0e08ada4255dc7573361095a80a0dd00&query=${value}`
    );
    const data = await response.json();
    return data.results;
  }

  useEffect(() => {
    if (!value) {
      setResults([]);
      return;
    }
    const fetchData = async() => { 
      const res =  await search();
      // Remove duplicates by both id and title/name
      const seen = new Set();
      const unique = res.filter(result => {
        const key = `${result.id || ''}_${result.title || result.name || ''}`;
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      });
      setResults(unique.slice(0, 5));
    }
    fetchData();
  }, [value]);

  const handleSumbit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target)
    let searchid = form.get("name").trim().toLowerCase()
    navigate(`/info?name=${encodeURIComponent(searchid)}`)
  }

  return (

    <form  onSubmit={handleSumbit} className="relative flex items-center h-10">
      <input
        className={`transition-all duration-300 ease-in-out focus:outline-none focus:ring-0 bg-white h-full ${
          showBar
            ? "border-2  w-30 md:w-64 border-r-0 px-2 py-1"
            : "w-0 px-0 py-1 border-0"
        }`}
        name="name"
        ref={inputRef}
        onChange={e => {setValue(e.target.value)}}
        placeholder="Find a movie "
        style={{ minWidth: 0 }}
      />
      <button
        
        onClick={(e) =>{
          !showBar ? e.preventDefault() : console.log("hi")
          setValue("")
          setShowBar(!showBar)}
          }

        className={`h-full px-3 bg-white outline-none ${
          showBar ? "border-t-2 border-b-2 border-r-2 border-l-0 " : ""
        }`}
        style={{ transition: "border 0.3s" }}
      >
        <FaSearch className="text-xl" />
      </button>

      {showBar && value && results.length > 0 && (
        <ul className="absolute top-11 w-full flex-col bg-white shadow-lg z-20">
          {results.map((result) => (
            <li className="border-2" key={result.id || result.title || result.name }>
              {result.title || result.name}
            </li>
          ))}
        </ul>
      )}
     
        
    </form>
     
  );
};

export default SearchBox
