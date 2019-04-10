import styled from 'styled-components'
import { View, Image, Text } from 'react-native'

export const MainContainer = styled(View)`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 30px;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const MovieContainer = styled(View)`
  display: flex;
  width: 30%;
  margin-bottom: 20px;
  
`

export const MovieCover = styled(Image)`
  height: 140px;
  width: 100px;
  border-radius: 10px;
  margin-bottom: 5px;
`

export const MovieTitle = styled(Text)`
  display: flex;
  font-size: 14px;
  width: 100px; 
`

export const MovieRuntime = styled(Text)`
  font-size: 14px;
  width: 100px;
`
