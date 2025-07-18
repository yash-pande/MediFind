import React from 'react';

const MovieCard = ({ title, image  }) => {

    const imagebase = import.meta.env.VITE_IMAGE_BASE_URL 
    return (
        <div className=" min-w-40">
            <img   src={ imagebase + image } alt={title} className="w-full h-full object-cover" />
        </div>
    );
};

export default MovieCard;
