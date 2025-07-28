import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image } from "react-native";

import { styles, colors } from "../styles/Styles";
import Home from "../screens/Home/Index";
import Anamnese from "../screens/Anamnese/Index";
import Registro from '../screens/Registro'
import Profissionais from "../screens/Profissionais/Index";
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

    function AnamneseStack(){
        return (
            <Stack.Navigator>
                <Stack.Screen
                name='AnamneseHome'
                component={Anamnese}
                />

                <Stack.Screen
                name='Registro'
                component={Registro}
                />

                <Stack.Screen
                name='Profissionais'
                component={Profissionais}
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
            component={AnamneseStack}
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