import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { AnamneseContext } from '../contexts/anamneseContext'
import { styles } from '../styles/Styles'

import Seletor from '../components/Seletor'
import ListaAlternativas from '../components/ListaAlternativas'
import { habilidadesMotoras, simOuNao } from './anamneseOptions'

export default function HabilidadesFisicas(){
    const {paciente, setPaciente} = useContext(AnamneseContext)

    return (
        <>
            <Text style={styles.titulo}>Habilidades físicas e motoras</Text>

            <View style={styles.inputArea}>
                <ListaAlternativas
                    titulo='Assinale as características que seu filho aprensenta'
                    lista={habilidadesMotoras}
                    chave='habilidadesMotoras'
                />
            </View>

            <Text style={styles.titulo}>Visão</Text>

            <View style={styles.inputArea}>

                <Text style={styles.normal}>Consegue manter contato visual por muito tempo?</Text>
                <Seletor
                    selecionado={paciente.contatoVisual}
                    aoMudar={value=>setPaciente(prev => ({...prev, contatoVisual: value}))}
                    lista={simOuNao}
                />
                <Text style={styles.normal}>Inclina a cabeça para olhar?</Text>
                <Seletor
                    selecionado={paciente.inclinaCabeca}
                    lista={simOuNao}
                    aoMudar={value=>setPaciente(prev => ({...prev, inclinaCabeca: value}))}
                />
                <Text style={styles.normal}>Aproxima objetos dos olhos?</Text>
                <Seletor
                    selecionado={paciente.aproximaObjetos}
                    aoMudar={value=>setPaciente(prev => ({...prev, aproximaObjetos: value}))}
                    lista={simOuNao}
                />
                <Text style={styles.normal}>Afasta os objetos?</Text>
                <Seletor
                    selecionado={paciente.afastaObjetos}
                    aoMudar={value=>setPaciente(prev => ({...prev, afastaObjetos: value}))}
                    lista={simOuNao}
                />

                <Text style={styles.normal}>Movimento excessivo dos olhos?</Text>
                <Seletor
                    selecionado={paciente.movimentoOlhos}
                    aoMudar={value=>setPaciente(prev => ({...prev, movimentoOlhos: value}))}
                    lista={simOuNao}
                />
                <Text style={styles.normal}>Já realizou avaliação oftalmológica?</Text>
                <Seletor
                    selecionado={paciente.avOftalmo}
                    aoMudar={value=>setPaciente(prev => ({...prev, avOftalmo: value}))}
                    lista={simOuNao}
                />
                <Text style={styles.normal}>Reclama de dores de cabeça constantes, principalmente na região fronto-temporal?</Text>
                <Seletor
                    selecionado={paciente.dorCabeca}
                    aoMudar={value=>setPaciente(prev => ({...prev, dorCabeca: value}))}
                    lista={simOuNao}
                />

            </View>

            <Text style={styles.titulo}>Audição</Text>

            <View style={styles.inputArea}>

                <Text style={styles.normal}>Apresenta dificuldade auditiva?</Text>
                <Seletor
                    selecionado={paciente.difAuditiva}
                    aoMudar={value=>setPaciente(prev => ({...prev, difAuditiva: value}))}
                    lista={simOuNao}
                />
                <Text style={styles.normal}>Já realizou avaliação?</Text>
                <Seletor
                    selecionado={paciente.realizouAv}
                    aoMudar={value=>setPaciente(prev => ({...prev, realizouAv: value}))}
                    lista={simOuNao}
                />
            </View>
        </>
    )
}