import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { AnamneseContext } from '../contexts/anamneseContext'
import { styles } from '../styles/Styles'

import Input from '../components/Input'
import Seletor from '../components/Seletor'
import { simOuNao } from './anamneseOptions'

export default function DesempenhoAcademico(){
    const {paciente, setPaciente} = useContext(AnamneseContext)

    return (
        <>
            <Text style={styles.titulo}>Desempenho acadêmico</Text>

            <View style={styles.inputArea}>
                <Text style={styles.normal}>Frequenta a escola?</Text>
                <Seletor
                    selecionado={paciente.escola?.frequenta}
                    aoMudar={value=>setPaciente(prev => ({...prev, escola: {...prev.escola, frequenta: value}}))}
                    lista={simOuNao}
                />

                {paciente.escola?.frequenta === 'sim' && (
                    <Input
                        titulo='Qual o nome da escola?'
                        valor={paciente.escola?.nome}
                        callback={newText=>setPaciente(prev => ({...prev, escola: {...prev.escola, nome: newText}}))}
                    />
                )}
                <Text style={styles.normal}>Faz AEE?</Text>
                <Seletor
                    selecionado={paciente.escola?.aee}
                    aoMudar={value=>setPaciente(prev => ({...prev, escola: {...prev.escola, aee: value}}))}
                    lista={simOuNao}
                />
                <Input
                    titulo='Qual a série?'
                    valor={paciente.escola?.serie}
                    callback={newText=>setPaciente(prev => ({...prev, escola: {...prev.escola, serie: newText}}))}
                />
                <Input
                    titulo='Qual o turno?'
                    valor={paciente.escola?.turno}
                    callback={newText=>setPaciente(prev => ({...prev, escola: {...prev.escola, turno: newText}}))}
                />
                <Input
                    titulo='Apresenta dificuldade na aprendizagem?'
                    valor={paciente.difAprend}
                    callback={newText=>setPaciente(prev => ({...prev, difAprend: newText}))}
                />
                <Input
                    titulo='Como é o comportamento no âmbito escolar?'
                    valor={paciente.comportEscola}
                    callback={newText=>setPaciente(prev => ({...prev, comportEscola: newText}))}
                />
            </View>
        </>
    )
}