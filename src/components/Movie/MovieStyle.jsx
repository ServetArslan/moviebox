import styled from 'styled-components'
import theme from '../../styles/theme'
const { colors } = theme

export const MovieCard = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding-top: 100px;
`

export const MovieColWrapper = styled.div`
  display: flex;
  width: 50%;
  max-width: 900px;
  background: rgb(0 0 0 / 59%);
  @media (max-width: 768px) {
    flex-wrap: wrap;
    width: 90%;
  }
`
export const MovieCol = styled.div`
  padding: 15px;
  color: ${colors.white};
  width: 50%;
  img {
    max-width: 100%;
  }
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
