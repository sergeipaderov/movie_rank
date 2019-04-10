import React from 'react'
import { View } from 'react-native'
import StyledIcon from './styled'
import Icon from '../../assets/Icons/search.png'

const SearchIcon = () => {

  return (
    <View>
      <StyledIcon source={Icon} />
    </View>
  )

}

export default SearchIcon
