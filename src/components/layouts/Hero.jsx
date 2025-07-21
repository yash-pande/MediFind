import React, { useEffect, useState } from "react";
import Logo from "../ui/Logo";
import Navbar from "./Navbar";
import SearchBox from "../ui/SearchBox";
import { trendinThisWeek } from "../../apis/tmdb";
import UpcomingCard from "../ui/UpcomingCard";
import Skeleton from "react-loading-skeleton";

const imagebase = import.meta.env.VITE_IMAGE_BASE_URL;

const Hero = () => {
  const [latest, setLatest] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    const fetch = async () => {
      const movies = await trendinThisWeek();
      setLatest(movies);
    };
    fetch();
  }, []);

  // Auto-rotate logic
  useEffect(() => {
    if (!latest.length) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % latest.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [latest]);

  const currentMovie = latest[currentIndex] || {};
  const nextMovies = [];
  for (let i = 1; i <= 3; i++) {
    nextMovies.push(latest[(currentIndex + i) % latest.length]);
  }

  

  return (
    
    <header className="w-full h-[50vh]  md:h-[70vh] ">
      <div className="w-full lg:max-w-7xl flex overflow-hidden lg:rounded-2xl m-auto h-full ">
        {<div
          style={{
            backgroundImage: currentMovie.backdrop_path ? `url(${imagebase}${currentMovie.backdrop_path})` : undefined,
          }}
          
          className="relative flex items-end bg-center bg-cover p-4 inset-0 max-w-[100%] lg:max-w-[70%] w-full h-full"
        >

          
          {/* Poster and Title at bottom left */}
          {currentMovie && currentMovie.title ? (
            <div className="relative  z-10 flex items-end ">
              <div className="max-w-40 max-h-60 justify-centre items-centre flex overflow-hidden">
                { 
                  <img
                    src={`https://image.tmdb.org/t/p/w300${currentMovie.poster_path}`}
                    alt={currentMovie.title}
                    className="bg-zinc-600" 
                  /> 
                }
              </div>
              <h2 className="text-3xl font-bold text-white drop-shadow-lg mb-4 ml-4">
                {currentMovie.title}
              </h2>
            </div>
          ) : (
            <div className="text-white text-xl">No movie data loaded.</div>
          )}
          {/* Overlay */}
          <div className="absolute z-0 inset-0 bg-black/45"></div>
        </div> || <Skeleton />}



        <div className="hidden lg:block max-w-[30%] w-full h-full p-4">
          <h3 className=" ">Up Next </h3>
          <div className="flex-col my-2 h-full">
          {nextMovies.filter(Boolean).length > 0 ? (
            nextMovies.map((movie, idx) =>
              movie && movie.title ? (
                <div key={movie.id || idx} className="mb-4">
                  <UpcomingCard
                    poster={movie.poster_path}
                    title={movie.title}
                    releaseDate={movie.release_date}
                  />
                </div>
              ) : null
            )
          ) : (
            <div className="text-gray-700">No upcoming movies.</div>
          )}
          </div>
          
        </div>


      </div>
    </header>
  );
};

export default Hero;
