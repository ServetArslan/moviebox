import React from 'react'
import styled from 'styled-components'
import Header from '../../components/Header/Header'
import GlobalStyles from '../../styles/GlobalStyles'
import 'swiper/swiper-bundle.css'

function DefaultLayout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Header />
      {children}
    </>
  )
}

export default DefaultLayout
