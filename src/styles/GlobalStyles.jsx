import { createGlobalStyle } from 'styled-components/macro'
import theme from './theme'
const { colors, fonts } = theme

const GlobalStyles = createGlobalStyle`
  html {
    font-size: 100%;
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body {
    width: 100%;
    max-width: 100%;
  }

  body {
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: ${fonts.primary};
    color: ${colors.lightGray};
    background: ${colors.darkBlue};

    &::-webkit-scrollbar {
      width: 1.5rem;
    }

    &::-webkit-scrollbar-track {
      background-color: ${colors.lightBlue};
    }

    &::-webkit-scrollbar-thumb {
      background-color: #273a5c;
      border-radius: 2px;

      &:hover {
        background-color: #264987;
      }
    }
  }

  a{
    text-decoration:none;
  }

  img {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
  }

  .btn {
    display: inline-block;
    color: ${colors.darkBlue};
    background: ${colors.lightGray};
    font-family: ${fonts.primary};
    border: 0;
    padding: 10px 20px;
    cursor: pointer;
    opacity:.9;
    transition:all .3s ease;
    border-radius:4px;

    &:hover,
    &:focus {
      color: ${colors.darkBlue};
      outline: 0;
      opacity: .8;
    }
  }
 
  .container{
    display:block;
    max-width:1500px;
    width:100%;
    margin: 0 auto;
    padding: 0 15px;
  }

  .a-flex{
    display:flex;
    aligin-items:center;
    justify-content: space-between
  }
`

export default GlobalStyles
