// @flow

import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import { Provider } from 'react-redux'
import DetailsScreen from './containers/DetailsScreen'
import HomeScreen from './containers/HomeScreen'
import store from './store'

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  },
)

const Routes = createAppContainer(AppNavigator)

export default (props: any) => {

  return (
    <Provider store={store}>
      <Routes screenProps={props} />
    </Provider>
  )
}
