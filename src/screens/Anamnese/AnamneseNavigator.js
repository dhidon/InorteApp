import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AnmenseAdolescentes from "./AnamneseAdolescentes/Index";
import AnamneseCriancas from "./AnamneseCriancas/Index";
import Anamnese from "./Index";
import Profissionais from "../Profissionais/Index";

export default function AnamneseNavigator(){
    const AnamneseStack = createNativeStackNavigator()
    return (
        <AnamneseStack.Navigator screenOptions={{headerShown: false}}>
            <AnamneseStack.Screen name='Anamnese' component={Anamnese}/>
            <AnamneseStack.Screen name='Anamnese de Adolescentes' component={AnmenseAdolescentes}/>
            <AnamneseStack.Screen name='Anamnese de Crianças' component={AnamneseCriancas}/>
            <AnamneseStack.Screen name='Profissionais' component={Profissionais}/>
        </AnamneseStack.Navigator>
    )
}