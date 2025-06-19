import React from 'react'
import { View, Text, Touchable opacity } from 'react-native'
import Styles from '../Styles'

export default function ListaAlternativas( {data, callback, paciente, entrada} ){
 function handlePress(){
  const newList = [...data]
  newList[index].value = value === 'não' ? 'sim' : 'não'
  callback({...paciente, entrada: newList})
 }
 
 return (
 {data.map((item, index)=>{
  <TouchableOpacity key={index} onPress={handlePress}>
   <View style={{flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1}}>
    <Text>{item.label}</Text>
    <Text style={{fontWeight: 'bold'}}>{item.value}</Text>
   </View>
  </TouchableOpacity>
 })}
 )
}