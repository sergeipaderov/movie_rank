import React from 'react'
import { HeaderWrapper, LogoWrapper, HeaderTitle, HeaderSubtitle } from './styled'
import LogoIcon from '../LogoIcon'

const Header = () => {
  return (
    <HeaderWrapper>
      <LogoIcon />
      <LogoWrapper>
        <HeaderTitle>Next Play</HeaderTitle>
        <HeaderSubtitle>Movies</HeaderSubtitle>
      </LogoWrapper>
    </HeaderWrapper>
  )
}


export default Header
