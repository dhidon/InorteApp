import React, { useContext} from 'react'
import { View, Text, KeyboardAvoidingView, ScrollView } from 'react-native'
import { styles } from '../../../styles/Styles'
import Slider from '@react-native-community/slider'

import { simOuNao, parto, consistencias, problemaAlimentacao, itensSignificantes } from '../../../constants/anamneseOptions'
import { AnamneseContext } from '../../../contexts/anamneseContext'

import Header from '../../../components/Header'
import DateInput from '../../../components/DateInput'
import Identificacao from '../../../components/Identificacao'
import Sintomas from '../../../components/Sintomas'
import Input from '../../../components/Input'
import Seletor from '../../../components/Seletor'
import ListaAlternativas from '../../../components/ListaAlternativas'

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


                    <View style={[styles.inputArea, {gap: 7}]}>
                        <Input
                            titulo='APGAR'
                            valor={paciente.primeiroMinuto}
                            legenda='1º minuto'
                            callback={newText=>setPaciente({...paciente, primeiroMinuto: newText})}
                        />
                        <Input
                            valor={paciente.quintoMinuto}
                            legenda='5º minuto'
                            callback={newText=>setPaciente({...paciente, quintoMinuto: newText})}
                        />
                        <Input
                            valor={paciente.peso}
                            legenda='Peso'
                            callback={newText=>setPaciente({...paciente, peso: newText})}
                        />
                        <Input
                            valor={paciente.comprimento}
                            legenda='Comprimento'
                            callback={newText=>setPaciente({...paciente, comprimento: newText})}
                        />
                    </View>

                    <View style={styles.inputArea}>
                        <Text style={styles.normal}>Houve algum problema com o bebê logo que nasceu?</Text>
                        <Seletor
                            selecionado={paciente.problemaSelecionado}
                            aoMudar={valor=>setPaciente({...paciente, problemaSelecionado: valor})}
                            lista={simOuNao}
                        />
                        <Text style={styles.normal}>O bebê precisou de oxigênio?</Text>
                        <Seletor
                            selecionado={paciente.oxigenioSelecionado}
                            aoMudar={valor=>setPaciente({...paciente, oxigenioSelecionado: valor})}
                            lista={simOuNao}
                        />
                        <Text style={styles.normal}>Nasceu cianótico?</Text>
                        <Seletor
                            selecionado={paciente.cianoticoSelecionado}
                            aoMudar={valor=>setPaciente({...paciente, cianoticoSelecionado: valor})}
                            lista={simOuNao}
                        />
                        <Text style={styles.normal}>O bebê chorou logo?</Text>
                        <Seletor
                            selecionado={paciente.chorouSelecionado}
                            aoMudar={valor=>setPaciente({...paciente, chorouSelecionado: valor})}
                            lista={simOuNao}
                        />
                        <Text style={styles.normal}>O bebê apresentava sinais de icterícia?</Text>
                        <Seletor
                            selecionado={paciente.ictericiaSelecionado}
                            aoMudar={valor=>setPaciente({...paciente, ictericiaSelecionado: valor})}
                            lista={simOuNao}
                        />
                        <Text style={styles.normal}>Precisou fazer fototerapia?</Text>
                        <Seletor
                            selecionado={paciente.fototerapiaSelecionado}
                            aoMudar={valor=>setPaciente({...paciente, fototerapiaSelecionado: valor})}
                            lista={simOuNao}
                        />
                    </View>

                    <Text style={styles.titulo}>Alimentação</Text>
                    
                    <View style={styles.inputArea}>
                        <Text style={styles.normal}>A criança mamou?</Text>
                        <Seletor
                            selecionado={paciente.mamouSelecionado}
                            aoMudar={valor=>setPaciente({...paciente, mamouSelecionado: valor})}
                            lista={simOuNao}
                        />
                        {paciente.mamouSelecionado === 'sim' &&
                        <>
                            <Input
                                titulo='Aleitamento materno exclusivo até quantos meses?'
                                valor={paciente.leiteMatExclMes}
                                callback={newText=>setPaciente({...paciente, leiteMatExclMes: newText})}
                            />
                            <Input
                                titulo='Mamou até quantos meses?'
                                valor={paciente.mamouIdade}
                                callback={newText=>setPaciente({...paciente, mamouIdade: newText})}
                            />
                        </>}
                        <Text style={styles.normal}>Usou mamadeira?</Text>
                        <Seletor
                            selecionado={paciente.chupetaSelecionada}
                            aoMudar={valor=>setPaciente({...paciente, chupetaSelecionada: valor})}
                            lista={simOuNao}
                        />
                        <Text style={styles.normal}>Com qual idade foi feita a introdução alimentar?</Text>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginRight: 10}}> 
                            <Slider
                                minimumValue={0}
                                maximumValue={10}
                                value={0}
                                onValueChange={newValue=>setPaciente({...paciente, idadeIntroAlimentar: newValue})}
                                step={1}
                                style={{width: '80%'}}
                            />
                            <Text style={{borderWidth: 1, borderRadius: 3, padding: 5}}>{paciente.idadeIntroAlimentar}</Text>
                        </View>
                        <Text style={styles.normal}>Apresentou dificuldade na introdução alimentar?</Text>
                        <Seletor
                            selecionado={paciente.difIntroAlimentar}
                            aoMudar={valor=>setPaciente({...paciente, difIntroAlimentar: valor})}
                            lista={simOuNao}
                        />
                        {paciente.difIntroAlimentar === 'sim' &&
                        <>
                            <Input
                                titulo='Quais?'
                                valor={paciente.qualDifIntroAlimentar}
                                callback={newText=>setPaciente({...paciente, qualDifIntroAlimentar: newText})}
                            />
                        </>}

                        <Text style={styles.normal}>As respostas a seguir devem ser baseadas no estado atual do paciente</Text>
                        
                        <ListaAlternativas
                            titulo='Aceita bem as consistências de alimentos a seguir?'
                            lista={consistencias}
                            chave='consistencias'
                        />
                        <ListaAlternativas
                            titulo='Apresentou algum problema na alimentação?'
                            lista={problemaAlimentacao}
                            chave='problemaAlimentacao'
                        />
                        <Input
                            titulo='Apresenta alguma seletividade em relação a comida? Se "sim", quais?'
                            valor={paciente.quaisSeletividadesAliment}
                            callback={newText=>setPaciente({...paciente, quaisSeletividadesAliment: newText})}
                        />
                    </View>

                    <Text style={styles.titulo}>Sono e desenvolvimento</Text>

                    <View style={styles.inputArea}>
                    <Input
                            titulo='Como é o sono?'
                            legenda='É tranquilo, agitado, acorda durante a noite...?'
                            valor={paciente.formaSono}
                            callback={newText=>setPaciente({...paciente, formaSono: newText})}
                        />
                        <Text style={styles.normal}>Dorme sozinho?</Text>
                        <Seletor
                            selecionado={paciente.dormeSozinhoSelecionado}
                            aoMudar={value=>setPaciente({...paciente, dormeSozinhoSelecionado: value})}
                            lista={simOuNao}
                        />
                        <Input
                            titulo="Compartilha a cama com:"
                            valor={paciente.quemCompartilhaCama}
                            callback={newText=>setPaciente({...paciente, quemCompartilhaCama: newText})}
                        />
                        <Input
                            titulo="Dorme que horas?"
                            valor={paciente.horarioDormir}
                            callback={newText=> setPaciente({...paciente, horarioDormir: newText})}
                        />
                        <Input
                            titulo="Acorda que horas?"
                            valor={paciente.horarioAcordar}
                            callback={newText=> setPaciente({...paciente, horarioAcordar: newText})}
                        />
                    </View>

                    <Text style={styles.titulo}>Desenvolvimento neuropsicomotor</Text>
                    <View style={styles.inputArea}>
                        <Input
                            titulo='Com qual idade passou a sentar sem apoio?'
                            valor={paciente.sentouSemApoio}
                            chave='sentouSemApoio'
                        />
                        <Input
                            titulo='Com qual idade ele engatinhou?'
                            valor={paciente.engatinhou}
                            chave='engatinhou'
                        />
                        <Input
                            titulo='Com qual idade começou a andar sem suporte'
                            valor={paciente.andouSemSuporte}
                            chave='andouSemSuporte'
                        />
                        <ListaAlternativas
                            titulo='Dentre os itens a seguir, pressione aqueles que estiveram presentes (com grau de significância) durante a infância nos primeiros anos de vida'
                            lista={itensSignificantes}
                            chave='itensSignificantes'
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
                            valor={paciente.qualEsporte}
                            callback={newText=>setPaciente({...paciente, qualEsporte: newText})}
                        />}
                        <Text style={styles.normal}>Pratica autoagressão?</Text>
                        <Seletor
                            selecionado={paciente.autoAgressao}
                            aoMudar={value=>setPaciente({...paciente, autoAgressao: value})}
                            lista={simOuNao}
                        />
                        <Text style={styles.normal}>Pratica heteroagressão?</Text>
                        <Seletor
                            selecionado={paciente.autoAgressao}
                            aoMudar={value=>setPaciente({...paciente, autoAgressao: value})}
                            lista={simOuNao}
                        />
                    </View>

                    <Text style={styles.titulo}>Desenvolvimento da linguagem</Text>
                    <View>
                        <Input
                            titulo='Com qual idade começou a balbuciar?'
                            valor={paciente.idadeBalbuciou}
                            callback={newText=>setPaciente({...paciente, idadeBalbuciou: newText})}
                        />
                        <Input
                            titulo='Com qual idade emitiu sílabas?'
                            valor={paciente.idadeSilabas}
                            callback={newText=>setPaciente({...paciente, idadeSilabas: newText})}
                        />
                        <Input
                            titulo='Com que idade emitiu as primeiras palavras?'
                            valor={paciente.idadePriPalavras}
                            chave='idadePriPalavras'
                        />
                        <Input
                            titulo='Com que idade emitiu as primeiras frases?'
                            
                        />
                        
                        <Text>Com que idade emitiu as primeiras frases</Text>
                        <TextInput
                            style={styles.input}
                            value={dados.primeirasFrases}
                            onChangeText={newText=>setDadosLocal({...dados, primeirasFrases: newText})}
                        />
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}