import 'react-native-gesture-handler';

import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers/index";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { FontAwesome, Ionicons, Entypo } from '@expo/vector-icons'
import {createStackNavigator} from '@react-navigation/stack';
import { purple, white } from './utils/color'
import {
  View,
  Platform,
  Text,
  StyleSheet,
  StatusBar, 
  Switch,
  Image,
  TextInput,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";
import { setLocalNotification } from './utils/helpers';

import Constants from "expo-constants";



import Slider from "@react-native-community/slider";
import getReview from "./utils/review";

import AddEntry from "./components/AddEntry";
import History from "./components/history";
import EntryDetail from "./components/EntryDetail";
import Live from "./components/live";


const Tab =
  Platform.OS === 'ios'
    ? createBottomTabNavigator()
    : createMaterialTopTabNavigator()

const TabNav = () => (<Tab.Navigator
  screenOptions={({ route }) => ({
    tabBarIcon: ({ color, size }) => {
      let icon
      if (route.name === 'Add Entry') {
        icon = (
          <FontAwesome name="plus-square" size={size} color={color} />
        )
      } else if (route.name === 'History') {
        icon = (
          <Ionicons name="ios-bookmarks" size={size} color={color} />
        )
      } else if (route.name === "Live") {
        icon = (
          <Entypo name="ios-speedometer" size={size} color={color} />
        )
      }

      return icon
    },
  })}
  tabBarOptions={{
    activeTintColor: Platform.OS === 'ios' ? purple : white,
    style: {
      backgroundColor: Platform.OS === 'ios' ? white : purple,
    },
    indicatorStyle: {
      // Android tab indicator (line at the bottom of the tab)
      backgroundColor: 'yellow',
    },
  }}
>
  <Tab.Screen name="History" component={History} />
  <Tab.Screen name="Add Entry" component={AddEntry} />
  <Tab.Screen name="Live" component={Live} />
</Tab.Navigator>
);


const Stack = createStackNavigator();
const MainNav = () => (
    <Stack.Navigator headerMode="screen">
        <Stack.Screen
            name="Home"
            component={TabNav}
            options={{headerShown: false}}/>
        <Stack.Screen
            name="EntryDetail"
            component={EntryDetail}
            options={{
                headerTintColor: white, headerStyle: {
                    backgroundColor: purple,
                }
      }} />
    <Stack.Screen
            name="Live"
            component={Live}
            options={{
                headerTintColor: white, headerStyle: {
                    backgroundColor: purple,
                }
            }}/>
    </Stack.Navigator>
);

function UdaciStatusBar({ backgroundColor, ...props }) {

  return (
    <View style={{backgroundColor, height:Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props}/>
    </View>
  )
} 

const store = createStore(reducer);

class App extends Component {

  componentDidMount() {
  
      setLocalNotification()
    
  }
  render() {
    
    return (
      <Provider store={store}>
        <NavigationContainer>
          <UdaciStatusBar backgroundColor={ purple} barStyle="light-content"/>
          <MainNav/>
        </NavigationContainer>
      </Provider>
    )
  
  }
}

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent:'center'
  }
})

export default App;
