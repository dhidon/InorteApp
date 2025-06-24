import React, { useContext} from 'react'
import { View, Text, KeyboardAvoidingView, ScrollView, TouchableOpacity } from 'react-native'
import { styles } from '../../../styles/Styles'
import Slider from '@react-native-community/slider'
import { useNavigation } from '@react-navigation/native'

import { comportRepetitivos, comportApego, difSociabilidadeAfetividade, difAutocuidado, condDesenvolvAtuais, simOuNao, parto, consistencias, problemaAlimentacao, itensSignificantes } from '../../../constants/anamneseOptions'
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
    const navigation = useNavigation()

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
                    <View style={styles.inputArea}>
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
                            valor={paciente.idadeFrases}
                            chave='idadeFrases'
                        />
                        <Text style={styles.normal}>Apresentou dificuldades no desenvolvimento da linguagem?</Text>
                        <Seletor
                            selecionado={paciente.difDesenvolvimentoLinguagem}
                            aoMudar={value=>setPaciente({...paciente, difDesenvolvimentoLinguagem: value})}
                            lista={simOuNao}
                        />
                        <ListaAlternativas
                            lista={condDesenvolvAtuais}
                            chave='condDesenvolvAtuais'
                            titulo='Marque as alternativas a seguir se baseando no estado atual do paciente'
                        />
                        <Input
                            titulo='Descreva brevemente alguma dificuldade cognitiva que seu filho apresente'
                            valor={paciente.difCognitiva}
                            callback={newText=>setPaciente({...paciente, difCognitiva: newText})}
                        />
                        <Input
                            titulo='Descreva brevemente alguma dificuldade motora que seu filho apresente'
                            valor={paciente.difMotora}
                            callback={newText=>setPaciente({...paciente, difMotora: newText})}
                        />
                        <Input
                            titulo='Possui dificuldades na compreensão da linguagem?'
                            valor={paciente.difComprLinguagem}
                            callback={newText=>setPaciente({...paciente, difComprLinguagem: newText})}
                        />
                        <Input
                            titulo='Como reage quando contrariado?'
                            valor={paciente.reageContrariado}
                            callback={newText=>setPaciente({...paciente, reacaoContrariado: newText})}
                        />
                    </View>

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
                            lista={difAutocuidado}
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
                    
                    <Text style={styles.titulo}>Sociabilidade/afetividade</Text>

                    <View style={styles.inputArea}>
                        <Text style={styles.normal}>Apresenta sorriso espontâneo a pessoas familiares</Text>
                        <Seletor
                            selecionado={paciente.sorrisoEspontaneoFamiliares}
                            aoMudar={value=>setPaciente({...paciente, sorrisoEspontaneoFamiliares: value})}
                            lista={difSociabilidadeAfetividade}
                        />
                        <Text>Apresenta sorriso espontâneo a pessoas não familiares</Text>
                        <Seletor
                            selecionado={paciente.sorrisoEspontaneoNaoFamiliares}
                            aoMudar={value=>setPaciente({...paciente, sorrisoEspontaneoNaoFamiliares: value})}
                            lista={difSociabilidadeAfetividade}
                        />
                        <Text>Apresenta sorriso em resposta ao sorriso de outras pessoas?</Text>
                        <Seletor
                            selecionado={paciente.sorrisoResposta}
                            aoMudar={value=>setPaciente({...paciente, sorrisoResposta: value})}
                            lista={difSociabilidadeAfetividade}
                        />
                        <Text>Variação na expressão facial (contentamento, frustração, surpresa, constrangimento)</Text>
                        <Seletor
                            selecionado={paciente.variacaoExpressaoFacial}
                            aoMudar={value=>setPaciente({...paciente, variacaoExpressaoFacial: value})}
                            lista={difSociabilidadeAfetividade}
                        />
                        <Text>Expressão emocional apropriada ao contexto</Text>
                        <Seletor
                            selecionado={paciente.exprEmocionalContexto}
                            aoMudar={value=>setPaciente({...paciente, exprEmocionalContexto: value})}
                            lista={difSociabilidadeAfetividade}
                        />  
                    </View>

                    <Text style={styles.titulo}>Atenção compartilhada</Text>

                    <View style={styles.inputArea}>
                        <Text style={styles.normal}>Mostra, traz pra perto do rosto do parceiro ou aponta objetos / eventos de interesse variados apenas para compartilhar?</Text>
                        <Seletor
                            lista={difSociabilidadeAfetividade}
                            selecionado={paciente.mostraObjComp}
                            aoMudar={value=>setPaciente({...paciente, mostraObjComp: value})}
                        />
                        <Text style={styles.normal}>Olha para onde o parceiro aponta</Text>
                        <Seletor
                            lista={difSociabilidadeAfetividade}
                            selecionado={paciente.olhaAponta}
                            aoMudar={value=>setPaciente({...paciente, olhaAponta: value})}
                        />
                        <Text style={styles.normal}>Responde aos convites para brincar</Text>
                        <Seletor
                            lista={difSociabilidadeAfetividade}
                            selecionado={paciente.respBrincar}
                            aoMudar={value=>setPaciente({...paciente, respBrincar: value})}
                        />
                    </View>

                    <Text style={[styles.titulo, {width: '90%'}]}>Respostas/iniciativas sociais com outras crianças</Text>

                    <View style={styles.inputArea}>
                        <Text style={styles.normal}>Iniciativa de aproximação ou interesse em outras crianças</Text>
                        <Seletor
                            lista={difSociabilidadeAfetividade}
                            selecionado={paciente.aproxIntCriancas}
                            aoMudar={value=>setPaciente({...paciente, aproxIntCriancas: value})}
                        />
                        <Text style={styles.normal}>Responde mas não toma iniciativa</Text>
                        <Seletor
                            lista={difSociabilidadeAfetividade}
                            selecionado={paciente.respSemIniciativa}
                            aoMudar={value=>setPaciente({...paciente, respSemIniciativa: value})}
                        />
                        <Text style={styles.normal}>Fica ansioso com a presença de outras crianças / adolescentes?</Text>
                        <Seletor
                            selecionado={paciente.ansiosoPresencaCriAdol}
                            aoMudar={value => setPaciente({...paciente, ansiosoPresencaCriAdol: value})}
                            lista={difSociabilidadeAfetividade}
                        />
                        <Text style={styles.normal}>Gosta de brincar com grupos</Text>
                        <Seletor
                            selecionado={paciente.brincaGrupos}
                            aoMudar={value=>setPaciente({...paciente, brincaGrupos: value})}
                            lista={difSociabilidadeAfetividade}
                        />
                        <Text style={styles.normal}>Fica intensamente ansioso quando na presença de pessoas que não são do seu convívio?</Text>
                        <Seletor
                            selecionado={paciente.ansiosoNaoConvivio}
                            aoMudar={value=>setPaciente({...paciente, ansiosoNaoConvivio:value})}
                            lista={difSociabilidadeAfetividade}
                        />
                        <Text style={styles.normal}>Ignora ou evita de forma persistente esse contato?</Text>
                        <Seletor
                            selecionado={paciente.evitaContato}
                            aoMudar={value=>setPaciente({...paciente, evitaContato: value})}
                            lista={difSociabilidadeAfetividade}
                        />
                        <Text style={styles.normal}>Excessiva desinibição para a idade em relação a pessoas estranhas?</Text>
                        <Seletor
                            selecionado={paciente.excessivaDesinibicao}
                            aoMudar={value=>setPaciente({...paciente, excessivaDesinibicao: value})}
                            lista={difSociabilidadeAfetividade}
                        />

                        <Text style={styles.normal}>Comportamento de apego</Text>
                        {comportApego.map((item, index)=>{
                            return (
                                <View key={index}>
                                    <Text>{item.label}</Text>
                                    <Seletor
                                        selecionado={item.value}
                                        aoMudar={valor=>{
                                            const newComportApego = [...paciente.comportApego]
                                            newComportApego[index].value = valor
                                            setPaciente({...paciente, comportApego: newComportApego})
                                        }}
                                        lista={difSociabilidadeAfetividade}
                                    />
                                </View>)
                        })}
                    </View>

                    <Text style={styles.titulo}>Brincadeira</Text>

                    <View style={styles.inputArea}>
                        <Input
                            titulo='Quais os brinquedos e atividades favoritas?'
                            valor={paciente.brinquedoAtividade}
                            callback={newText=>setPaciente({...paciente, brinquedoAtividade: newText})}
                        />
                        <Text style={styles.normal}>Manipula vários objetos/brinquedos</Text>
                        <Seletor
                            selecionado={paciente.manipulaObjBrinquedo}
                            aoMudar={value=>setPaciente({...paciente, manipulaObjBrinquedo: value})}
                            lista={difSociabilidadeAfetividade}
                        />
                        <Text style={styles.normal}>Brinca de faz de conta usando um objeto como se fosse outro?</Text>
                        <Seletor
                            selecionado={paciente.brincaFazDeConta}
                            aoMudar={value=>setPaciente({...paciente, brincaFazDeConta: value})}
                            lista={difSociabilidadeAfetividade}
                        />
                        <Input
                            titulo='Formas de exploração dos brinquedos (ex. brinca de faz de conta; usa os objetos de forma funcional; demonstra interesse pelo cheiro ou movimento dos objetos; atividade repetitiva - alinhar, girar objetos sem função aparente):'
                            valor={paciente.exploraBrinquedos}
                            callback={newText=>setPaciente({...paciente, exploraBrinquedos: newText})}
                        />
                        <Input
                            titulo='Brinca de faz de conta atribuindo papéis a si mesmo (médico/enfermeira/professora)?'
                            valor={paciente.brincaPapeis}
                            callback={newText=>setPaciente({...paciente, brincaPapeis: newText})}
                        />
                    </View>

                    <Text style={styles.titulo}>Comportamentos repetitivos e rituais</Text>

                    <View style={styles.inputArea}>
                        <Text style={styles.normal}>Alinha, empilha objetos quando brincando sem aparente função no brenqudo?</Text>
                        <Seletor
                            selecionado={paciente.alinhaEmpilhaObj}
                            aoMudar={value=>setPaciente({...paciente, alinhaEmpilhaObj: value})}
                            lista={difSociabilidadeAfetividade}
                        />
                        <Text style={styles.normal}>Faz brincadeiras com partes de objetos em vez de um objeto como um todo (ex: ignora o carrinho e gira apenas as rodas por um longo tempo)?</Text>
                        <Seletor
                            selecionado={paciente.brincPartesObj}
                            aoMudar={value=>setPaciente({...paciente, brincPartesObj: value})}
                            lista={difSociabilidadeAfetividade}
                        />
                        <Input
                            titulo='Como reage quando a brincadeira é interrompida?'
                            valor={paciente.reacaoBrincInterromp}
                            callback={newText=>setPaciente({...paciente, reacaoBrincInterromp: newText})}
                        />
                        <Text style={styles.normal}>Resistência a mudanças na rotina pessoal/da casa?</Text>
                        <Seletor
                            selecionado={paciente.resistenciaMudancaRotina}
                            aoMudar={value=>setPaciente({...paciente, resistenciaMudancaRotina: value})}
                            lista={difSociabilidadeAfetividade}
                        />
                        <Text style={styles.normal}>Abre/fecha portas, gavetas; liga/desliga interruptores de luz; intenso interesse por objetos que giram (ex: máquina dalevar, ventilador, veículos em geral). Considerar a idade e persistência.</Text>
                        <Seletor
                            selecionado={paciente.abreFechaLigaDesliga}
                            aoMudar={value=>setPaciente({...paciente, abreFechaLigaDesliga: value})}
                            lista={difSociabilidadeAfetividade}
                        />
                        <Text style={styles.normal}>Sequência fixa e rígida para atividades (ex: vestir-se, arrumar a casa, higiene pessoal)?</Text>
                        <Seletor
                            selecionado={paciente.sequenciaFixaAtiv}
                            aoMudar={value=>setPaciente({...paciente, sequenciaFixaAtiv: value})}
                            lista={difSociabilidadeAfetividade}
                        />
                        <Input
                            titulo='Como reage quando interrompida?'
                            valor={paciente.reageInterrompida}
                            callback={newText=>setPaciente({...paciente, reageInterrompida: newText})}
                        />
                        <ListaAlternativas
                            titulo='Apresenta os comportamentos a seguir de forma repetiviva?'
                            lista={comportRepetitivos}
                            chave='comportRepetitivos'
                        />
                        <Input
                            titulo='Medos (relacionar medos discrepantes com a etapa evolutiva-frequÊncia, intensidade, grau de interferÊncia em outras atividades da família, facilidade com que é acalmado /distraído):'
                            valor={paciente.medos}
                            callback={newText=>setPaciente({...paciente, medos: newText})}
                        />
                    </View>

                    <Text style={styles.titulo}>Desempenho acadêmico</Text>

                    <View style={styles.inputArea}>
                        <Text style={styles.normal}>Frequenta a escola?</Text>
                        <Seletor
                            selecionado={paciente.frequentaEscola}
                            aoMudar={value=>setPaciente({...paciente, frequentaEscola: value})}
                            lista={simOuNao}
                        />
                        {paciente.frequentaEscola === 'sim' &&
                        <View>
                            <Input
                                titulo='Qual o nome da escola?'
                                valor={paciente.nomeEscola}
                                callback={newText=>setPaciente({...paciente, nomeEscola: newText})}
                            />
                        </View>}
                        <Text styel={styles.normal}>Faz AEE?</Text>
                        <Seletor
                            selecionado={paciente.fazAee}
                            aoMudar={value=>setPaciente({...paciente, fazAee: value})}
                            lista={simOuNao}
                        />
                        <Input
                            titulo='Qual a série do paciente?'
                            valor={paciente.serieEscola}
                            callback={newText=>setPaciente({...paciente, serieEscola: newText})}
                        />
                        <Input
                            titulo='Qual o turno?'
                            valor={paciente.turnoEscola}
                            callback={newText=>setPaciente({...paciente, turnoEscola: newText})}
                        />
                        <Text>Apresenta dificuldade na aprendizagem?</Text>
                        <Seletor
                            selecionado={paciente.difAprendizagem}
                            aoMudar={valor=>setPaciente({...paciente, difAprendizagem: valor})}
                            lista={simOuNao}
                        />
                        <Input
                            titulo='Como é o comportamento no âmbito escolar?'
                            valor={paciente.comportamentoEscola}
                            callback={newText=>setPaciente({...paciente, comportamentoEscola: newText})}
                        />
                    </View>
                    
                    <View style={styles.buttonArea}>
                        <TouchableOpacity style={styles.teste} onPress={()=>navigation.navigate('Profissionais')}>
                            <Text style={styles.buttonText}>Próximo</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}