/* eslint-disable */
import React, { Component, Container } from 'react';
import { createAppContainer } from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Login from './screens/Login'
import Signin from './screens/Signin'
import Transactions from './screens/Transaccions'
import Account from './screens/Account'


class App extends Component {
  render() {return (<Container />);}
}

const AppNavigator = createStackNavigator(
  {
    Login:Login,    
    Signin:Signin,
    Transactions:Transactions,
    Account:Account,
    
  },
  {
    initialRouteName: "Login"
  }
);

export default createAppContainer(AppNavigator);