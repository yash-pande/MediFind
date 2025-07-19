import React, { useState, useEffect } from 'react';
import MovieCard from '../ui/MovieCard';
import MovieRow from '../ui/MovieRow';
import InfinitScroll from '../ui/Infinity';
import { fetchPopularMovie, fetchTopRatedMovie } from '../../apis/tmdb';

const Main = () => {
    const [popularMovies, setPopularMovies] = useState([]);
    const [movieList, setMovieList] = useState([]);
    const [topratedMovies, setTopRatedMovies] = useState([]);
    const [page, setPage] = useState(1);


    const fetchMovieList = async () => {
        
        const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=0e08ada4255dc7573361095a80a0dd00&page=${page}`);
        const data = await res.json();
        console.log("fetching page no :", page , data.results)
        return data.results;
    };

    const handleScroll = () => {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        if (scrollTop + clientHeight >= scrollHeight - 30) {
            console.log("incrementd")
          setPage(prev => prev + 1);
        }
    }
    //scroll listener
    useEffect( () =>{ 
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll) 
    },[] )



    useEffect(() => {
        const fetch = async () => {
            const newMovies = await fetchMovieList();
            setMovieList(newMovies);
        };
        fetch();
        console.log('MovieList:', movieList)
    }, [page]);


    useEffect(() => {
        const fetchData = async () => {
            setPopularMovies(await fetchPopularMovie());
            setTopRatedMovies(await fetchTopRatedMovie());
        };
        fetchData();
    }, []);

    return (
        <div className=' '>
            <MovieRow title={'Popular Movies'} movies={popularMovies} />
            <MovieRow title={'Top Rated Movies'} movies={topratedMovies} />
            <InfinitScroll title={'Upcoming Movies'} movies={movieList} />
        </div>
    );
};

export default Main;
