import React, {useState, useEffect } from 'react';
import MovieCard from '../ui/MovieCard';
import MovieRow from '../ui/MovieRow';

const apiKey = import.meta.env.VITE_API_KEY;
const baseUrl = import.meta.env.VITE_API_BASE_URL;

const Main = ({setBackdrop}) => {
    const [popularMovies , setPopularMovies] = useState([]);
    const [upcomingMovies , setUpcomingMovies] = useState([]);
    const [topratedMovies , setTopRatedMovies] = useState([]);
    

    const fetchPopularMovie = async() => {
        const res = await fetch(`${baseUrl}/movie/popular?api_key=${apiKey}`)
        const data = await res.json();
        setPopularMovies(data.results)
        setBackdrop(data.results[0].backdrop_path)
        console.log(data.results)
        
    }
    const fetchUpcomingMovie = async() => {
        const res = await fetch(`${baseUrl}/movie/upcoming?api_key=${apiKey}`)
        const data = await res.json();
        setUpcomingMovies(data.results)
    }

    const fetchTopRatedMovie = async() => {
        const res = await fetch(`${baseUrl}/movie/top_rated?api_key=${apiKey}`)
        const data = await res.json();
        setTopRatedMovies(data.results)
    }
    
    useEffect(() => {
        fetchPopularMovie();
        fetchUpcomingMovie();
        fetchTopRatedMovie();

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
