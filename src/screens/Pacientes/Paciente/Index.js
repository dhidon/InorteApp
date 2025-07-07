import React from "react";
import { ScrollView, View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import { styles } from "../../../styles/Styles";
import Header from "../../../components/Header";

export default function Paciente(){
    const route = useRoute()
    const { data } = route.params

    return (
        <ScrollView style={styles.container}>
            <Header setor={data.nome}/>
            <View style={styles.contentArea}>
                <Text>Informações do paciente</Text>
            </View>
        </ScrollView>
    )
}