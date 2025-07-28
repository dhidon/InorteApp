import React, { useContext, useEffect } from 'react'
import { Text, View, TextInput } from 'react-native'
import { AnamneseContext } from '../contexts/anamneseContext'
import { styles } from '../styles/Styles'

import Seletor from '../components/Seletor'
import ListaAlternativas from '../components/ListaAlternativas'
import Input from '../components/Input'
import { itensSignificantesCrianca, simOuNao, itensSignificantes } from './anamneseOptions'

export default function Desenvolvimento(){
    const {paciente, setPaciente} = useContext(AnamneseContext)

    function atualizarComportamento(id, novoValor) {
        const newComportamentos = paciente.comportamentos.map(opcao => {
            if (opcao.value === id) {
                return {...opcao, idade: novoValor}
            }
            return opcao
        })
        setPaciente(prev => ({...prev, comportamentos: newComportamentos}))
    }

    useEffect(() => {
        if (!paciente.comportamentos) {
            setPaciente(prev => ({...prev, comportamentos: comportamentos}))
        }
    }, [])

    return (
        <>
            {paciente.grupo === 'adolescente'
            ?(
                <>
                    <Text style={styles.titulo}>Desenvolvimento</Text>
                    
                    <View style={styles.inputArea}>
                        <Text style={styles.normal}>Teve algum problema de crescimento ou desenvolvimento durante os primeiros anos de vida?</Text>
                        <Seletor
                            selecionado={paciente.problemaCrescimento}
                            aoMudar={value=>setPaciente(prev => ({...prev, problemaCrescimento: value}))}
                            lista={simOuNao}
                        />
                        <ListaAlternativas
                            titulo='Dentre os itens a seguir, pressione aqueles que estiveram presentes (com grau de significância) durante a infância nos primeiros anos de vida:'
                            chave='itensSignificantes'
                            lista={itensSignificantes}
                        />
                        <Text style={styles.normal}>Indique a idade aproximada em que seu filho apresentou pela primeira vez os comportamentos a seguir:</Text>
                        <Text style={{fontSize: 13, marginTop: 5, marginBottom: 10}}>Obs.: Assinale 'nunca' se ele nunca demonstrou o comportamento listado. Se não se lembra a idade exata, assinale como cedo, na média ou tarde em relação a outras crianças.</Text>
                        {paciente.comportamentos?.map((item, index) => (
                            <View key={index}>
                                <Text>{item.label}</Text>
                                <TextInput
                                    style={styles.input}
                                    value={paciente.comportamentos[index].idade}
                                    onChangeText={newText => atualizarComportamento(item.value, newText)}
                                />
                            </View>
                        ))}
                    </View>
                </>
            )
            :(
                <>
                
                    <Text style={styles.titulo}>Desenvolvimento neuropsicomotor</Text>
                    
                    <View style={styles.inputArea}>
                        <Input
                            titulo='Com qual idade passou a sentar sem apoio?'
                            valor={paciente.sentouSemApoio}
                            callback={newText=>setPaciente({...paciente, sentouSemApoio: newText})}
                        />
                        <Input
                            titulo='Com qual idade ele engatinhou?'
                            valor={paciente.engatinhou}
                            callback={newText=>setPaciente({...paciente, engatinhou: newText})}
                        />
                        <Input
                            titulo='Com qual idade começou a andar sem suporte'
                            valor={paciente.andouSemSuporte}
                            callback={newText=>setPaciente({...paciente, andouSemSuporte: newText})}
                        />                    

                        <Text style={styles.normal}>As respostas a seguir devem levar em consideração o estado atual do paciente</Text>

                        <Text style={styles.normal}>Apresenta controle dos esfincteres?</Text>
                        <Seletor
                            selecionado={paciente.controlaEsfincter}
                            aoMudar={value=>setPaciente({...paciente, controlaEsfincter: value})}
                            lista={simOuNao}
                        />
                        <Text style={styles.normal}>Usa fraldas</Text>
                        <Seletor
                            selecionado={paciente.fraldas}
                            aoMudar={value=>setPaciente({...paciente, fraldas: value})}
                            lista={simOuNao}
                        />
                        <ListaAlternativas
                            titulo='Dentre os itens a seguir, pressione aqueles que estiveram presentes (com grau de significância) durante a infância nos primeiros anos de vida'
                            lista={itensSignificantesCrianca}
                            chave='itensSignificantesCrianca'
                        />
                        <Text style={styles.normal}>Apresenta manipulação de objetos com os dedos</Text>
                        <Seletor
                            selecionado={paciente.manipObjDedos}
                            aoMudar={value=>setPaciente({...paciente, manipObjDedos: value})}
                            lista={simOuNao}
                        />
                        <Text style={styles.normal}>Pratica algum esporte?</Text>
                        <Seletor
                            selecionado={paciente.praticaEsporte}
                            aoMudar={valor=>setPaciente({...paciente, praticaEsporte: valor})}
                            lista={simOuNao}
                        />
                        {paciente.praticaEsporte === 'sim' &&
                        <Input
                            titulo='Qual esporte?'
                            valor={paciente.esporte}
                            callback={newText=>setPaciente({...paciente, esporte: newText})}
                        />}
                        <Text style={styles.normal}>Pratica autoagressão?</Text>
                        <Seletor
                            selecionado={paciente.autoagressao}
                            aoMudar={value=>setPaciente({...paciente, autoagressao: value})}
                            lista={simOuNao}
                        />
                        <Text style={styles.normal}>Pratica heteroagressão?</Text>
                        <Seletor
                            selecionado={paciente.heteroagressao}
                            aoMudar={value=>setPaciente({...paciente, heteroagressao: value})}
                            lista={simOuNao}
                        />
                    </View>
                </>
            )}
            
        </>
    )
}