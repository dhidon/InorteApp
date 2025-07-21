import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/Styles";
import Entypo from '@expo/vector-icons/Entypo';
import { useNavigation } from "@react-navigation/native";

export default function ListaPacientes({data}){
    const navigation = useNavigation()
    
    return (
        <TouchableOpacity onPress={()=>{navigation.navigate('Relatório', {data})}}>
            <View style={styles.list}>

                <Text style={styles.normal}>
                    Paciente: <Text style={{fontWeight: 'bold'}}>{data.nome}</Text> -
                    Idade: <Text style={{fontWeight: 'bold'}}>{data.idade}</Text> - 
                    Nº SUS: <Text style={{fontWeight: 'bold'}}>{data.sus}</Text>
                </Text>

                <View style={{right: 7}}>
                    <Entypo name="text-document" size={24} color="#FFF"/>
                </View>

            </View>
        </TouchableOpacity>
    )
}