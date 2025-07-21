import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { colors } from "../styles/Styles";
import Home from "../screens/Home/Index";
import AnamneseNavigator from "../screens/Anamnese/AnamneseNavigator";
import Relatorio from "../screens/Relatorio/Index";
import Pacientes from "../screens/Pacientes/Index";


export default function AppRoute(){
    const AppDrawer = createDrawerNavigator()
    const Stack = createNativeStackNavigator()

    function PacienteStack(){
        return (
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name='Paciente' component={Pacientes}/>
                <Stack.Screen name='Relatório'component={Relatorio}/>
            </Stack.Navigator>
        )
    }
    
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
            <AppDrawer.Screen name='Pacientes' component={PacienteStack}/>
        </AppDrawer.Navigator>
    )
}