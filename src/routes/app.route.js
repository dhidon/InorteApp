import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { colors } from "../styles/Styles";
import Home from "../screens/Home/Index";
import AnamneseNavigator from "../screens/Anamnese/AnamneseNavigator";
import PacientesNavigator from "../screens/Pacientes/PacientesNavigator";


export default function AppRoute(){
    const AppDrawer = createDrawerNavigator()
    
    return (
        <AppDrawer.Navigator 
        screenOptions={{
            drawerActiveBackgroundColor: colors.secondary,
            drawerActiveTintColor: colors.white,
            drawerInactiveBackgroundColor:colors.primary,
            drawerInactiveTintColor: colors.white,
            drawerItemStyle:{
                marginBottom: 10,
                borderRadius: 8
            },
            headerShown: false
            }}
        >
            <AppDrawer.Screen name='Home' component={Home}/>
            <AppDrawer.Screen name='Anamnese' component={AnamneseNavigator}/>
            <AppDrawer.Screen name='Pacientes' component={PacientesNavigator}/>
        </AppDrawer.Navigator>
    )
}