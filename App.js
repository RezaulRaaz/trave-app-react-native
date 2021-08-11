import React, { useEffect } from 'react'
import { StatusBar } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from './navigation/Tabs'
import DetailsScreen from './components/screens/Details/DetailsScreen'
import CategoryScreen from './components/screens/Category/Category'
import HotelDetailScreen from './components/screens/Hotels/HotelDetailScreen'
import LoginScreen from './components/screens/Login/Login'
import RNBootSplash from "react-native-bootsplash";



const Stack = createStackNavigator();
const App = () => {

  useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide();
    }, 1000);
  }, []);

  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor="#FFFFFF"
        barStyle="dark-content"
      />
      <Stack.Navigator
        // screenOptions={{
        //   headerShown: false
        // }}
        initialRouteName={'Home'}
      >
        <Stack.Screen name="Home" options={{
          headerShown: false, // change this to `false`
        }} component={Tabs} />

        <Stack.Screen name="DetailsScreen" component={DetailsScreen}/>
        <Stack.Screen name="CategoryScreen" component={CategoryScreen} options={{ title: 'Hotels' }}/>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ title: 'Login' }} />
        <Stack.Screen name="HotelDetailScreen" component={HotelDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
