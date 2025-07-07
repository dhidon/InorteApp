import React from "react";
import { View, Text } from "react-native";

export default function ListaPacientes({data}){
    return (
        <View>
            <Text>{data.nome}</Text>
        </View>
    )
}