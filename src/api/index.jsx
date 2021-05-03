import axios from 'axios'

//API
// export const API_KEY = process.env.API_KEY
// export const LOCAL_MOVIE_ENDPOINT = process.env.LOCAL_MOVIE_ENDPOINT
// export const MOVIE_ENDPOINT = process.env.MOVIE_ENDPOINT
// export const POSTER_ENDPOINT = process.env.POSTER_ENDPOINT
// export const POSTER_ENDPOINT_BANNER = process.env.POSTER_ENDPOINT_BANNER

export const API_KEY = '5f0f752403679c3bc69a2935a99f32ce'
export const LOCAL_MOVIE_ENDPOINT = 'http://localhost:3010'
export const MOVIE_ENDPOINT = 'https://api.themoviedb.org'
export const POSTER_ENDPOINT = 'https://image.tmdb.org/t/p/w400/'
export const POSTER_ENDPOINT_BANNER = 'https://image.tmdb.org/t/p/original'

/*
 - services
 --- movies.js
 --- search.js
*/

export const getMovieBanner = () => axios.get(`${LOCAL_MOVIE_ENDPOINT}/banner`)

export const getMovieCarousel = () =>
  axios.get(`${LOCAL_MOVIE_ENDPOINT}/carousel`)

export const getMovie = (id) =>
  axios.get(`${MOVIE_ENDPOINT}/3/movie/${id}?api_key=${API_KEY}&language=tr`)
