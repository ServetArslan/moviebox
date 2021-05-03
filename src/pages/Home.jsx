import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner/Banner'
import Carousel from '../components/Carousel/Carousel'
import { getMovieBanner, getMovieCarousel } from '../api'
import Loader from '../components/Loader'

function Home() {
  const [banners, setBanners] = useState([])
  const [carousels, setCarousels] = useState([])

  const [isLoadingBanner, setIsloadingBanner] = useState()
  const [isLoadingCarousel, setIsloadingCarousel] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getMovieBanner()
      setBanners(data)
      setIsloadingBanner(true)
    }
    fetchData()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getMovieCarousel()
      setCarousels(data)
      setIsloadingCarousel(true)
    }
    fetchData()
  }, [isLoadingBanner])

  return (
    <>
      {isLoadingBanner ? <Banner banners={banners} /> : <Loader />}
      {isLoadingCarousel ? (
        carousels.map((item) => {
          return <Carousel movies={item.data} title={item.name} key={item.id} />
        })
      ) : (
        <Loader />
      )}
    </>
  )
}

export default Home
