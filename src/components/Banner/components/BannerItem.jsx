import React from 'react'
import { Slide, SlideFilter } from './BannerStyle'
import { POSTER_ENDPOINT_BANNER } from '../../../api'
import Poster from '../../Poster'
import BannerTextContent from './BannerTextContent'

function BannerItem({ data }) {
  return (
    <Slide>
      <Poster
        src={POSTER_ENDPOINT_BANNER + data.backdrop_path}
        alt={data.title}
      />
      <BannerTextContent
        name={data.title}
        desc={data.overview.substr(0, 250) + '...'}
        url={data.id}
      />
      <SlideFilter />
    </Slide>
  )
}

export default BannerItem
