import React, { useRef } from 'react';
import MovieCard from './MovieCard';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const MovieRow = ({movies,title}) => {
    const scrollRef = useRef(null)
    const scroll = (direction) => {
        if (scrollRef.current) {
          const scrollAmount = direction === 'left' ? -300 : 300;
          scrollRef.current.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
          });
    }
  };


    return (
        <div className='mt-12 mb-12 max-w-full   m-auto  flex-col'>
            <div className=''>
                <h3 className='ml-12 mb-6'>{title}</h3>

                <div className='mb-2 relative'>
                    
                    {/* left button */}
                    

                    <button
                      onClick={() => scroll('left')}
                      className="absolute h-full left-0 top-1/2 -translate-y-1/2 z-10  group-hover:block hover:bg-black/50 text-white p-2 "
                    >
                      <FaChevronLeft size={24} />
                    </button>

                    <ul ref={scrollRef} className='flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide '>
                    {movies.map((movie,i) => (
                       <MovieCard key={i}  image={movie.poster_path}  title={movie.orignal_title} data={movie}/>
                    ))}</ul>

                    {/* right button */}
                    <button
                      onClick={() => scroll('right')}
                      className="absolute h-full right-0 top-1/2 -translate-y-1/2 z-10 hover:bg-black/50 group-hover:block  text-white p-2 "
                    >
                      <FaChevronRight size={24} />
                    </button>
            
                </div>
                
            </div>
        </div>
    );
}

export default MovieRow;
