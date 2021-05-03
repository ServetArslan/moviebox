import React from 'react'
import { POSTER_ENDPOINT_BANNER, POSTER_ENDPOINT } from '../../api'
import Poster from '../Poster'
import {
  MovieCard,
  MovieCol,
  MovieTitle,
  MovieDate,
  MovieDesc,
  MovieColWrapper
} from './MovieStyle'

function MovieContent({ movie }) {
  return (
    <MovieCard
      style={{
        backgroundImage: `url(${POSTER_ENDPOINT_BANNER + movie.backdrop_path})`
      }}
    >
      <MovieColWrapper>
        <MovieCol>
          <Poster
            src={POSTER_ENDPOINT_BANNER + movie.poster_path}
            alt={movie.title}
          />
        </MovieCol>
        <MovieCol>
          <MovieTitle>{movie.title}</MovieTitle>
          <MovieDesc>{movie.overview.substring(0, 150)}</MovieDesc>
          <MovieDate>{movie.release_date.substring(0, 4)}</MovieDate>
        </MovieCol>
      </MovieColWrapper>
    </MovieCard>
  )
}

export default MovieContent
