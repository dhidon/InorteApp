import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import LogIn from '../screens/LogIn/Index'
import SignIn from '../screens/SignUp/Index'

export default function AuthRoute(){
    const AuthStack = createNativeStackNavigator()

    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name='LogIn' component={LogIn} options={{headerShown: false}}/>
            <AuthStack.Screen name='SignIn' component={SignIn}/>
        </AuthStack.Navigator>
    )
}