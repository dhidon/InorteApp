import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/Styles";
import Entypo from '@expo/vector-icons/Entypo';
import { useNavigation } from "@react-navigation/native";

export default function ListaPacientes({data}){
    const navigation = useNavigation()
    
    return (
        <View style={styles.list}>

            <View>
                <Text style={styles.normal}>{data.nome}</Text>
                <Text style={{color: '#FFF'}}>Nº SUS: {data.sus}</Text>
            </View>

            <TouchableOpacity onPress={()=>{navigation.navigate('Relatório', {data})}}>
                <Entypo name="text-document" size={24} color="#FFF"/>
            </TouchableOpacity>

        </View>
    )
}