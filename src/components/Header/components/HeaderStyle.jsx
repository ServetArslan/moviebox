import { Link } from 'react-router-dom'
import styled from 'styled-components'
import theme from '../../../styles/theme'
const { colors } = theme

export const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  padding: 15px 50px;
  position: absolute;
  justify-content: space-between;
  left: 0;
  top: 0;
  z-index: 11;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.7) 10%,
    rgba(0, 0, 0, 0)
  );
  @media (max-width: 768px) {
    padding: 15px;
  }
`

export const LogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: 500;
  text-decoration: none;
  margin-right: 40px;

  & hover {
    text-docoration: none;
  }

  & p {
    color: white;

    & span {
      color: ${colors.red};
      font-weight: 900;
    }
  }
`

export const SearchWrapper = styled.div`
  position: relative;

  & svg {
    position: absolute;
    font-size: 1.3rem;
    top: 1.7rem;
    right: 1.4rem;
    color: ${colors.white};
    cursor: pointer;
  }
`

export const Input = styled.input`
  font-size: 1.5rem;
  background-color: transparent;
  // border: 1px solid ${colors.lightGray}:
  outline: none;
  border: none;
  padding: 1rem 5px;
  padding-right: 4rem;
  color: ${colors.lightGray};
  border-radius: 3px;
  width: 200px;
  border-bottom: 1px solid transparent;
  transition: all 0.3s ease;

  &::placeholder {
    color: ${colors.lightGray};
    font-size: 17px;
  }

  &:focus {
    width: 300px;
    border-color: ${colors.lightGray};
  }

  &::-webkit-search-cancel-button {
    position: relative;
    top: 2px;
    left: 5px;
  }
`
