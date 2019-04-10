import styled from 'styled-components'
import { ScrollView, Text, View, Image } from 'react-native'
import ArrowIcon from '../../components/ArrowIcon'
import FavoriteIcon from '../../components/FavoriteIcon'

export const ContentWrapper = styled(ScrollView)`
  width: 100%;
  height: auto;
  background-color: #f2f2f2;
  position: relative;
`

export const ArrowBack = styled(ArrowIcon)`
  width: 50px;
  height: 50px;  
  position: absolute;
  top: 20px;
  left: 20px;
`

export const Favorite = styled(FavoriteIcon)`
  width: 50px;
  height: 50px;  
  position: absolute;
  top: 20px;
  right: 0;
`

export const CoverContainer = styled(View)`
  width: 100%;
  height: auto;  
`

export const MovieCover = styled(Image)`
  height: 300px;
  width: 100%;
  border-bottom-left-radius: 20;
  border-bottom-right-radius: 20;
`

export const DescriptionContainer = styled(View)`
  width: 90%;
  height: 110%;
  border-top-left-radius: 14;
  border-top-right-radius: 14;
  background-color: #fff;
  margin-left: 5%;
  top: -40px;
`

export const HeaderDescription = styled(View)`
  display: flex;
  width: 100%;
  height: auto;
  padding: 30px 20px 0;
`

export const MovieTitle = styled(Text)`
  text-align: center;
  font-size: 20px;
  color: #000;
`

export const HeaderInfo = styled(View)`
    flex-direction: row;
    align-self: center;
    justify-content: space-between;
    color: #868E96;
    min-width: 55%; 
    margin-top: 14px;   
  `

export const HeaderInfoItem = styled(View)`
  flex-direction: row;
  align-items: center;
`

export const InfoIcon = styled(Image)`
  width: 14px;
  height: 14px;
  margin-right: 5px;
`

export const InfoValue = styled(Text)`
  font-size: 12px;
`

export const MainDescription = styled(View)`
  width: 100%;
  height: auto;
  padding: 30px 20px 0;
`

export const ItemContainer = styled(View)`
  width: 100%;
  height: auto;
  border-top-width: 1px;
  border-top-color: #f2f2f2;
  padding: 20px 0;
`

export const ItemTitle = styled(Text)`
  font-size: 15px;
  color: #000;
  margin-bottom: 12px;
`

export const ItemDescription = styled(Text)`
  font-size: 12px;
  color: #868E96;
  line-height: 22px;
`
