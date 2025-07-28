import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { AnamneseContext } from '../contexts/anamneseContext'
import { styles } from '../styles/Styles'

import Input from '../components/Input'
import Seletor from '../components/Seletor'
import ListaAlternativas from '../components/ListaAlternativas'
import { condDesenvolvAtuais, simOuNao } from './anamneseOptions'

export default function DesenvolvimentoLinguagem(){
    const {paciente, setPaciente} = useContext(AnamneseContext)

    return (
        <>
            <Text style={styles.titulo}>Desenvolvimento da linguagem</Text>
            <View style={styles.inputArea}>
                <Input
                    titulo='Com qual idade começou a balbuciar?'
                    valor={paciente.idadeBalbuciou}
                    callback={newText=>setPaciente(prev => ({...prev, idadeBalbuciou: newText}))}
                />
                <Input
                    titulo='Com qual idade emitiu sílabas?'
                    valor={paciente.idadeSilabas}
                    callback={newText=>setPaciente(prev => ({...prev, idadeSilabas: newText}))}
                />
                <Input
                    titulo='Com que idade emitiu as primeiras palavras?'
                    valor={paciente.idadePriPalavras}
                    callback={newText => setPaciente(prev => ({...prev, idadePriPalavras: newText}))}
                />
                <Input
                    titulo='Com que idade emitiu as primeiras frases?'
                    valor={paciente.idadeFrases}
                    callback={newText => setPaciente(prev => ({...prev, idadeFrases: newText}))}
                />
                <Text style={styles.normal}>Apresentou dificuldades no desenvolvimento da linguagem?</Text>
                <Seletor
                    selecionado={paciente.difDesenvolvimentoLinguagem}
                    aoMudar={value=>setPaciente(prev => ({...prev, difDesenvolvimentoLinguagem: value}))}
                    lista={simOuNao}
                />
                <ListaAlternativas
                    lista={condDesenvolvAtuais}
                    chave='condDesenvolvAtuais'
                    titulo='Marque as alternativas a seguir se baseando no estado atual do paciente'
                />
                <Text style={styles.normal}>Apresenta alguma dificuldade na articulação e pronúncia?</Text>
                <Seletor
                    selecionado={paciente.difArtPronuncia}
                    aoMudar={value=> setPaciente(prev => ({...prev, difArtPronuncia: value}))}
                    lista={simOuNao}
                />
                <Text style={styles.normal}>Apresenta dificuldade no rítmo e entonação de voz?</Text>
                <Seletor
                    selecionado={paciente.difRitVoz}
                    aoMudar={value=> setPaciente(prev => ({...prev, difRitVoz: value}))}
                    lista={simOuNao}
                />
                <Text style={styles.normal}>Repete a última palavra ou frase imediatamente ouvidoa?</Text>
                <Seletor
                    selecionado={paciente.repeteFrase}
                    aoMudar={value=> setPaciente(prev => ({...prev, repeteFrase: value}))}
                    lista={simOuNao}
                />
                <Text style={styles.normal}>Faz confusão entre pronomes (eu, tu, eles)?</Text>
                <Seletor
                    selecionado={paciente.confusaoPron}
                    aoMudar={value=> setPaciente(prev => ({...prev, confusaoPron: value}))}
                    lista={simOuNao}
                />
                <Input
                    titulo='Descreva brevemente alguma dificuldade cognitiva que seu filho apresente'
                    valor={paciente.difCognitiva}
                    callback={newText=>setPaciente(prev => ({...prev, difCognitiva: newText}))}
                />
                <Input
                    titulo='Descreva brevemente alguma habilidade especial que o paciente apresente'
                    valor={paciente.habEpecial}
                    callback={newText=>setPaciente(prev => ({...prev, habEspecial: newText}))}
                />
                <Input
                    titulo='Possui dificuldades na compreensão da linguagem?'
                    valor={paciente.difComprLinguagem}
                    callback={newText=>setPaciente(prev => ({...prev, difComprLinguagem: newText}))}
                />
                <Input
                    titulo='Como reage quando contrariado?'
                    valor={paciente.reageContrariado}
                    callback={newText=>setPaciente(prev => ({...prev, reacaoContrariado: newText}))}
                />
            </View>
        </>
    )
}