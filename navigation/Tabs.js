import React from "react";
import { View, Text, Image } from 'react-native';
import { Icons } from './../constants/index'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from './../components/screens/Home/Home'

import Flights from "../components/screens/Flights/Flights";

import Chatbot from "../components/screens/Flights/Flights";

import Hotels from "../components/screens/Hotels/Hotels";

import Profile from "../components/screens/Profile/Profile";
import CategoryScreen from "../components/screens/Category/Category";

const Tab = createBottomTabNavigator();
const tabOptions = {
    showLabel: false,
    style: {
        height: "9%",
    },
};
const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={tabOptions}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    const tintColor = focused ? '#DA4D5F' : '#8B8B98';
                    switch (route.name) {
                        case "Travel":
                            return (
                                <View style={{alignItems:'center',justifyContent:'center'}}>
                                    <Image
                                        source={Icons.man}
                                        resizeMode="contain"
                                        style={{
                                            tintColor: tintColor,
                                            width: 25,
                                            height: 25
                                        }}
                                    />
                                    <Text style={{ color: tintColor, textAlign: 'center', fontSize: 14, marginTop: 5 }}>Travel</Text>
                                </View>
                            );
                        case "Flights":
                            return (
                                <View style={{alignItems:'center',justifyContent:'center'}}>
                                    <Image
                                        source={Icons.aeroplane}
                                        resizeMode="contain"
                                        style={{
                                            tintColor: tintColor,
                                            width: 25,
                                            height: 25
                                        }}
                                    />
                                    <Text style={{ color: tintColor, textAlign: 'center', fontSize: 14, marginTop: 5 }}>Flights</Text>
                                </View>
                            );
                        case "Chatbot":
                            return (
                                <View style={{alignItems:'center',justifyContent:'center'}}>
                                    <Image
                                        source={Icons.chat}
                                        resizeMode="contain"
                                        style={{
                                            tintColor: tintColor,
                                            width: 25,
                                            height: 25
                                        }}
                                    />
                                    <Text style={{ color: tintColor, textAlign: 'center', fontSize: 14, marginTop: 5 }}>Chatbot</Text>
                                </View>
                            );
                        case "Hotels":
                            return (
                                <View style={{alignItems:'center',justifyContent:'center'}}>
                                    <Image
                                        source={Icons.bed}
                                        resizeMode="contain"
                                        style={{
                                            tintColor: tintColor,
                                            width: 25,
                                            height: 25
                                        }}
                                    />
                                    <Text style={{ color: tintColor, textAlign: 'center', fontSize: 14, marginTop: 5 }}>Hotels</Text>
                                </View>
                            );
                        case "Profile":
                            return (
                                <View style={{alignItems:'center',justifyContent:'center'}}>
                                    <Image
                                        source={Icons.user}
                                        resizeMode="contain"
                                        style={{
                                            tintColor: tintColor,
                                            width: 50,
                                            height: 25
                                        }}
                                    />
                                    <Text style={{ color: tintColor, textAlign: 'center', fontSize: 14, marginTop: 5 }}>Profile</Text>
                                </View>
                            );
                    }
                }
            })}

        >
            <Tab.Screen
                name="Travel"
                component={Home}
            />
            <Tab.Screen
                name="Flights"
                component={Flights}
            />
            <Tab.Screen
                name="Chatbot"
                component={Chatbot}
            />
            <Tab.Screen
                name="Hotels"
                component={CategoryScreen}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
            />
        </Tab.Navigator>
    );
};

export default Tabs;