import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import FoodList from './View/FoodList';



const Stack = createNativeStackNavigator();

export default props => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Foodlist'
                    screenOptions={
                    {
                        headerStyle:{backgroundColor:'#f4511e'},
                        headerTintColor: '#fff',
                        headerTitleStyle:{fontWeight:'bold'},
                    }}>
                    <Stack.Screen name='Foods' component={FoodList} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}