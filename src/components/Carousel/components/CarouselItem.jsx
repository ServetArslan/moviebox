import React from 'react'
import { POSTER_ENDPOINT } from '../../../api'
import Poster from '../../Poster'
import { Link } from 'react-router-dom'
import {
  Slide,
  MovieInfo,
  MovieDesc,
  MovieTitle,
  MovieDate
} from './CarouselStyle'

function CarouselItem({ data }) {
  return (
    <Slide>
      <Link to={'/movie/' + data.id}>
        <Poster src={POSTER_ENDPOINT + data.poster_path} alt={data.title} />
        <MovieInfo>
          <MovieTitle>{data.title}</MovieTitle>
          <MovieDesc>{data.overview.substring(0, 150)}</MovieDesc>
          <MovieDate>{data.release_date.substring(0, 4)}</MovieDate>
        </MovieInfo>
      </Link>
    </Slide>
  )
}

export default CarouselItem
