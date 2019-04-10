// @flow

import React, { Component } from 'react'
import { TouchableOpacity, View, Image } from 'react-native'
import Icon from '../../assets/Icons/arrow.png'

type Props = {
  style?: Object,
  onPress: Function,
}

class ArrowIcon extends Component<Props> {

  static defaultProps = {
    style: {},
  }

  render() {
    const { style, onPress } = this.props

    return (
      <View style={style}>
        <TouchableOpacity onPress={onPress}>
          <Image source={Icon} />
        </TouchableOpacity>
      </View>
    )
  }

}

export default ArrowIcon
