import React from 'react'
import { SiThemoviedatabase } from 'react-icons/si'
import styled from 'styled-components'
import theme from '../styles/theme'
const { colors } = theme

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 20rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${colors.silver};

  & svg {
    font-size: 20rem;
  }
`

const Message = styled.p`
  width: 50rem;
  font-size: 3rem;
  font-weight: 500;
  margin-top: 2.4rem;
  text-align: center;
  line-height: 1.35;
  letter-spacing: 0.5px;
`

const Warning = () => {
  return (
    <Container>
      <SiThemoviedatabase />
      <Message>Hiç bir sonuç bulunamadı</Message>
    </Container>
  )
}

export default Warning
