import styled from 'styled-components'
import theme from '../../../styles/theme'
const { colors } = theme

export const CarouselContainer = styled.div`
  position: relative;
  padding: 50px 0;
  margin-bottom: 50px;
  .swiper-button-prev,
  .swiper-button-next {
    color: ${colors.white};
  }
`

export const CarouselTitle = styled.h3`
  position: relative;
  margin-bottom: 30px;
  color: ${colors.white};
`

export const Slide = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    div {
      display: block;
    }
  }
`
export const MovieInfo = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  bottom: 0;
  background: rgb(4 4 4 / 75%);
  display: none;
  padding: 25px 15px;
  transition: all 0.3s ease;
`

export const MovieTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  color: ${colors.white};
  margin-bottom: 20px;
  width: 100%;
`

export const MovieDesc = styled.p`
  font-size: 15px;
  color: ${colors.white};
  margin-bottom: 15px;
  width: 100%;
`

export const MovieDate = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.white};
  margin-bottom: 20px;
  width: 100%;
`
