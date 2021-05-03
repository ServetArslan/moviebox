import React from 'react'
import Logo from './components/Logo'
import Search from './components/Search'
import { HeaderContainer } from './components/HeaderStyle'

function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <Search />
    </HeaderContainer>
  )
}

export default Header
