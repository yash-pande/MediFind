import React from 'react';

const MovieCard = ({ title, image  }) => {

    const imagebase = import.meta.env.VITE_IMAGE_BASE_URL 
    return (
        <div className=" min-w-30 lg:min-w-50    relative group  hover:scale-110 cursor-pointer">
            <img src={imagebase + image} alt={title} className="w-full h-full object-cover" />
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black/60 flex justify-center items-center  opacity-0 group-hover:opacity-100 transition-opacity z-10">
                
            </div>
        </div>
    );
};

export default MovieCard;
