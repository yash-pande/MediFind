import React from 'react';
import { Link } from 'react-router-dom';
import { MdLocalMovies } from "react-icons/md";
const Logo = () => {
    return (
        <div>
            <Link to="/" href="/" className="flex items-center overflow-hidden " >
                <div className=''>
                    <MdLocalMovies size={40} className=' text-[var(--accent-1)]'    />
                </div>
                <p className="text-[var(--accent-1)] font-bold"> FilmFolio.</p>
            </Link>
        </div>
    );
};

export default Logo;