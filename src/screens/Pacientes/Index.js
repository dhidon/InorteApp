import React, { useEffect, useState } from "react";
import { View, ActivityIndicator, FlatList, TouchableOpacity, Text } from "react-native";
import { styles } from "../../styles/Styles";
import { db } from "../../services/firebaseConnection";
import { collection, getDocs } from "firebase/firestore";

import Header from "../../components/Header";
import ListaPacientes from "../../components/ListaPacientes";
import Input from '../../components/Input'

export default function Pacientes(){
    const [pacientes, setPacientes] = useState(null)
    const [pacientesFiltrados, setPacientesFiltrados] = useState(null)
    const [search, setSearch] = useState('')

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
                setPacientesFiltrados(listaPacientes)
            })
            .catch((e)=>{
                console.log(e)
            })
        }
        getPacientes()
    },[])

    function limparBusca(){
        setSearch('')
        setPacientesFiltrados(pacientes)
    }

    return (
        <View style={styles.container}>
            <Header setor='Pacientes'/>

            <View style={{width: '90%', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20}}>
                <Input
                    legenda='Digite para procurar'
                    valor={search}
                    callback={newText=>{
                        setSearch(newText)
                        if (newText.trim() === ''){
                            setPacientesFiltrados(pacientes)
                        } else {
                            let pacientesEncontrados = pacientes?.filter(item => 
                                item.nome.toLowerCase().includes(newText.toLowerCase())
                            ) || []
                            setPacientesFiltrados(pacientesEncontrados)
                        }
                    }}
                />
                <TouchableOpacity onPress={limparBusca} style={{backgroundColor: '#666', padding: 10, borderRadius: 5}}>
                    <Text style={{color: 'white'}}>Limpar</Text>
                </TouchableOpacity>
            </View>
            <View style={{width: '90%'}}>
                {
                    !pacientesFiltrados 
                    ? <ActivityIndicator size={48} color={'#000'} />
                    :<FlatList
                    data={pacientesFiltrados}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => <ListaPacientes data={item}/>}
                    showsVerticalScrollIndicator={false}
                    />
                }
            </View>
                
        </View>
    )
}