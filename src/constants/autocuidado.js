import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { AnamneseContext } from '../contexts/anamneseContext'
import { styles } from '../styles/Styles'

import Seletor from '../components/Seletor'
import { difAutocuidado, simOuNao } from './anamneseOptions'

export default function Autocuidado(){
    const {paciente, setPaciente} = useContext(AnamneseContext)

    return (
        <>
            <Text style={styles.titulo}>Autocuidado</Text>

            <View style={styles.inputArea}>
                <Text style={styles.normal}>Toma banho sozinho?</Text>
                <Seletor
                    selecionado={paciente.banhoSozinho}
                    aoMudar={value=>setPaciente({...paciente, banhoSozinho: value})}
                    lista={difAutocuidado}
                />
                <Text style={styles.normal}>Escova os dentes sozinho?</Text>
                <Seletor
                    selecionado={paciente.escovaDentesSozinho}
                    aoMudar={value=>setPaciente({...paciente, escovaDentesSozinho: value})}
                    lista={difAutocuidado}
                />
                <Text style={styles.normal}>Limpa-se sozinho?</Text>
                <Seletor
                    selecionado={paciente.limpaSozinho}
                    aoMudar={value=>setPaciente({...paciente, limpaSozinho: value})}
                    lista={difAutocuidado}
                />
                <Text style={styles.normal}>Ao cuidar da própria higiene, atrapalha-se com a sequência de tarefas?</Text>
                <Seletor
                    selecionado={paciente.atrapalhaComHigiene}
                    aoMudar={value=>setPaciente({...paciente, atrapalhaComHigiene: value})}
                    lista={simOuNao}
                />
                <Text style={styles.normal}>Veste-se sozinho?</Text>
                <Seletor
                    selecionado={paciente.vesteSozinho}
                    aoMudar={value=>setPaciente({...paciente, vesteSozinho: value})}
                    lista={difAutocuidado}
                />
                <Text style={styles.normal}>Amarra os cadarços sozinho?</Text>
                <Seletor
                    selecionado={paciente.amarraCadarcos}
                    aoMudar={value=>setPaciente({...paciente, amarraCadarcos: value})}
                    lista={difAutocuidado}
                />
            </View>
        </>
    )
}