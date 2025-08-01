import React, { useEffect, useState, useLayoutEffect, useCallback } from "react";
import { View, ActivityIndicator, FlatList, TouchableOpacity, Text } from "react-native";
import { styles } from "../../styles/Styles";
import { db } from "../../services/firebaseConnection";
import { collection, getDocs } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import Feather from '@expo/vector-icons/Feather';

import ListaPacientes from "../../components/ListaPacientes";
import Input from '../../components/Input'

export default function Pacientes(){
    const [pacientes, setPacientes] = useState(null)
    const [pacientesFiltrados, setPacientesFiltrados] = useState(null)
    const [search, setSearch] = useState('')
    const navigation = useNavigation()

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
                
                listaPacientes.sort((a, b) => a.nome.localeCompare(b.nome));
                setPacientes(listaPacientes)
                setPacientesFiltrados(listaPacientes)
            })
            .catch((e)=>{
                console.log(e)
            })
        }
        getPacientes()
    },[])

    const limparBusca = useCallback(() => {
        setSearch('')
        setPacientesFiltrados(pacientes)
    }, [pacientes])

    const HeaderSearch = useCallback(() => (
        <View style={{ flexDirection: 'row', gap: 2, right: 20}}>
            <Input
                legenda='Procure por nome ou número do SUS'
                valor={search}
                callback={newText => {
                    setSearch(newText);
                    const texto = newText.trim().toLowerCase();
                    if (!texto) {
                        setPacientesFiltrados(pacientes);
                        return;
                    }
                    const filtrados = (pacientes || [])
                        .filter(item =>
                            item.nome.toLowerCase().includes(texto) ||
                            (item.sus && item.sus.toString().toLowerCase().includes(texto))
                        )
                        .sort((a, b) => a.nome.localeCompare(b.nome));
                    setPacientesFiltrados(filtrados);
                }}
            />
            <TouchableOpacity onPress={limparBusca} style={{ backgroundColor: '#666', padding: 10, borderRadius: 5, justifyContent: 'center'}}>
                <Text style={{ color: 'white' }}>Limpar</Text>
            </TouchableOpacity>
        </View>
    ), [search, pacientes, setPacientesFiltrados, setSearch, limparBusca]);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Pacientes',
            headerTitleAlign: 'center',
            headerTitleStyle: { fontSize: 36 },
            headerRight: HeaderSearch,
            headerLeft: ()=> (
                    <TouchableOpacity onPress={()=> navigation.openDrawer()} style={{left: 20}}>
                        <Feather name='menu' size={22} color="#000" />
                    </TouchableOpacity>
            )
        });
    }, [navigation, HeaderSearch]);

    return (
        <View style={styles.container}>
            <View style={{width: '90%', marginTop: 35}}>
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