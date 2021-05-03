import React from 'react'
import styled from 'styled-components/macro'

const Img = styled.img`
  display: block;
  width: 100%;
  object-fit: cover;
  object-position: center;
`

function Poster({ src, alt }) {
  return <Img src={src} ald={alt} />
}

export default Poster
