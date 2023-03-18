import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
//import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Home from './src/Home';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Wallet from './src/Wallet';
import Settings from './src/Settings';
//const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <StatusBar animated={true} backgroundColor="#335ED8" />
      <Tab.Navigator
        initialRouteName="Home"
        inactiveColor="#FFFFFF"
        activeColor="#252777"
        barStyle={{
          paddingBottom: 28,
          backgroundColor: '#FFFFFF',
          height: 80,
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: '',
            tabBarColor: '#0922A2',

            tabBarIcon: ({}) => (
              <AntDesign name="creditcard" color="black" size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="wallet"
          component={Wallet}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({}) => (
              <AntDesign name="carryout" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="setting"
          component={Settings}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({}) => (
              <AntDesign name="setting" size={24} color="black" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
