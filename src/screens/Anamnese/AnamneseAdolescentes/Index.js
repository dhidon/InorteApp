import React, { useContext, useEffect } from 'react'
import { View, Text, KeyboardAvoidingView, TextInput, ScrollView } from 'react-native'
import { styles, colors } from '../../../styles/Styles'

import { AnamneseContext } from '../../../contexts/anamneseContext'
import Header from '../../../components/Header'

export default function AnmenseAdolescentes(){
    const { setPaciente, paciente } = useContext(AnamneseContext)



    const formatarData = (texto, callback, key) => {
        let textoFiltrado = texto.replace(/\D/g, '')
        if (textoFiltrado.length >= 5) {
            textoFiltrado = textoFiltrado.substring(0, 2) + '/' + textoFiltrado.substring(2, 4) + '/' + textoFiltrado.substring(4,8)
        } else if (textoFiltrado.length >= 3) {
            textoFiltrado = textoFiltrado.substring(0, 2) + '/' + textoFiltrado.substring(2, 4)
        }
        callback({...paciente, [key]: textoFiltrado})
    }

    const formatarSus = (texto) => {
        let textoFiltrado = texto.replace(/\D/g, '')
        textoFiltrado = textoFiltrado.match(/.{1,4}/g)?.join(' ') || textoFiltrado
        setPaciente({...paciente, sus: textoFiltrado})
    }

    
    useEffect(()=>{
        if (!paciente.nascimento) return;
    
        const partesData = paciente.nascimento.split('/');
        if (partesData.length !== 3) return;
    
        const dataNascimento = new Date(`${partesData[2]}-${partesData[1]}-${partesData[0]}`);
        const hoje = new Date();
    
        let idade = hoje.getFullYear() - dataNascimento.getFullYear();
        const mes = hoje.getMonth() - dataNascimento.getMonth();
    
        if (mes < 0 || (mes === 0 && hoje.getDate() < dataNascimento.getDate())) {
            idade -= 1;
        }
    
        setPaciente({ ...paciente, idade: idade });
    }, [paciente.nascimento])

    const formatarCep = (texto) => {
        let textoFiltrado = texto.replace(/\D/g,'')
        if (textoFiltrado.length > 5) {
            textoFiltrado = `${textoFiltrado.substring(0,2)}.${textoFiltrado.substring(2,5)}-${textoFiltrado.substring(5,8)}`
        } else if(textoFiltrado.length > 2) {
            textoFiltrado = `${textoFiltrado.substring(0,2)}.${textoFiltrado.substring(2)}`
        }

        setPaciente({...paciente, cep: textoFiltrado})
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior={'height'}>
            <ScrollView>
                <Header setor={'Anamnese de adolescentes'}/>
                
                <View style={styles.contentArea}>

                    <View style={styles.inputArea}>
                        <Text style={styles.normal}>Data:</Text>
                        <TextInput 
                            style={styles.input} 
                            onChangeText={texto=>formatarData(texto, setPaciente, 'data')}
                            placeholder='DD/MM/AAAA'
                            value={paciente.data}
                            keyboardType='numeric'
                        />
                    </View>

                    <Text style={styles.titulo}>1. Dados de Identificação</Text>

                    <View style={styles.inputArea}>
                        <Text style={styles.normal}>Nome completo:</Text>
                        <TextInput
                            placeholder={paciente.nome}
                            style={styles.input}
                            onChangeText={newText => setPaciente({...paciente, nome: newText})}
                            value={paciente.nome}
                        />
                        <Text style={styles.normal}>Nº SUS:</Text>
                        <TextInput
                            value={paciente.sus}
                            style={[styles.input, {width: 120}]}
                            placeholder='___ ___ ___ ___'
                            onChangeText={formatarSus}
                            maxLength={19}
                            keyboardType="numeric"
                        />
                    </View>

                    <View style={styles.inputArea}>
                        <Text style={styles.normal}>Data de nascimento:</Text>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <TextInput
                                style={[styles.input, {width: '70%'}]}
                                placeholder='DD/MM/AAAA'
                                onChangeText={texto=>formatarData(texto, setPaciente, 'nascimento')}
                                value={paciente.nascimento}
                                keyboardType='numeric'
                            />
                            <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 30}}>
                                <Text style={styles.normal}>Idade:</Text>
                                <Text style={{ borderRadius: 3, padding: 5, backgroundColor: colors.primary, color: colors.white, height: 40, fontSize: 18}}>
                                    {paciente.idade ? paciente.idade : '0'}
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.inputArea, {gap: 7}]}>
                        <Text style={styles.normal}>Endereço:</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={(newText) => setPaciente({...paciente, enderecoendereco: newText})}
                            value={paciente.endereco}
                            placeholder='Rua e número da casa'
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={(newText) => setPaciente({...paciente, endereco: newText})}
                            value={paciente.endereco}
                            placeholder='Bairro'
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={(newText) => setPaciente({...paciente, cidadeUf: newText})}
                            value={paciente.cidadeUf}
                            placeholder='Cidade, UF'
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={formatarCep}
                            value={paciente.cep}
                            placeholder='CEP'
                            keyboardType='numeric'
                        />
                    </View>

                    <View style={styles.inputArea}>
                        <Text style={styles.normal}>Informante:</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={(newText) => setPaciente({...paciente, informante: newText})}
                            value={paciente.informante}
                            placeholder='Qual o nome de quem está informando?'
                        />
                    </View>

                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}