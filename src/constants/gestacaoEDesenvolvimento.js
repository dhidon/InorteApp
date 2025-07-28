import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { AnamneseContext } from '../contexts/anamneseContext'
import { styles } from '../styles/Styles'

import Input from '../components/Input'
import Seletor from '../components/Seletor'
import { simOuNao, parto } from './anamneseOptions'

export default function GestDesenvolv(){
    const {paciente, setPaciente} = useContext(AnamneseContext)
    
    return (
        <>
            <Text style={styles.titulo}>Gestação e desenvolvimento</Text>

            <View style={styles.inputArea}>
                <Text style={styles.normal}>A gestação foi planejada?</Text>
                <Seletor
                    selecionado={paciente.gestacaoPlanejada}
                    aoMudar={value=>setPaciente(prev => ({...prev, gestacaoPlanejada: value}))}
                    lista={simOuNao}
                />
                <Text style={styles.normal}>Realizou pré-natal?</Text>
                <Seletor
                    selecionado={paciente.prenatal}
                    aoMudar={value=>setPaciente(prev => ({...prev, prenatal: value}))}
                    lista={simOuNao}
                />
                <Text style={styles.normal}>Teve alguma intercorrência durante a gravidez?</Text>
                <Seletor
                    selecionado={paciente.intercorrencia}
                    aoMudar={value=>setPaciente(prev => ({...prev, intercorrencia: value}))}
                    lista={simOuNao}
                />
                {paciente.intercorrencia === 'sim' && (
                    <Input
                        titulo='Qual?'
                        valor={paciente.qualIntercorrencia}
                        callback={newText=>setPaciente(prev => ({...prev, qualIntercorrencia: newText}))}
                    />
                )}
                <Text style={styles.normal}>Fez uso de medicamentos durante a gestação?</Text>
                <Seletor
                    selecionado={paciente.medicamentoGestacao}
                    aoMudar={value=>setPaciente(prev => ({...prev, medicamentoGestacao: value}))}
                    lista={simOuNao}
                />
                <Text style={styles.normal}>Qual foi o tipo de parto e por que?</Text>
                <Seletor
                    selecionado={paciente.parto?.tipo}
                    aoMudar={valor=>setPaciente(prev => ({...prev, parto: {...prev.parto, tipo: valor}}))}
                    lista={parto}
                />
                <View style={{height: 7}}></View>
                <Input
                    valor={paciente.parto?.motivo}
                    legenda='Qual o motivo?'
                    callback={newText=>setPaciente(prev => ({...prev, parto: {...prev.parto, motivo: newText}}))}
                />
                <Input
                    titulo='A criança nasceu com quantas semanas?'
                    valor={paciente.nasceuSemanas}
                    callback={newText=>setPaciente(prev => ({...prev, nasceuSemanas: newText}))}
                />
            </View>

            <View style={[styles.inputArea, {gap: 7}]}>
                <Input
                    titulo='APGAR'
                    valor={paciente.apgar?.primeiroMinuto}
                    legenda='1º minuto'
                    callback={newText=>setPaciente(prev => ({...prev, apgar: {...prev.apgar, primeiroMinuto: newText}}))}
                />
                <Input
                    valor={paciente.apgar?.quintoMinuto}
                    legenda='5º minuto'
                    callback={newText=>setPaciente(prev => ({...prev, apgar: {...prev.apgar, quintoMinuto: newText}}))}
                />
                <Input
                    valor={paciente.apgar?.peso}
                    legenda='Peso'
                    callback={newText=>setPaciente(prev => ({...prev, apgar: {...prev.apgar, peso: newText}}))}
                />
                <Input
                    valor={paciente.apgar?.comprimento}
                    legenda='Comprimento'
                    callback={newText=>setPaciente(prev => ({...prev, apgar: {...prev.apgar, comprimento: newText}}))}
                />
            </View>

            <View style={styles.inputArea}>
                <Text style={styles.normal}>Houve algum problema com o bebê logo que nasceu?</Text>
                <Seletor
                    selecionado={paciente.problemaNacimento}
                    aoMudar={valor=>setPaciente(prev => ({...prev, problemaNascimento: valor}))}
                    lista={simOuNao}
                />
                <Text style={styles.normal}>O bebê precisou de oxigênio?</Text>
                <Seletor
                    selecionado={paciente.oxigenio}
                    aoMudar={valor=>setPaciente(prev => ({...prev, oxigenio: valor}))}
                    lista={simOuNao}
                />
                <Text style={styles.normal}>Nasceu cianótico?</Text>
                <Seletor
                    selecionado={paciente.cianotico}
                    aoMudar={valor=>setPaciente(prev => ({...prev, cianotico: valor}))}
                    lista={simOuNao}
                />
                <Text style={styles.normal}>O bebê chorou logo?</Text>
                <Seletor
                    selecionado={paciente.chorou}
                    aoMudar={valor=>setPaciente(prev => ({...prev, chorou: valor}))}
                    lista={simOuNao}
                />
                <Text style={styles.normal}>O bebê apresentava sinais de icterícia?</Text>
                <Seletor
                    selecionado={paciente.ictericia}
                    aoMudar={valor=>setPaciente(prev => ({...prev, ictericia: valor}))}
                    lista={simOuNao}
                />
                <Text style={styles.normal}>Precisou fazer fototerapia?</Text>
                <Seletor
                    selecionado={paciente.fototerapia}
                    aoMudar={valor=>setPaciente(prev => ({...prev, fototerapia: valor}))}
                    lista={simOuNao}
                />
            </View>
        </>
    )
}