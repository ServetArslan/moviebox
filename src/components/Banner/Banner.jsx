import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination } from 'swiper/core'
import BannerItem from './components/BannerItem'
import { BannerContainer } from './components/BannerStyle'

SwiperCore.use([Pagination])

function Banner({ banners }) {
  return (
    <BannerContainer>
      <Swiper pagination={true} lazy={true} className="mainSlider">
        {banners.map((item) => (
          <SwiperSlide key={item.id}>
            <BannerItem data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </BannerContainer>
  )
}

export default Banner
