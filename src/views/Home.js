import React, { Component } from 'react'
import { StatusBar, ScrollView } from 'react-native'
import { Button, Cell } from '../component-path';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home'
  }

  state = {
    selected: false
  }

  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <StatusBar barStyle={'dark-content'} />
        <Cell
          leftTop={'测试1'}
          rightTop={'爱唠嗑大家萨拉'}
          containerStyle={{ height: 90 }}
          icon={'arrow'}
          iconColor={'red'}
        />
        <Cell
          leftTop={'测试2'}
          icon={'round'}
          selected={this.state.selected}
          onPress={() => {
            this.setState({ selected: !this.state.selected })
          }}
        />
        <Button />
      </ScrollView>
    )
  }
}
