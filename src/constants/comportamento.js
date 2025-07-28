import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { AnamneseContext } from '../contexts/anamneseContext'
import { styles } from '../styles/Styles'

import Input from '../components/Input'
import Seletor from '../components/Seletor'
import ListaAlternativas from '../components/ListaAlternativas'
import { caracteristicasSociais, comportamento, simOuNao } from './anamneseOptions'

export default function Comportamento(){
    const {paciente, setPaciente} = useContext(AnamneseContext)
    
    return (
        <>
            <Text style={styles.titulo}>Desenvolvimento social</Text>

            <View style={styles.inputArea}>
                <ListaAlternativas
                    titulo='Marque quais destas características sociais o paciente apresenta'
                    lista={caracteristicasSociais}
                    chave='caracteristicasSociais'
                />
                <Input
                    titulo="Quais são as atividades favoritas do seu filho?"
                    valor={paciente.atividadesFavoritas}
                    callback={newText=>setPaciente(prev => ({...prev, atividadesFavoritas: newText}))}
                />
            </View>

                <Text style={styles.titulo}>Comportamento</Text>

            <View style={styles.inputArea}>
                <ListaAlternativas
                    titulo='Marque as opções que descrevam comportamentos apresentados pelo paciente'
                    lista={comportamento}
                    chave='comportamento'
                />

                <Text style={styles.normal}>Seu filho tem problema com limites?</Text>
                <Seletor
                    selecionado={paciente.probLimites}
                    lista={simOuNao}
                    aoMudar={value=>setPaciente(prev =>({...prev, probLimites: value}))}
                />
                <Text style={styles.normal}>O paciente costuma cumprir o que lhe é solicitado ou pedido?</Text>
                <Seletor
                    selecionado={paciente.cumprePedidos}
                    lista={simOuNao}
                    aoMudar={value=>setPaciente(prev => ({...prev, cumprePedidos: value}))}
                />
                <Input
                    titulo='Quais as estratégias mais bem sucedidas que você usa com seu filho e que dão certo?'
                    valor={paciente.estrategiasUsadas}
                    callback={newText=>setPaciente(prev =>({...prev, estrategiasUsadas: newText}))}
                />
                <Text style={styles.normal}>O paciente consegue ser independente nas atividades de vida diárias?</Text>
                <Seletor
                    selecionado={paciente.independenciaAtiv}
                    lista={simOuNao}
                    aoMudar={value=>setPaciente(prev => ({...prev, independenciaAtiv: value}))}
                />
            </View>
        </>
    )
}