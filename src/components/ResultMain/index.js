// @flow

import React, { Component } from 'react'
import { MainContainer, MovieContainer, MovieCover, MovieTitle, MovieRuntime } from './styled'
import { TouchableOpacity } from 'react-native'

type Props = {
  data: Array<Object>,
  navigation: Objects,
}

class ResultMain extends Component<Props> {

  render() {
    const { navigation, data } = this.props

    return (
      <MainContainer>
        {
          data.map(item => (
            <TouchableOpacity
              key={item.imdbID}
              onPress={() => navigation.navigate('Details', { data: item })}
            >
              <MovieContainer>
                <MovieCover source={{ uri: item.Poster }} />
                <MovieTitle numberOfLines={1}>{item.Title}</MovieTitle>
                <MovieRuntime>{item.Year}</MovieRuntime>
              </MovieContainer>
            </TouchableOpacity>
          ))
          }
      </MainContainer>
    )
  }

}

export default ResultMain
