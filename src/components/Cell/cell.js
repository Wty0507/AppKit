import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import type { ImageStyle, TextStyle, ViewStyle } from 'react-native/Libraries/StyleSheet/StyleSheet'
import styles from './styles'
import { CellTheme } from '../../themes/components'

type T = (() => React.ReactElement) | string | React.ReactElement
interface Props {
  onPress?: Function;

  containerStyle?: ViewStyle;

  leftTop?: T;
  leftTopStyle?: TextStyle;
  leftBottom?: T;
  leftBottomStyle?: TextStyle;

  rightTop?: T;
  rightTopStyle?: TextStyle;
  rightBottom?: T;
  rightBottomStyle?: TextStyle;

  arrow?: boolean;
  arrowColor?: string;
  arrowStyle?: ImageStyle;
}

export default class Cell extends Component<Props> {
  render() {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          if (this.props.onPress) {
            this.props.onPress()
          }
        }}
        style={[styles.container, this.props.containerStyle]}
      >
        <View style={{ marginRight: 10 }}>
          <View>{this.renderLeftTop()}</View>
          {this.renderLeftBottom()}
        </View>
        <View style={[{ marginRight: 4, flex: 1, alignItems: 'flex-end' }]}>
          {this.renderRightTop()}
          {this.renderRightBottom()}
        </View>
        {this.renderArrow()}
      </TouchableOpacity>
    )
  }

  renderLeftTop() {
    let { leftTop, leftTopStyle } = this.props
    let _leftTop
    if (React.isValidElement(leftTop)) {
      _leftTop = leftTop
    } else if (typeof leftTop === 'function') {
      _leftTop = leftTop()
    } else if (!!leftTop) {
      _leftTop = <Text style={[styles.leftTopText, leftTopStyle]}>{leftTop}</Text>
    }
    return _leftTop
  }

  renderLeftBottom() {
    let { leftBottom, leftBottomStyle } = this.props

    let _leftBottom
    if (React.isValidElement(leftBottom)) {
      _leftBottom = leftBottom
    } else if (typeof leftBottom === 'function') {
      _leftBottom = leftBottom()
    } else if (!!leftBottom) {
      _leftBottom = <Text style={[styles.leftBottomText, leftBottomStyle]}>{leftBottom}</Text>
    }

    return _leftBottom
  }

  renderRightTop() {
    let { rightTop, rightTopStyle } = this.props

    let _rightTop
    if (React.isValidElement(rightTop)) {
      _rightTop = rightTop
    } else if (typeof rightTop === 'function') {
      _rightTop = rightTop()
    } else if (!!rightTop) {
      _rightTop = (
        <Text numberOfLines={1} style={[styles.rightTopText, rightTopStyle]}>
          {rightTop}
        </Text>
      )
    }

    return _rightTop
  }

  renderRightBottom() {
    let { rightBottom, rightBottomStyle } = this.props

    let _rightBottom
    if (React.isValidElement(rightBottom)) {
      _rightBottom = rightBottom
    } else if (typeof rightBottom === 'function') {
      _rightBottom = rightBottom()
    } else if (!!rightBottom) {
      _rightBottom = (
        <Text numberOfLines={1} style={[styles.rightBottomText, rightBottomStyle]}>
          {rightBottom}
        </Text>
      )
    }

    return _rightBottom
  }

  renderArrow() {
    let { arrow, arrowColor, arrowStyle } = this.props

    if (!arrow) return null

    return (
      <Image
        source={CellTheme.arrow_right}
        style={[styles.arrow, arrowStyle, arrowColor && { tintColor: arrowColor }]}
      />
    )
  }
}
