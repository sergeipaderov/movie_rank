// @flow

import React, { Component } from 'react'
import { TouchableOpacity, View, Image } from 'react-native'
import Icon from '../../assets/Icons/heart.png'
import SelectedIcon from '../../assets/Icons/heart-selected.png'

type Props = {
  style?: Object,
  onPress: Function,
  isFavorite: Boolean,
}

class FavoriteIcon extends Component<Props> {

  static defaultProps = {
    style: {},
  }

  render() {
    const { style, onPress, isFavorite } = this.props

    return (
      <View style={style}>
        <TouchableOpacity onPress={onPress}>
          {isFavorite
            ? <Image source={SelectedIcon} />
            : <Image source={Icon} />
          }
        </TouchableOpacity>
      </View>
    )
  }

}

export default FavoriteIcon
