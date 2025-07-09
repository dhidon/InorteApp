import React, { useContext, useEffect } from 'react'
import { View, Text, KeyboardAvoidingView, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import { styles } from '../../../styles/Styles'
import Slider from '@react-native-community/slider'
import { useNavigation } from '@react-navigation/native'

import { AnamneseContext } from '../../../contexts/anamneseContext'
import { habilidadesMotoras, comportamento, caracteristicasSociais, outrasDificuldades, nivelHabilidades, fatoresDif, simOuNao, consistenciasAceitas, problemaAlimentacao, itensSignificantes, comportamentos, condicoesFilho } from '../../../constants/anamneseOptions'
import Header from '../../../components/Header'
import Seletor from '../../../components/Seletor'
import ListaAlternativas from '../../../components/ListaAlternativas'
import Input from '../../../components/Input'
import Identificacao from '../../../constants/Identificacao'
import Sintomas from '../../../constants/Sintomas'
import DateInput from '../../../components/DateInput'

export default function AnmenseAdolescentes(){
    const { setPaciente, paciente, formatarData } = useContext(AnamneseContext)
    const navigation = useNavigation()

    useEffect(()=>{
        if (!paciente.nascimento) return;
    
        const partesData = paciente.nascimento.split('/');
        if (partesData.length !== 3) return;
    
        const dataNascimento = new Date(`${partesData[2]}-${partesData[1]}-${partesData[0]}`);
        const hoje = new Date();
    
        let idade = hoje.getFullYear() - dataNascimento.getFullYear();
        const mes = hoje.getMonth() - dataNascimento.getMonth();
    
        if (mes < 0 || (mes === 0 && hoje.getDate() < dataNascimento.getDate())) {
            idade -= 1;
        }
    
        setPaciente({ ...paciente, idade: idade });
    }, [paciente.nascimento])

    useEffect(() => {
        if (!paciente.comportamentos) {
            setPaciente({...paciente, comportamentos: comportamentos})
        }
    }, [])

    function atualizarComportamento(id, novoValor) {
        const newComportamentos = paciente.comportamentos.map(opcao => {
            if (opcao.value === id) {
                return {...opcao, idade: novoValor}
            }
            return opcao
        })
        setPaciente({...paciente, comportamentos: newComportamentos})
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior={'height'}>
            <Header setor={'Anamnese de adolescentes'}/>
            
            <ScrollView>
                
                <View style={styles.contentArea}>

                    <DateInput/>

                    <Identificacao/>

                    <Sintomas/>

                    <Text style={styles.titulo}>3. Histórico de saúde</Text>

                    <Text style={styles.titulo}>Gestação e desenvolvimento</Text>

                    <View style={styles.inputArea}>
                        <Text style={styles.normal}>A gestação foi planejada?</Text>
                        <Seletor
                            selecionado={paciente.gestacaoPlanejada}
                            aoMudar={value=>setPaciente({...paciente, gestacaoPlanejada: value})}
                            lista={simOuNao}
                        />
                        <Text style={styles.normal}>Realizou pré-natal?</Text>
                        <Seletor
                            selecionado={paciente.prenatal}
                            aoMudar={value=>setPaciente({...paciente, prenatal: value})}
                            lista={simOuNao}
                        />
                    </View>

                    <Text style={styles.titulo}>Alimentação</Text>
                    
                    <View style={styles.inputArea}>
                        <Text style={styles.normal}>Mamou quando criança?</Text>
                        <Seletor
                            selecionado={paciente.mamou}
                            aoMudar={value=>setPaciente({...paciente, mamou: value})}
                            lista={simOuNao}
                        />
                        {paciente.mamou === 'sim' &&
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
                            selecionado={paciente.mamadeira}
                            aoMudar={value=>setPaciente({...paciente, mamadeira: value})}
                            lista={simOuNao}
                        />
                        <Text style={styles.normal}>Usou chupeta?</Text>
                        <Seletor
                            selecionado={paciente.chupeta}
                            aoMudar={value=>setPaciente({...paciente, chupeta: value})}
                            lista={simOuNao}
                        />

                        <Text style={styles.normal}>Com qual idade foi feita a introdução alimentar?</Text>
                            <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 15, gap: 15}}>
                                <Slider
                                    minimumValue={0}
                                    maximumValue={10}
                                    value={0}
                                    onValueChange={newValue=>setPaciente({...paciente, idadeIntroAlimentar: newValue})}
                                    step={1}
                                    style={{width: '90%', marginTop: 10}}
                                />
                                <Text style={styles.normal}>{paciente.idadeIntroAlimentar}</Text>
                            </View>

                        <Text style={styles.normal}>Apresentou dificuldade na introdução alimentar?</Text>
                        <Seletor
                            selecionado={paciente.difIntroAlimentar}
                            aoMudar={value=>setPaciente({...paciente, difIntroAlimentar: value})}
                            lista={simOuNao}
                        />
                        {paciente.difIntroAlimentar === 'sim' &&
                        <>
                            <Input
                                titulo='Quais?'
                                valor={paciente.difAlimentar}
                                callback={newText=>setPaciente({...paciente, difAlimentar: newText})}
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
                            callback={newText=>setPaciente({...paciente, seletividadeAlimentar: newText})}
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
                            selecionado={paciente.dormeSozinho}
                            aoMudar={value=>setPaciente({...paciente, dormeSozinho: value})}
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
                        <Text style={styles.normal}>Teve algum problema de crescimento ou desenvolvimento durante os primeiros anos de vida?</Text>
                        <Seletor
                            selecionado={paciente.problemaCrescimento}
                            aoMudar={value=>setPaciente({...paciente, problemaCrescimento: value})}
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

                    <Text style={styles.titulo}>Saúde geral</Text>

                    <View style={styles.inputArea}>
                        <ListaAlternativas
                            titulo='Pressione as condições e doenças que o paciente já teve'
                            lista={condicoesFilho}
                            chave='condicoesFilho'
                        />
                        <Text style={styles.normal}>As respostas a seguir devem ser referentes ao estado atual do paciente</Text>
                        <ListaAlternativas
                            titulo='Quais fatores você acha que podem contribuir para as dificuldades do paciente?'
                            lista={fatoresDif}
                            chave='fatoresDif'
                        />
                        <Text style={styles.normal}>Faz uso de alguma medicação?</Text>
                        <Seletor
                            lista={simOuNao}
                            selecionado={paciente.usoMedicacao}
                            aoMudar={value=>setPaciente({...paciente, usoMedicacao: value})}
                        />
                        {paciente.usoMedicacao === 'sim' &&
                        <View style={{width: '100%', gap: 7, marginTop: 7}}>
                            <TextInput
                                style={styles.input}
                                value={paciente.qualMedicacao}
                                onChangeText={newText=>setPaciente({...paciente, qualMedicacao: newText})}
                                placeholder='Qual o nome da medicação que o paciente está tomando?'
                            />
                            <TextInput
                                style={styles.input}
                                value={paciente.motivoMedicacao}
                                onChangeText={newText=>setPaciente({...paciente, motivoMedicacao: newText})}
                                placeholder='Qual o motivo do uso desta medicação?'
                            />
                            <TextInput
                                style={styles.input}
                                value={paciente.quemReceitou}
                                onChangeText={newText=>setPaciente({...paciente, quemReceitou: newText})}
                                placeholder='Quem receitou esta medicação para o paciente?'
                            />
                        </View>
                        }
                    </View>

                    <Text style={styles.titulo}>Habilidades cognitivas</Text>

                    <View style={styles.inputArea}>
                        <Text style={styles.normal}>Classifique as habilidades do seu filho em relação a outros adolescentes da mesma idade</Text>
                        <Text style={styles.normal}>Compreensão da fala</Text>
                        <Seletor
                            selecionado={paciente.compreensaoFala}
                            aoMudar={value=>setPaciente({...paciente, compreensaoFala: value})}
                            lista={nivelHabilidades}
                        />
                        <Text style={styles.normal}>Resolução de problemas</Text>
                        <Seletor
                            selecionado={paciente.resolProblemas}
                            aoMudar={value=>setPaciente({...paciente, resolProblemas: value})}
                            lista={nivelHabilidades}
                        />
                        <Text style={styles.normal}>Mantém a atenção</Text>
                        <Seletor
                            selecionado={paciente.mantemAtencao}
                            aoMudar={value=>setPaciente({...paciente, mantemAtencao: value})}
                            lista={nivelHabilidades}
                        />
                        <Text style={styles.normal}>Habilidades de organização</Text>
                        <Seletor
                            selecionado={paciente.habOrganizacao}
                            aoMudar={value=>setPaciente({...paciente, habOrganizacao: value})}
                            lista={nivelHabilidades}
                        />
                        <Text style={styles.normal}>Recordação de eventos</Text>
                        <Seletor
                            selecionado={paciente.recEventos}
                            aoMudar={value=>setPaciente({...paciente, recEventos: value})}
                            lista={nivelHabilidades}
                        />
                        <Text style={styles.normal}>Recordação de fatos</Text>
                        <Seletor
                            selecionado={paciente.recFatos}
                            aoMudar={value=>setPaciente({...paciente, recFatos: value})}
                            lista={nivelHabilidades}
                        />
                        <Text style={styles.normal}>Aprendizagem a partir de experiências</Text>
                        <Seletor
                            selecionado={paciente.aprendExp}
                            aoMudar={value=>setPaciente({...paciente, aprendExp: value})}
                            lista={nivelHabilidades}
                        />
                        <Text style={styles.normal}>Entendimento de conceitos</Text>
                        <Seletor
                            selecionado={paciente.entendConceitos}
                            aoMudar={value=>setPaciente({...paciente, entendConceitos: value})}
                            lista={nivelHabilidades}
                        />
                        <ListaAlternativas
                            titulo='Marque outras possíveis dificuldades'
                            lista={outrasDificuldades}
                            chave='outrasDificuldades'
                        />
                        <Input
                            titulo="Descreva brevemente alguma outra habilidade cognitiva que seu filho apresente"
                            valor={paciente.outraDifCogn}
                            callback={newText=>setPaciente({...paciente, outraDifCogn: newText})}
                        />
                        <Input
                            titulo="Descreva brevemente alguma habilidade especial que seu filho possua"
                            valor={paciente.habilidadeEspecial}
                            callback={newText=>setPaciente({...paciente, habilidadeEspecial: newText})}
                        />
                        <Text style={styles.normal}>Apresenta dificuldade na compreensão de linguagem?</Text>
                        <Seletor
                            selecionado={paciente.difCompreensaoLing}
                            aoMudar={value=>setPaciente({...paciente, difCompreensaoLing: value})}
                            lista={simOuNao}
                        />
                        <Text>Dificuldade na comunicação expressiva?</Text>
                        <Seletor
                            selecionado={paciente.difComunicExpressiva}
                            aoMudar={value=>setPaciente({...paciente, difComunicExpressiva: value})}
                            lista={simOuNao}
                        />
                        <Text>Realiza estereotipias ou movimentos corporais?</Text>
                        <Seletor
                            selecionado={paciente.estereotipiasMovCorporais}
                            aoMudar={value=>setPaciente({...paciente, estereotipiasMovCorporais: value})}
                            lista={simOuNao}
                        />
                    </View>

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
                            callback={newText=>setPaciente({...paciente, atividadesFavoritas: newText})}
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
                            selecionado={paciente.probLimiteSelecionado}
                            lista={simOuNao}
                            aoMudar={value=>setPaciente({...paciente, probLimiteSelecionado: value})}
                        />
                        <Input
                            titulo='Quais as estratégias mais bem sucedidas que você usa com seu filho e que dão certo?'
                            valor={paciente.estrategiasUsadas}
                            callback={newText=>setPaciente({...paciente, estrategiasUsadas: newText})}
                        />
                        <Text style={styles.normal}>O paciente consegue ser independente nas atividades de vida diárias?</Text>
                        <Seletor
                            selecionado={paciente.independenciaAtiv}
                            lista={simOuNao}
                            aoMudar={value=>setPaciente({...paciente, independenciaAtiv: value})}
                        />
                    </View>

                    <Text style={styles.titulo}>Habilidades físicas e motoras</Text>

                    <View style={styles.inputArea}>
                        <ListaAlternativas
                            titulo='Assinale as características que seu filho aprensenta'
                            lista={habilidadesMotoras}
                            chave='habilidadesMotoras'
                        />

                        <Text style={styles.titulo}>Visão</Text>

                        <Text style={styles.normal}>Consegue manter contato visual por muito tempo?</Text>
                        <Seletor
                            selecionado={paciente.contatoVisual}
                            aoMudar={value=>setPaciente({...paciente, contatoVisual: value})}
                            lista={simOuNao}
                        />
                        <Text style={styles.normal}>Aproxima objetos dos olhos?</Text>
                        <Seletor
                            selecionado={paciente.aproximaObjetos}
                            aoMudar={value=>setPaciente({...paciente, aproximaObjetos: value})}
                            lista={simOuNao}
                        />
                        <Text style={styles.normal}>Afasta os objetos?</Text>
                        <Seletor
                            selecionado={paciente.afastaObjetos}
                            aoMudar={value=>setPaciente({...paciente, afastaObjetos: value})}
                            lista={simOuNao}
                        />


                        <Text style={styles.normal}>Movimento excessivo dos olhos?</Text>
                        <Seletor
                            selecionado={paciente.movimentoOlhos}
                            aoMudar={value=>setPaciente({...paciente, movimentoOlhos: value})}
                            lista={simOuNao}
                        />
                        <Text style={styles.normal}>Já realizou avaliação oftalmológica?</Text>
                        <Seletor
                            selecionado={paciente.avOftalmo}
                            aoMudar={value=>setPaciente({...paciente, avOftalmo: value})}
                            lista={simOuNao}
                        />
                        <Text style={styles.normal}>Reclama de dores de cabeça constantes, principalmente na região fronto-temporal?</Text>
                        <Seletor
                            selecionado={paciente.dorCabeca}
                            aoMudar={value=>setPaciente({...paciente, dorCabeca: value})}
                            lista={simOuNao}
                        />

                        <Text style={styles.titulo}>Audição</Text>

                        <Text style={styles.normal}>Apresenta dificuldade auditiva?</Text>
                        <Seletor
                            selecionado={paciente.difAuditiva}
                            aoMudar={value=>setPaciente({...paciente, difAuditiva: value})}
                            lista={simOuNao}
                        />
                        <Text style={styles.normal}>Já realizou avaliação?</Text>
                        <Seletor
                            selecionado={paciente.realizouAv}
                            aoMudar={value=>setPaciente({...paciente, realizouAv: value})}
                            lista={simOuNao}
                        />

                        <Text style={styles.titulo}>Desempenho acadêmico</Text>

                        <Text style={styles.normal}>Frequenta a escola?</Text>
                        <Seletor
                            selecionado={paciente.escola?.frequenta}
                            aoMudar={value=>setPaciente({...paciente, escola: {...paciente.escola, frequenta: value}})}
                            lista={simOuNao}
                        />

                        {paciente.escola.frequenta === 'sim' && (
                            <Input
                                titulo='Qual o nome da escola?'
                                valor={paciente.escola?.nome}
                                callback={newText=>setPaciente({...paciente, escola: {...paciente.escola, nome: newText}})}
                            />
                        )}
                        <Text style={styles.normal}>Faz AEE?</Text>
                        <Seletor
                            selecionado={paciente.escola?.aee}
                            aoMudar={value=>setPaciente({...paciente, escola: {...paciente.escola, aee: value}})}
                            lista={simOuNao}
                        />
                        <Input
                            titulo='Qual a série?'
                            valor={paciente.escola?.serie}
                            callback={newText=>setPaciente({...paciente, escola: {...paciente.escola, serie: newText}})}
                        />
                        <Input
                            titulo='Qual o turno?'
                            valor={paciente.escola?.turno}
                            callback={newText=>setPaciente({...paciente, escola: {...paciente.escola, turno: newText}})}
                        />
                        <Input
                            titulo='Apresenta dificuldade na aprendizagem?'
                            valor={paciente.difAprend}
                            callback={newText=>setPaciente({...paciente, difAprend: newText})}
                        />
                        <Input
                            titulo='Como é o comportamento no âmbito escolar?'
                            valor={paciente.comportEscola}
                            callback={newText=>setPaciente({...paciente, comportEscola: newText})}
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