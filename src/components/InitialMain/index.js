import React from 'react'
import { Image } from 'react-native'
import Icon from '../../assets/Icons/empty.png'
import { MainContainer, MainTitle, MainSubTitle } from './styled'

const InitialMain = () => {
  return (
    <MainContainer>
      <Image source={Icon} />
      <MainTitle>Don't know what you search?</MainTitle>
      <MainSubTitle>Try search again!</MainSubTitle>
    </MainContainer>
  )
}
export default InitialMain
