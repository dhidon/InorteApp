import React, { use, useContext } from 'react'
import { Text, View } from 'react-native'
import { AnamneseContext } from '../contexts/anamneseContext'
import { styles } from '../styles/Styles'

import Input from '../components/Input'
import Seletor from '../components/Seletor'
import { simOuNao } from './anamneseOptions'

export default function Sono(){
    const {paciente, setPaciente} = useContext(AnamneseContext)

    return (
        <>
            <Text style={styles.titulo}>Sono e desenvolvimento</Text>

                <View style={styles.inputArea}>
                    <Input
                        titulo='Como é o sono?'
                        legenda='É tranquilo, agitado, acorda durante a noite...?'
                        valor={paciente.formaSono}
                        callback={newText=>setPaciente(prev => ({...prev, formaSono: newText}))}
                    />
                    <Text style={styles.normal}>Dorme sozinho?</Text>
                    <Seletor
                        selecionado={paciente.dormeSozinho}
                        aoMudar={value=>setPaciente(prev => ({...prev, dormeSozinho: value}))}
                        lista={simOuNao}
                    />
                    <Input
                        titulo="Compartilha a cama com:"
                        valor={paciente.quemCompartilhaCama}
                        callback={newText=>setPaciente(prev => ({...prev, quemCompartilhaCama: newText}))}
                    />
                    <Input
                        titulo="Dorme que horas?"
                        valor={paciente.horarioDormir}
                        callback={newText=> setPaciente(prev => ({...prev, horarioDormir: newText}))}
                    />
                    <Input
                        titulo="Acorda que horas?"
                        valor={paciente.horarioAcordar}
                        callback={newText=> setPaciente(prev => ({...prev, horarioAcordar: newText}))}
                    />
                </View>
        </>
    )
}