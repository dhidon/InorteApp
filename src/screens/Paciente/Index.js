import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, FlatList } from "react-native";
import { styles } from "../../styles/Styles";
import { db } from "../../services/firebaseConnection";
import { collection, doc, getDocs } from "firebase/firestore";

import Header from "../../components/Header";
import ListaPacientes from "../../components/ListaPacientes";

export default function Paciente(){
    const {pacientes, setPacientes} = useState({})

    useEffect(()=>{
        async function getPacientes(){
            const querySnapshot = await getDocs(collection(db, 'pacientes'))
            const pacientesArray = querySnapshot.map(doc => ({
                id: doc.id,
                ...doc.data()
            })
            )
            console.log(pacientesArray)
        }
        getPacientes()
    },[])

    return (
        <ScrollView style={styles.container}>
            <Header setor='Paciente'/>
            <View style={styles.contentArea}>
                <Text>Pacientes</Text>
                <FlatList
                    data={pacientes}
                    keyExtractor={item => item.id}
                    horizontal
                    renderItem={({item}) => <ListaPacientes data={item}/>}
                />
            </View>
        </ScrollView>
    )
}