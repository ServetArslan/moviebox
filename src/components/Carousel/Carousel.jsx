import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination, Navigation } from 'swiper/core'
import CarouselItem from './components/CarouselItem'
import { CarouselTitle, CarouselContainer } from './components/CarouselStyle'

SwiperCore.use([Pagination, Navigation])

function Carousel({ movies, title }) {
  return (
    <CarouselContainer>
      <div className="container">
        <CarouselTitle>{title}</CarouselTitle>

        <Swiper
          navigation={true}
          lazy={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50
            }
          }}
          className="carouselSlider"
        >
          {movies.map((item, index) => (
            <SwiperSlide key={index}>
              <CarouselItem data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </CarouselContainer>
  )
}

export default Carousel
