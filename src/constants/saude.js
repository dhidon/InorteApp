import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { AnamneseContext } from '../contexts/anamneseContext'
import { styles } from '../styles/Styles'

import Seletor from '../components/Seletor'
import ListaAlternativas from '../components/ListaAlternativas'
import { condicoesFilho, fatoresDif, simOuNao } from './anamneseOptions'

export default function Saude(){
    const {paciente, setPaciente} = useContext(AnamneseContext)

    return (
        <>
            <Text style={styles.titulo}>Saúde geral</Text>

            <View style={styles.inputArea}>
                <ListaAlternativas
                    titulo='Pressione as condições e doenças que o paciente já teve'
                    lista={condicoesFilho}
                    chave='condicoesFilho'
                />
                <Text style={styles.normal}>As respostas a seguir devem ser referentes ao estado atual do paciente</Text>
                <ListaAlternativas
                    titulo='Quais fatores você acha que podem contribuir para as dificuldades do paciente?'
                    lista={fatoresDif}
                    chave='fatoresDif'
                />
                <Text style={styles.normal}>Faz uso de alguma medicação?</Text>
                <Seletor
                    lista={simOuNao}
                    selecionado={paciente.medicacao?.usa}
                    aoMudar={value=>setPaciente(prev => ({...prev, medicacao: {...prev.medicacao, usa: value}}))}
                />
                {paciente.medicacao?.usa === 'sim' &&
                <View style={{width: '100%', gap: 7, marginTop: 7}}>
                    <TextInput
                        style={styles.input}
                        value={paciente.medicacao?.nome}
                        onChangeText={newText=>setPaciente(prev => ({...prev, medicacao: {...prev.medicacao, nome: newText}}))}
                        placeholder='Qual o nome da medicação que o paciente está tomando?'
                    />
                    <TextInput
                        style={styles.input}
                        value={paciente.medicacao?.motivo}
                        onChangeText={newText=>setPaciente(prev => ({...prev, medicacao: {...prev.medicacao, motivo: newText}}))}
                        placeholder='Qual o motivo do uso desta medicação?'
                    />
                    <TextInput
                        style={styles.input}
                        value={paciente.medicacao?.receitadaPor}
                        onChangeText={newText=>setPaciente(prev => ({...prev, medicacao: {...prev.medicacao, receitadaPor: newText}}))}
                        placeholder='Quem receitou esta medicação para o paciente?'
                    />
                </View>
                }
            </View>
        </>
    )
}