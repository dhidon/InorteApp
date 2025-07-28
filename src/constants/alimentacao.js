import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { AnamneseContext } from '../contexts/anamneseContext'
import { styles } from '../styles/Styles'

import Input from '../components/Input'
import Slider from '@react-native-community/slider'
import Seletor from '../components/Seletor'
import ListaAlternativas from '../components/ListaAlternativas'
import { consistenciasAceitas, problemaAlimentacao, simOuNao } from './anamneseOptions'

export default function Alimentacao(){
    const {paciente, setPaciente} = useContext(AnamneseContext)

    return (
        <>
            <Text style={styles.titulo}>Alimentação</Text>
                    
                <View style={styles.inputArea}>
                    <Text style={styles.normal}>Mamou quando criança?</Text>
                    <Seletor
                        selecionado={paciente.mamou}
                        aoMudar={value=>setPaciente(prev => ({...prev, mamou: value}))}
                        lista={simOuNao}
                    />
                    {paciente.mamou === 'sim' &&
                    <>
                        <Input
                            titulo='Aleitamento materno exclusivo até quantos meses?'
                            valor={paciente.leiteMatExclMes}
                            callback={newText=>setPaciente(prev =>({...prev, leiteMatExclMes: newText}))}
                        />
                        <Input
                            titulo='Mamou até quantos meses?'
                            valor={paciente.mamouIdade}
                            callback={newText=>setPaciente(prev => ({...prev, mamouIdade: newText}))}
                        />
                    </>}
                    <Text style={styles.normal}>Usou mamadeira?</Text>
                    <Seletor
                        selecionado={paciente.mamadeira}
                        aoMudar={value=>setPaciente(prev => ({...prev, mamadeira: value}))}
                        lista={simOuNao}
                    />
                    <Text style={styles.normal}>Usou chupeta?</Text>
                    <Seletor
                        selecionado={paciente.chupeta}
                        aoMudar={value=>setPaciente(prev =>({...prev, chupeta: value}))}
                        lista={simOuNao}
                    />

                    <Text style={styles.normal}>Com qual idade foi feita a introdução alimentar?</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 15, gap: 15}}>
                            <Slider
                                minimumValue={0}
                                maximumValue={10}
                                value={0}
                                onValueChange={newValue=>setPaciente(prev => ({...prev, idadeIntroAlimentar: newValue}))}
                                step={1}
                                style={{width: '90%', marginTop: 10}}
                            />
                            <Text style={styles.normal}>{paciente.idadeIntroAlimentar}</Text>
                        </View>

                    <Text style={styles.normal}>Apresentou dificuldade na introdução alimentar?</Text>
                    <Seletor
                        selecionado={paciente.difIntroAlimentar}
                        aoMudar={value=>setPaciente(prev =>({...prev, difIntroAlimentar: value}))}
                        lista={simOuNao}
                    />
                    {paciente.difIntroAlimentar === 'sim' &&
                    <>
                        <Input
                            titulo='Quais?'
                            valor={paciente.difAlimentar}
                            callback={newText=>setPaciente(prev => ({...prev, difAlimentar: newText}))}
                        />
                    </>
                    }
                    <Text style={[styles.normal, {marginBottom: 5}]}>As respostas a seguir devem ser referentes ao estado atual do paciente</Text>
                    <ListaAlternativas
                        titulo='Quais das consistencias alimentares asseguir o adolescente aceita bem?'
                        lista={consistenciasAceitas}
                        chave='consistenciasAceitas'
                    />
                    <ListaAlternativas
                        titulo='Apresentou algum problema na alimentação?'
                        lista={problemaAlimentacao}
                        chave='problemaAlimentacao'
                    />
                    <Input
                        titulo="Apresenta alguma seletividade em relação a comida?"
                        valor={paciente.seletividadeAlimentar}
                        callback={newText=>setPaciente(prev => ({...prev, seletividadeAlimentar: newText}))}
                    />    
                </View>
        </>
    )
}