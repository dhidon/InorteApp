import React from "react";
import { View, Text } from "react-native";

export default function ListaCondicoes({titulo, lista}){
    return (
        <View>
            <Text style={{fontWeight: 'bold'}}>{titulo}</Text>
            {lista.map((item, index)=>{
                if(item.value === 'sim'){
                    return (
                        <View key={index}>
                            <Text>* {item.label}</Text>
                        </View>
                    )
                }
            })}
        </View>
    )
}