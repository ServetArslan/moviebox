import React, { useEffect, useState } from 'react'
import { getMovie } from '../api'
import styled from 'styled-components'
import Loader from '../components/Loader'
import MovieContent from '../components/Movie/MovieContent'

const MovieDetail = styled.div`
  display: flex;

  @media (min-width: 991px) {
  }
`

function Movie({ match }) {
  const [movie, setmovie] = useState([])
  const [isLoading, setIsloading] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getMovie(match.params.id)
      setmovie(data)
      setIsloading(true)
    }
    fetchData()
  }, [])

  if (!isLoading) {
    return <Loader />
  }

  return (
    <MovieDetail>
      <MovieContent movie={movie} />
    </MovieDetail>
  )
}

export default Movie
