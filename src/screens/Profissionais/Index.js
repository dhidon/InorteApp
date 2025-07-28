import React, { useContext } from "react";
import { View, Text, TouchableOpacity, Alert, Platform } from "react-native";
import { styles } from "../../styles/Styles";
import { useNavigation } from "@react-navigation/native";

import { AnamneseContext } from "../../contexts/anamneseContext";
import { AuthContext } from "../../contexts/auth";

import Feather from '@expo/vector-icons/Feather';
import Input from "../../components/Input";

export default function Profissionais(){
    const {paciente, setPaciente, sendToDb} = useContext(AnamneseContext)
    const { user } = useContext(AuthContext)
    const navigation = useNavigation()

    async function handleSend() {
      const confirm = Platform.OS === 'web'
        ? window.confirm('Tem certeza que deseja enviar os dados do paciente e voltar para a tela inicial?')
        : true;
    
      if (confirm) {
        await sendToDb(user);
      } else {
        Alert.alert(
          'Atenção!',
          'Tem certeza que deseja enviar os dados do paciente e voltar para a tela inicial?',
          [
            { text: 'Cancelar', style: 'cancel' },
            {
              text: 'Enviar',
              onPress: async () => {
                await sendToDb(user);
              }
            }
          ]
        );
      }
    }
    
      

    return (
          <View style={[styles.container, {justifyContent: 'center', alignItems: 'center'}]}>
            <View style={styles.inputArea}>
              <Input
                titulo='Anamnese realizada com:'
                valor={paciente.medicoResponsavel}
                callback={newText=>setPaciente(prev => ({...prev, medicoResponsavel: newText}))}
              />
              <Input
                titulo='Técnico:'
                valor={paciente.tecnicoResponsavel}
                callback={newText=>setPaciente(prev => ({...prev, tecnicoResponsavel: newText}))}
              />
            </View>



            <View style={{flexDirection: 'row', flex: 1, justifyContent: 'space-around', marginTop: 20, gap: 30}}>

                <TouchableOpacity style={[styles.buttonArea, {width: 120, flexDirection: 'row', gap: 5, alignItems: 'center'}]} onPress={()=>navigation.goBack()}>
                <Feather name="arrow-left" size={24} color="#FFF" />
                    <Text style={styles.buttonText}>Voltar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.buttonArea, {width: 120, flexDirection: 'row', gap: 5}]} onPress={handleSend}>
                    <Text style={styles.buttonText}>Enviar</Text>
                </TouchableOpacity>

            </View>
          </View>
    )
}