import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchByMovieId } from '../apis/tmdb';

const Info = () => {
    const id  = useParams();
    const [data , setData] = useState(null);
    
    useEffect( () => {
        const fetchData = async() => {
         setData( await fetchByMovieId(id.id))
        }
        fetchData()
    },[]) 

console.log(data)
    return (
        <div>
            {data}
        </div>
    );
}

export default Info;
