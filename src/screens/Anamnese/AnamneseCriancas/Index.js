import React, { useContext} from 'react'
import { View, Text, KeyboardAvoidingView, ScrollView } from 'react-native'
import { styles } from '../../../styles/Styles'

import { simOuNao, parto } from '../../../constants/anamneseOptions'
import { AnamneseContext } from '../../../contexts/anamneseContext'

import Header from '../../../components/Header'
import DateInput from '../../../components/DateInput'
import Identificacao from '../../../components/Identificacao'
import Sintomas from '../../../components/Sintomas'
import Input from '../../../components/Input'
import Seletor from '../../../components/Seletor'

export default function AnamneseCriancas(){
    const {paciente, setPaciente} = useContext(AnamneseContext)

    return (
        <KeyboardAvoidingView style={styles.container} behavior={'height'}>
            <ScrollView>
                <View style={styles.contentArea}>
                    <Header setor='Anamnese de crianças'/>
                    
                    <DateInput/>

                    <Identificacao/>

                    <Sintomas/>

                    <Text style={styles.titulo}>3. Histórico de desenvolvimento</Text>

                    <View style={styles.inputArea}>
                        <Text style={styles.titulo}>Gestação e nascimento</Text>

                        <Text style={styles.normal}>A gestação foi planejada?</Text>
                        <Seletor
                            selecionado={paciente.gestacaoSelecionada}
                            aoMudar={valor=>setPaciente({...paciente, gestascaoSelecionada: valor})}
                            lista={simOuNao}
                        />
                        <Text style={styles.normal}>Realizou pré-natal?</Text>
                        <Seletor
                            selecionado={paciente.preNatal}
                            aoMudar={valor=>setPaciente({...paciente, preNatal: valor})}
                            lista={simOuNao}
                        />
                        <Text style={styles.normal}>Teve alguma intercorrência durante a gravidez?</Text>
                        <Seletor
                            selecionado={paciente.intercorrenciaSelecionada}
                            aoMudar={valor=>setPaciente({...paciente, intercorrenciaSelecionada: valor})}
                            lista={simOuNao}
                        />
                        {paciente.intercorrenciaSelecionada === 'sim' &&
                        <Input
                            titulo='Qual?'
                            valor={paciente.intercorrencia}
                            callback={newText=>setPaciente({...paciente, intercorrencia: newText})}
                        />}
                        <Text>Fez uso de medicamentos durante a gestação?</Text>
                        <Seletor
                            selecionado={paciente.medicamentoSelecionado}
                            aoMudar={valor=>setPaciente({...paciente, medicamentoSelecionado: valor})}
                            lista={simOuNao}
                        />
                        <Text style={styles.normal}>Qual foi o tipo de parto e por que?</Text>
                        <Seletor
                            selecionado={paciente.partoSelecionado}
                            aoMudar={valor=>setPaciente({...paciente, partoSelecionado: valor})}
                            lista={parto}
                        />
                        <Input
                            valor={paciente.motivoparto}
                            legenda='Qual o motivo?'
                            callback={newText=>setPaciente({...paciente, motivoParto: newText})}
                        />
                        <Input
                            titulo='A criança nasceu com quantas semanas?'
                            valor={paciente.semanas}
                            callback={newText=>setPaciente({...paciente, semanas: newText})}
                        />
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}