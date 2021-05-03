import React from 'react'
import { FaPlay } from 'react-icons/fa'
import { SlideContentWrapper, Button } from './BannerStyle'

function BannerTextContent({ name, desc, url }) {
  return (
    <SlideContentWrapper>
      <div className="container">
        <h2>{name}</h2>
        <p>{desc}</p>
        <Button to={'/movie/' + url} className="btn">
          <FaPlay /> Şimdi Oynat
        </Button>
      </div>
    </SlideContentWrapper>
  )
}

export default BannerTextContent
