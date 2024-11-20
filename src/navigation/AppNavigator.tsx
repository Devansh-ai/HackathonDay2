import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from '../screens/homeScreen';
import ProfileScreen from '../screens/profileScreen';
import AnswerScreen from '../screens/answerScreen';


export default class AppNavigator extends Component {
    render() {
        const Stack = createNativeStackNavigator();

        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName='ProfileScreen' screenOptions={{ headerShown: false }}>
                    <Stack.Screen name='ProfileScreen' component={ProfileScreen} />
                    <Stack.Screen name='HomeScreen' component={HomeScreen} />
                    <Stack.Screen name='AnswerScreen' component={AnswerScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

const styles = StyleSheet.create({})





