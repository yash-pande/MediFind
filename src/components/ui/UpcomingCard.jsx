import React from "react";

const UpcomingCard = ({ poster, title, releaseDate }) => {
  return (
    <div className="overflow-hidden flex items-center bg-white rounded-lg shadow-md overflow-hidden transition-transform  cursor-pointer max-h-40">
      <div className="max-h-40 w-[30%]">
      {poster && (
        <img
          src={`https://image.tmdb.org/t/p/w300${poster}`}
          alt={title}
          className="h-20  w-14 object-cover rounded-l-lg"
        />
      )}
      </div>
      <div className=" flex-col overflow-wrap  justify-center px-3 py-2 flex-1">
        <p className="font-semibold ">{title}</p>
        <small>{releaseDate}</small>
      </div>
    </div>
  );
};

export default UpcomingCard; 