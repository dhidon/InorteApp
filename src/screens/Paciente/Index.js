import React, { useContext } from "react";
import { View, Text, ScrollView, FlatList } from "react-native";
import { AnamneseContext } from "../../contexts/anamneseContext";
import { styles } from "../../styles/Styles";
import { db } from "../../services/firebaseConnection";
import { collection } from "firebase/firestore";

export default function Paciente(){
    const {paciente} = useContext(AnamneseContext)

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text></Text>
            </View>
        </ScrollView>
    )
}