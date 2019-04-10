import { View, Text } from 'react-native'
import styled from 'styled-components'

export const HeaderWrapper = styled(View)`
  display: flex;
  flex-direction: row;
  margin-bottom: 40px;
`

export const LogoWrapper = styled(View)`
  display: flex;
  padding-left: 10px;
`

export const HeaderTitle = styled(Text)`
  font-size: 24px;
  color: #000;
  line-height: 26;
`

export const HeaderSubtitle = styled(Text)`
  font-size: 15px;
`