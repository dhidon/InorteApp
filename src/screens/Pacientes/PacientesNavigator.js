import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Paciente from "./Paciente/Index";
import Pacientes from "./Index";


export default function PacientesNavigator(){
    const PacientesStack = createNativeStackNavigator()

    return (
        <PacientesStack.Navigator screenOptions={{headerShown: false}}>
            <PacientesStack.Screen name='Pacientes' component={Pacientes}/>
            <PacientesStack.Screen name='Paciente' component={Paciente}/>
        </PacientesStack.Navigator>
    )
}