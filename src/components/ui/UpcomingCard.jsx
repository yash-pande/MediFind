import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const UpcomingCard = ({ poster, title, releaseDate }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="w-full flex cursor-pointer min-h-40">
      <div className="w-[30%] relative">
        {/* Show skeleton while image is loading */}
        {loading && (
          <Skeleton className="w-full h-full absolute top-0 left-0 rounded-l-lg" />
        )}

        {/* Image: hidden until loaded */}
        <img
          src={`https://image.tmdb.org/t/p/w300${poster}`}
          alt={title}
          className={`object-cover rounded-l-lg w-full h-full transition-opacity duration-300 ${loading ? 'opacity-0' : 'opacity-100'}`}
          onLoad={() => setLoading(false)}
          loading="lazy"
        />
      </div>

      <div className="flex-col justify-center px-3 py-2 flex-1">
        <p className="font-semibold">{title}</p>
        <small>{releaseDate}</small>
      </div>
    </div>
  );
};

export default UpcomingCard;
