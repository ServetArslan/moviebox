import styled from 'styled-components'
import theme from '../../../styles/theme'
import { Link } from 'react-router-dom'

const { colors } = theme

export const BannerContainer = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;

  .swiper-pagination {
    bottom: 50px;

    span {
      width: 50px;
      height: 3px;
      display: inline-block;
      border-radius: 5px;
      background: #fff;
      opacity: 0.5;

      &.swiper-pagination-bullet-active {
        opacity: 1;
      }
    }
  }
`
export const Slide = styled.div`
  display: flex;
  width: 100%;
  position: relative;

  img {
    height: 100vh;
  }
`

export const SlideFilter = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  bottom: 0;
  background: rgb(4 4 4 / 33%);
`

export const SlideContentWrapper = styled.div`
  width: 100%;
  max-wdith: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 22;

  h2 {
    width: 800px;
    max-wdith: 100%;

    font-size: 5rem;
    font-weight: bold;
    color: ${colors.white};
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 3rem;
    }

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
  p {
    width: 800px;
    max-width: 100%;
    padding-right: 15px;
    font-size: 1rem;
    line-height: 25px;
    font-weight: normal;
    color: ${colors.white};
    margin-bottom: 80px;
    @media (max-width: 768px) {
      max-height: 200px;
      overflow: hidden;
    }
  }

  .btn {
    display: inline-flex;
    align-items: center;

    svg {
      margin-right: 10px;
    }
  }
`
export const Button = styled(Link)`
  font-size: 20px;
`
