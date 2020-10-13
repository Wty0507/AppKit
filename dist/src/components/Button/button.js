import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
// import type { ImageStyle, TextStyle, ViewStyle } from 'react-native/Libraries/StyleSheet/StyleSheet'
// import styles from './styles'
// import { CellTheme } from '../../themes/components'
import LinearGradient from 'react-native-linear-gradient'

type T = (() => React.ReactElement) | string | React.ReactElement

interface Props {
}

export default class Button extends Component<Props> {
  render() {
    return (
      <View>
        <LinearGradient colors={['red', 'blue']} style={{ width: 80, height: 35 }}></LinearGradient>
      </View>
    )
  }
}
