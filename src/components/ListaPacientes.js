import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/Styles";
import Feather from '@expo/vector-icons/Feather';
import { useNavigation } from "@react-navigation/native";

export default function ListaPacientes({data}){
    const navigation = useNavigation()
    
    return (
        <View style={[styles.inputArea, {marginLeft: 20, flexDirection: 'row', justifyContent: 'space-between'}]}>

            <Text style={styles.normal}>{data.nome}</Text>

            <TouchableOpacity onPress={()=>{navigation.navigate('Paciente', {data})}}>
                <Feather name="eye" size={24} color="#FFF" />
            </TouchableOpacity>
        </View>
    )
}