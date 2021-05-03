import React from 'react'
import styled, { keyframes } from 'styled-components'
import theme from '../styles/theme'
const { colors } = theme

const rotate = keyframes`
  0% {transform: rotate(0deg);}
  100% {transform: rotate(360deg);}
`

const DualRingLoader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  &::after {
    content: ' ';
    display: block;
    width: 6rem;
    height: 6rem;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid ${colors.turquoise};
    border-color: ${colors.turquoise} transparent ${colors.turquoise}
      transparent;
    animation: ${rotate} 1.2s linear infinite;
  }
`

const Loader = () => <DualRingLoader />

export default Loader
