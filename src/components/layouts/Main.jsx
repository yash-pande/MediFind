import React, {useState, useEffect } from 'react';
import MovieCard from '../ui/MovieCard';
import MovieRow from '../ui/MovieRow';
import { fetchPopularMovie , fetchUpcomingMovie , fetchTopRatedMovie } from '../../apis/tmdb';

const Main = () => {
    const [popularMovies , setPopularMovies] = useState([]);
    const [upcomingMovies , setUpcomingMovies] = useState([]);
    const [topratedMovies , setTopRatedMovies] = useState([]);
    

   
    
    useEffect(() => {

        const fetchData = async() => {
            setPopularMovies(await fetchPopularMovie())
            setUpcomingMovies(await fetchUpcomingMovie())
            setTopRatedMovies(await fetchTopRatedMovie())
        }
        fetchData();       
    },[])


    return (
        <div className=' '>
           <MovieRow title={'Popular Movies'} movies={popularMovies}/>
           <MovieRow title={'Top Rated Movies'} movies={topratedMovies}/>
           <MovieRow title={'Upcoming Movies'} movies={upcomingMovies}/>
        </div>
    );
}
export default Main;
