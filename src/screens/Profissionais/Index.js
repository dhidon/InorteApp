import React, { useContext } from "react";
import { View, Text, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import { styles } from "../../styles/Styles";

import { AnamneseContext } from "../../contexts/anamneseContext";

import Header from "../../components/Header";
import Input from "../../components/Input";

export default function Profissionais(){
    const {paciente, setPaciente, enviarDadosAnamn} = useContext(AnamneseContext)

    function handleSend(){
        enviarDadosAnamn(paciente)
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior='height'>
            <Header setor='Profissionais responsáveis'/>

            <View style={styles.contentArea}>

                <View style={styles.inputArea}>
                    <Input
                        titulo='Anamnese realizada com'
                        valor={paciente.medicoResponsavel}
                        callback={newText=>setPaciente({...paciente, medicoResponsavel: newText})}
                    />
                    <Input
                        titulo='Técnico:'
                        valor={paciente.tecnicoResponsavel}
                        callback={newText=>setPaciente({...paciente, tecnicoResponsavel: newText})}
                    />
                </View>

                <TouchableOpacity style={styles.buttonArea} onPress={()=>console.log(paciente)}>
                    <Text style={styles.buttonText}>Enviar dados</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}