import React, { Component } from 'react'
import { StatusBar, View } from 'react-native'
import { Cell } from '../component-path'

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home'
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle={'dark-content'} />
        <Cell leftTop={'测试1'} leftBottom={'测试2'} containerStyle={{ height: 70 }} arrow={true} arrowColor={'red'}/>
        <Cell leftTop={'测试2'} rightTop={'拉丝款捷达'} arrow={true} />
      </View>
    )
  }
}
