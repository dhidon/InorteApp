import React, { useContext } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from '../styles/Styles'
import { AnamneseContext } from '../contexts/anamneseContext'

export default function ListaAlternativas( {lista, chave, titulo} ){
    const {paciente, setPaciente} = useContext(AnamneseContext)

    function handlePress(item, index){
        const newList = [...lista]
        newList[index].value = item.value === 'não' ? 'sim' : 'não'
        setPaciente(prev => ({...prev, [chave]: newList}))
    }
 
return (
    <>
        <Text style={[styles.normal, {marginBottom: 5}]}>{titulo}</Text>
        {lista.map((item, index)=>{
            return <TouchableOpacity key={index} onPress={() => handlePress(item, index)}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1}}>
                    <Text style={{ flexShrink: 1, flexWrap: 'wrap', width: '100%' }}>{item.label}</Text>
                    <Text style={{fontWeight: 'bold'}}>{item.value}</Text>
                </View>
            </TouchableOpacity>
        })}
    </>
 )
}