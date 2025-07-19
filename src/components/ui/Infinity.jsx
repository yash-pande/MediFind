import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Infinity = ({movies,title}) => {
    const [movieList , setMovieList ] = useState([]);
    
   useEffect(() => {
        setMovieList([...movieList , ...movies])
    }, [movies]);


    return (
        <div className='mt-12 mb-12 w-full  m-auto flex-col'>
            
                <h3 className='ml-12 mb-6'>{title}</h3>
                
                <div className='w-11/12 m-auto'>
                <ul  className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-9  gap-4'>
                    {movieList.map((movie,i) => (
                        <div key={i} className="50">
                            <MovieCard image={movie.poster_path} title={movie.orignal_title} data={movie}/>
                        </div>
                    ))}
                </ul>
                </div>
        </div>
    );
}

export default Infinity;
