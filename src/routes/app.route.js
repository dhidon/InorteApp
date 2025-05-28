import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { styles, colors } from "../styles/Styles";
import Home from "../screens/Home/Index";
import AnamneseNavigator from "../screens/Anamnese/AnamneseNavigator";

export default function AppRoute(){
    const AppDrawer = createDrawerNavigator()
    
    return (
        <AppDrawer.Navigator 
        screenOptions={{
            drawerActiveBackgroundColor: colors.secondary,
            drawerActiveTintColor: colors.white,
            drawerInactiveBackgroundColor:colors.primary,
            drawerInactiveTintColor: colors.white
            }}
        >
            <AppDrawer.Screen name='Home' component={Home}/>
            <AppDrawer.Screen name='Anamnese' component={AnamneseNavigator}/>
        </AppDrawer.Navigator>
    )
}