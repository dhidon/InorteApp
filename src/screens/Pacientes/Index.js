import React, { useEffect, useState } from "react";
import { View, ActivityIndicator, FlatList } from "react-native";
import { styles } from "../../styles/Styles";
import { db } from "../../services/firebaseConnection";
import { collection, getDocs } from "firebase/firestore";

import Header from "../../components/Header";
import ListaPacientes from "../../components/ListaPacientes";

export default function Pacientes(){
    const [pacientes, setPacientes] = useState(null)

    useEffect(()=>{
        async function getPacientes(){
            const pacientesRef = collection(db, 'pacientes')
            getDocs(pacientesRef)
            .then((snapshot)=>{
                let listaPacientes = []
                snapshot.forEach((doc)=>{
                    listaPacientes.push({
                        id: doc.id,
                        nome: doc.data().nome,
                        ...doc.data()
                    })
                })

                setPacientes(listaPacientes)
                console.log(pacientes)
            })
            .catch((e)=>{
                console.log(e)
            })
        }
        getPacientes()
    },[])

    return (
        <View style={styles.container}>
            <Header setor='Pacientes'/>

                {
                    !pacientes 
                    ? <ActivityIndicator size={48} color={'#000'} />
                    :<FlatList
                    data={pacientes}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => <ListaPacientes data={item}/>}
                    />
                }
                
        </View>
    )
}