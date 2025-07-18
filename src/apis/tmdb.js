const apiKey = import.meta.env.VITE_API_KEY;
const baseUrl = import.meta.env.VITE_API_BASE_URL;




export const fetchPopularMovie = async() => {
        const res = await fetch(`${baseUrl}/movie/popular?api_key=${apiKey}`)
        const data = await res.json();
        return data.results ;
}
export const fetchUpcomingMovie = async() => {
    const res = await fetch(`${baseUrl}/movie/upcoming?api_key=${apiKey}`)
    const data = await res.json();
    return data.results;
}
export const fetchTopRatedMovie = async() => {
    const res = await fetch(`${baseUrl}/movie/top_rated?api_key=${apiKey}`)
    const data = await res.json();
    return data.results
}

export const fetchLatestMovies = async() =>{
    const res = await fetch(`${baseUrl}/movie/now_playing?api_key=${apiKey}`)
    const data = await res.json();
    return data.results
  }
export const trendinThisWeek = async() =>{
    const res = await fetch(`${baseUrl}/trending/movie/week?api_key=${apiKey}`)
    const data = await res.json();
    return data.results
  }

