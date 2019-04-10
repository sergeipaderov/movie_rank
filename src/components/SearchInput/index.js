import React from 'react'
import { Input, SearchWrapper } from './styled'
import SearchIcon from '../SearchIcon'

const SearchInput = ({ onChangeText, placeholder }) => {

  return (
    <SearchWrapper>
      <SearchIcon />
      <Input
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
    </SearchWrapper>
  )

}

export default SearchInput
