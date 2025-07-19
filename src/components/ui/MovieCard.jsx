import React, { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
import 'react-loading-skeleton/dist/skeleton.css';

const MovieCard = ({ title, image, data }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imagebase = import.meta.env.VITE_IMAGE_BASE_URL;

  return (
    <Link
      to={`/info/${data.id}`}
      className="min-w-30 lg:min-w-50 w-full relative group hover:scale-110 cursor-pointer"
    >
      {!isLoaded && (
        <Skeleton height={300} borderRadius={10} className="w-full h-full" />
      )}

      <img
        src={imagebase + image}
        alt={title}
        className={`w-full h-full object-cover transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0 absolute top-0 left-0'}`}
        onLoad={() => setIsLoaded(true)}
        onError={() => setIsLoaded(true)} // stop showing skeleton even if image fails
        loading="lazy"
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/60 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
    </Link>
  );
};

export default MovieCard;
