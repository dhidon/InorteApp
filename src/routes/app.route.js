import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image } from "react-native";

import { styles, colors } from "../styles/Styles";
import Home from "../screens/Home/Index";
import AnamneseNavigator from "../screens/Anamnese/AnamneseNavigator";
import Relatorio from "../screens/Relatorio/Index";
import Pacientes from "../screens/Pacientes/Index";
import CustomDrawer from "../components/CustomDrawer";


export default function AppRoute(){
    const AppDrawer = createDrawerNavigator()
    const Stack = createNativeStackNavigator()

    function PacienteStack(){
        return (
            <Stack.Navigator>
                <Stack.Screen 
                name='Paciente' 
                component={Pacientes}
                />

                <Stack.Screen 
                name='Relatório'
                component={Relatorio}
                />
            </Stack.Navigator>
        )
    }
    
    return (
        <AppDrawer.Navigator
        drawerContent={props => <CustomDrawer {...props}/>}
        screenOptions={{
            drawerActiveBackgroundColor: colors.secondary,
            drawerActiveTintColor: colors.white,
            drawerInactiveBackgroundColor:colors.primary,
            drawerInactiveTintColor: colors.white,
            drawerItemStyle:{
                marginBottom: 10,
                borderRadius: 8
            },
            }}
        >
            <AppDrawer.Screen 
            name='Home' 
            component={Home}
            options={{
                title: 'Home',
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    fontSize: 36
                },
                headerRight: ()=>(
                    <Image source={require('../assets/logoInorte.png')} style={[styles.cabecalhoImg, {height: '100%'}]}/>
                )
            }}
            />

            <AppDrawer.Screen 
            name='Anamnese' 
            component={AnamneseNavigator}
            options={{
                title: 'Anamnese',
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    fontSize: 36
                },
                headerRight: ()=>(
                    <Image source={require('../assets/logoInorte.png')} style={[styles.cabecalhoImg, {height: '100%'}]}/>
                )
            }}
            />

            <AppDrawer.Screen 
            name='Pacientes' 
            component={PacienteStack}
            options={{
                headerShown: false
            }}
            />
        </AppDrawer.Navigator>
    )
}