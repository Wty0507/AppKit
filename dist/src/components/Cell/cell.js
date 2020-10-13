import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import type { ImageStyle, TextStyle, ViewStyle } from 'react-native/Libraries/StyleSheet/StyleSheet'
import styles from './styles'
import { CellTheme } from '../../themes/components'

type T = (() => React.ReactElement) | string | React.ReactElement

interface Props {
  /** @onPress 点击事件 */
  onPress?: Function;

  /**  @containerStyle Cell最外层样式 */
  containerStyle?: ViewStyle;
  paddingLeft?: number;
  paddingRight?: number;
  bottomBorder: boolean;
  bottomBorderColor: string;

  /**
   * @leftTop 左侧顶部内容 (() => React.ReactElement) | string | React.ReactElement
   * @leftTopStyle 左侧顶部内容为'string'类型时 可使用的样式
   * @leftBottom 左侧底部内容 (() => React.ReactElement) | string | React.ReactElement
   * @leftBottomStyle 左侧底部内容为'string'类型时 可使用的样式
   */
  leftTop?: T;
  leftTopStyle?: TextStyle;
  leftBottom?: T;
  leftBottomStyle?: TextStyle;

  /**
   * @rightTop 右侧顶部内容 (() => React.ReactElement) | string | React.ReactElement
   * @rightTopStyle 右侧顶部内容为'string'类型时 可使用的样式
   * @rightBottom 右侧底部内容 (() => React.ReactElement) | string | React.ReactElement
   * @rightBottomStyle 右侧底部内容为'string'类型时 可使用的样式
   */
  rightTop?: T;
  rightTopStyle?: TextStyle;
  rightBottom?: T;
  rightBottomStyle?: TextStyle;

  /**
   * @icon 右边icon类型
   * none 没有
   * arrow 指向右边箭头
   * round 选择圆圈
   */
  icon?: 'none' | 'arrow' | 'round';

  /**
   * icon为 'arrow' 时
   * @arrowStyle 右侧箭头图片样式
   * @arrowColor 右侧箭头颜色 优先级最高
   */
  arrowStyle?: ImageStyle;
  arrowColor?: string;

  /**
   * icon为 'round' 时
   * @selected 是否选中
   * @unselectedColor 未选中时 圆圈的颜色
   * @selectedColor 选中时 背景颜色
   * @selectedIconColor 选中时 中间icon的颜色
   */
  selected?: boolean;
  unselectedColor?: string;
  selectedColor?: string;
  selectedIconColor?: string;
}

export default class Cell extends Component<Props> {
  static defaultProps = {
    icon: 'none',
    paddingLeft: 30,
    paddingRight: 30,
    bottomBorder: true
  }
  render() {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          if (this.props.onPress) {
            this.props.onPress()
          }
        }}
        style={[
          styles.container,
          this.props.containerStyle,
          { paddingLeft: this.props.paddingLeft, paddingRight: this.props.paddingRight }
        ]}
      >
        {/* 左侧内容 */}
        <View style={{ marginRight: 10 }}>
          {this.renderLeftTop()}
          {this.renderLeftBottom()}
        </View>
        {/* 右侧内容 */}
        <View style={[{ flex: 1, alignItems: 'flex-end' }]}>
          {this.renderRightTop()}
          {this.renderRightBottom()}
        </View>
        {this.renderIcon()}
        {this.renderBottomBorder()}
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

  renderIcon() {
    let { icon } = this.props

    switch (icon) {
      case 'arrow':
        return this.renderArrow()
      case 'round':
        return this.renderRound()
      default:
        return null
    }
  }

  renderArrow() {
    let { arrowStyle, arrowColor } = this.props
    return (
      <Image
        source={CellTheme.arrow_right}
        style={[
          { marginLeft: 4, marginRight: -6 },
          styles.arrow,
          arrowStyle,
          arrowColor && { tintColor: arrowColor }
        ]}
      />
    )
  }

  renderRound() {
    let { selected, unselectedColor, selectedColor, selectedIconColor } = this.props
    if (!selected) {
      return (
        <View
          style={[
            { marginLeft: 4 },
            styles.unselected,
            unselectedColor && { borderColor: unselectedColor }
          ]}
        />
      )
    } else {
      return (
        <View
          style={[
            { marginLeft: 4 },
            styles.selected,
            selectedColor && { backgroundColor: selectedColor }
          ]}
        >
          <Image
            source={CellTheme.yes_icon}
            style={[styles.yes, selectedIconColor && { tintColor: selectedIconColor }]}
          />
        </View>
      )
    }
  }

  renderBottomBorder() {
    const { bottomBorder, bottomBorderColor } = this.props
    if (!bottomBorder) return null
    return (
      <View
        style={[
          styles.bottomBorder,
          bottomBorderColor && { backgroundColor: bottomBorderColor },
          { left: this.props.paddingLeft }
        ]}
      />
    )
  }
}
