import { createStackNavigator } from 'react-navigation-stack'

import Home from '../views/Home'

const RootStack = createStackNavigator(
  {
    Home: Home
  },
  {
    initialRouteName: 'Home'
  }
)

export default RootStack
