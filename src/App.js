import React from 'react'
import { createAppContainer } from 'react-navigation'
import Routes from './routes'

const AppContainer = createAppContainer(Routes)

export default class App extends React.Component {
  render() {
    return <AppContainer />
  }
}
