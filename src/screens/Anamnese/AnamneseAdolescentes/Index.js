import React, { useContext, useEffect } from 'react'
import { View, Text, KeyboardAvoidingView, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import { styles, colors } from '../../../styles/Styles'
import Slider from '@react-native-community/slider'

import { AnamneseContext } from '../../../contexts/anamneseContext'
import { caracteristicasSociais, outrasDificuldades, nivelHabilidades, fatoresDif, estadoCivil, guarda, guardiaoLegal, simOuNao, consistencias, problemaAlimentacao, itensSignificantes, comportamentos, condicoesFilho } from '../../../constants/anamneseOptions'
import Header from '../../../components/Header'
import Seletor from '../../../components/Seletor'
import ListaAlternativas from '../../../components/ListaAlternativas'
import Input from '../../../components/Input'

export default function AnmenseAdolescentes(){
    const { setPaciente, paciente, formatarData, formatarSus, formatarCep } = useContext(AnamneseContext)

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
            <ScrollView>
                <Header setor={'Anamnese de adolescentes'}/>
                
                <View style={styles.contentArea}>

                    <View style={styles.inputArea}>
                        <Text style={styles.normal}>Data:</Text>
                        <TextInput 
                            style={styles.input} 
                            onChangeText={texto=>formatarData(texto, setPaciente, 'data')}
                            placeholder='DD/MM/AAAA'
                            value={paciente.data}
                            keyboardType='numeric'
                        />
                    </View>

                    <Text style={styles.titulo}>1. Dados de Identificação</Text>

                    <View style={styles.inputArea}>
                        <Input
                            titulo="Nome completo:"
                            obj={paciente}
                            callback={newText => setPaciente({...paciente, nome: newText})}
                            chave="nome"
                        />
                        <Text style={styles.normal}>Nº SUS:</Text>
                        <TextInput
                            value={paciente.sus}
                            style={[styles.input, {width: 120}]}
                            placeholder='___ ___ ___ ___'
                            onChangeText={formatarSus}
                            maxLength={19}
                            keyboardType="numeric"
                        />
                    </View>

                    <View style={styles.inputArea}>
                        <Text style={styles.normal}>Data de nascimento:</Text>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <TextInput
                                style={[styles.input, {width: '70%'}]}
                                placeholder='DD/MM/AAAA'
                                onChangeText={texto=>formatarData(texto, setPaciente, 'nascimento')}
                                value={paciente.nascimento}
                                keyboardType='numeric'
                            />
                            <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 30}}>
                                <Text style={styles.normal}>Idade:</Text>
                                <Text style={{ borderRadius: 3, padding: 5, backgroundColor: colors.primary, color: colors.white, height: 40, fontSize: 18}}>
                                    {paciente.idade ? paciente.idade : '0'}
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.inputArea, {gap: 7}]}>
                        <Input
                            titulo="Endereço:"
                            obj={paciente}
                            callback={newText => setPaciente({...paciente, endereco: newText})}
                            chave="endereco"
                            legenda='Rua e número da casa'
                        />
                        <Input
                            legenda="Bairro:"
                            valor={paciente.bairro}
                            callback={newText => setPaciente({...paciente, bairro: newText})}
                        />
                        <Input
                            legenda="Cidade, UF:"
                            obj={paciente}
                            callback={newText => setPaciente({...paciente, cidadeUf: newText})}
                            chave="cidadeUf"
                        />
                        <Input
                            valor={paciente.cep}
                            callback={formatarCep}
                            legenda='CEP: __.___-___'
                        />
                    </View>

                    <View style={styles.inputArea}>
                        <Input
                            titulo="Informante:"
                            valor={paciente.informante}
                            callback={newText => setPaciente({...paciente, informante: newText})}
                            legenda='Qual o nome de quem está informando?'
                        />
                    </View>

                    <View style={[styles.inputArea, {gap: 7}]}>
                        <Text style={styles.normal}>Dados da mãe:</Text>
                        <Input
                            legenda="Nome:"
                            obj={paciente}
                            callback={newText => setPaciente({...paciente, nomeMae: newText})}
                            chave="nomeMae"
                        />
                        <Input
                            legenda="Data de nascimento:"
                            obj={paciente}
                            callback={texto=>formatarData(texto, setPaciente, 'nascimentoMae')}
                            chave="nascimentoMae"
                        />
                        <Input
                            legenda="Profissão:"
                            obj={paciente}
                            callback={newText => setPaciente({...paciente, profissaoMae: newText})}
                            chave="profissaoMae"
                        />
                    </View>

                    <View style={[styles.inputArea, {gap: 7}]}>
                        <Text style={styles.normal}>Dados do pai:</Text>
                        <Input
                            legenda="Nome:"
                            obj={paciente}
                            callback={newText => setPaciente({...paciente, nomePai: newText})}
                            chave="nomePai"
                        />
                        <Input
                            legenda="Data de nascimento:"
                            obj={paciente}
                            callback={texto=>formatarData(texto, setPaciente, 'nascimentoPai')}
                            chave="nascimentoPai"
                        />
                        <Input
                            legenda="Profissão:"
                            obj={paciente}
                            callback={newText => setPaciente({...paciente, profissaoPai: newText})}
                            chave="profissaoPai"
                        />
                    </View>

                    <View style={[styles.inputArea, {gap: 7}]}>
                        <Text style={styles.normal}>Estado civil dos pais</Text>
                        <Seletor
                        selecionado={paciente.estadoCivilSelecionado}
                        aoMudar={value=>setPaciente({...paciente, estadoCivilSelecionado: value})}
                        lista={estadoCivil}
                        />

                        {paciente.estadoCivilSelecionado === 'separados' || paciente.estadoCivilSelecionado === 'divorciados'
                        ? <View style={[styles.inputArea, {gap: 7, width: '100%'}]}>
                            <Input
                                titulo='Que idade a criança tinha quando os pais se separaram?'
                                valor={paciente.idadeSeparacao}
                                kt='numeric'
                                callback={newText=>setPaciente({...paciente, idadeSeparacao: newText})}
                            />
                            <Text style={styles.normal}>Quem tem a guarda da criança?</Text>
                            <Seletor
                                selecionado={paciente.guardaSelecionada}
                                aoMudar={value=>setPaciente({...paciente, guardaSelecionada: value})}
                                lista={guarda}
                            />
                            {paciente.guardaSelecionada !== 'outro'
                            ? <View style={[styles.inputArea, {gap: 7, width: '100%'}]}>
                                <Input
                                    titulo='Qual o nome do padrasto/madrasta?'
                                    valor={paciente.padrastoMadrasta}
                                    callback={newText => setPaciente({...paciente, padrastoMadrasta: newText})}
                                />
                            </View>
                            : <View style={[styles.inputArea, {gap: 7, width: '100%'}]}>
                                <Input
                                    titulo='Qual o motivo?'
                                    valor={paciente.motivo}
                                    callback={newText=>setPaciente({...paciente, motivo: newText})}
                                />
                                <Text style={styles.normal}>Quem possui a guarda legal?</Text>
                                <Seletor
                                    selecionado={paciente.guardiaoLegalSelecionado}
                                    aoMudar={value=>setPaciente({...paciente, guardiaoLegalSelecionado: value})}
                                    lista={guardiaoLegal}
                                />
                                <Input
                                    valor={paciente.guardiao}
                                    legenda='Nome'
                                    callback={newText=>setPaciente({...paciente, guardiao: newText})}
                                />
                            </View>}
                        </View> 
                        : null}
                    </View>

                    <Text style={styles.titulo}>2 Sintomas</Text>

                    <View style={styles.inputArea}>
                        <Input
                            titulo="Qual o principal motivo do paciente estar realizando esta avaliação?"
                            valor={paciente.motivo}
                            callback={newText=>setPaciente({...paciente, motivo: newText})}
                        />
                        <Input
                            titulo="Que profissionais estão fazendo o acompanhamento?"
                            valor={paciente.profissionais}
                            callback={newText=>setPaciente({...paciente, profissionais: newText})}
                        />
                        <Input
                            titulo="Com quem o adolescente passa mais tempo?"
                            valor={paciente.convive}
                            callback={newText=>setPaciente({...paciente, convive: newText})}
                        />
                    </View>

                    <View style={styles.inputArea}>
                        <Text style={styles.normal}>
                            Pressione as condições ou doenças que algum membro da família (pais, irmãos, tias, tios, primos, avós) já teve. Anote o grau de parentesco com a criança
                        </Text>
                        {paciente.condicoes.map((item, index) =>
                            <TouchableOpacity key={index} onPress={() => {
                                const newCondicoes = [...paciente.condicoes];
                                newCondicoes[index] = {
                                    ...newCondicoes[index],
                                    value: newCondicoes[index].value === 'não' ? 'sim' : 'não'
                                };
                                setPaciente({ ...paciente, condicoes: newCondicoes });
                            }}>
                                <View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1 }}>
                                        <Text>{item.label}</Text>
                                        <Text style={{ fontWeight: 'bold' }}>{item.value}</Text>
                                    </View>
                                    {item.value === 'sim'
                                        ? <TextInput
                                            placeholder='Qual o parentesco?'
                                            style={[styles.input, { marginTop: 7 }]}
                                            value={item.parentesco}
                                            onChangeText={newText => {
                                                const newCondicoes = [...paciente.condicoes];
                                                newCondicoes[index] = {
                                                    ...newCondicoes[index],
                                                    parentesco: newText
                                                };
                                                setPaciente({ ...paciente, condicoes: newCondicoes });
                                            }}
                                        />
                                        : null
                                    }
                                </View>
                            </TouchableOpacity>
                        )}
                    </View>

                    <Text style={styles.titulo}>3. Histórico de saúde</Text>

                    <Text style={styles.titulo}>Gestação e desenvolvimento</Text>

                    <View style={styles.inputArea}>
                        <Text style={styles.normal}>A gestação foi planejada?</Text>
                        <Seletor
                            selecionado={paciente.gestacaoSelecionada}
                            aoMudar={value=>setPaciente({...paciente, gestacaoSelecionada: value})}
                            lista={simOuNao}
                        />
                        <Text style={styles.normal}>Realizou pré-natal?</Text>
                        <Seletor
                            selecionado={paciente.preNatalSelecionado}
                            aoMudar={value=>setPaciente({...paciente, preNatalSelecionado: value})}
                            lista={simOuNao}
                        />
                    </View>

                    <Text style={styles.titulo}>Alimentação</Text>
                    
                    <View style={styles.inputArea}>
                        <Text style={styles.normal}>Mamou quando criança?</Text>
                        <Seletor
                            selecionado={paciente.mamouSelecionado}
                            aoMudar={value=>setPaciente({...paciente, mamouSelecionado: value})}
                            lista={simOuNao}
                        />
                        {paciente.mamouSelecionado === 'sim'
                        ? <View style={[styles.inputArea, {width: '100%', gap: 7}]}>
                            <Text style={styles.normal}>Aleitamento materno exclusivo até quantos meses?</Text>
                            <TextInput
                                style={styles.input}
                                value={paciente.leiteMatExclMeses}
                                onChangeText={newText=>setPaciente({...paciente, leiteMatExclMeses: newText})}
                                keyboardType='numeric'
                            />
                            <Text style={styles.normal}>Mamou até quantos meses?</Text>
                            <TextInput
                                style={styles.input}
                                value={paciente.mamouMeses}
                                onChangeText={newText=>setPaciente({...paciente, mamouMeses: newText})}
                                keyboardType='numeric'
                            />
                        </View>
                        : null
                        }
                        <Text style={styles.normal}>Usou mamadeira?</Text>
                        <Seletor
                            selecionado={paciente.mamadeiraSelecionada}
                            aoMudar={value=>setPaciente({...paciente, mamadeiraSelecionada: value})}
                            lista={simOuNao}
                        />
                        <Text style={styles.normal}>Usou chupeta?</Text>
                        <Seletor
                            selecionado={paciente.chupetaSelecionada}
                            aoMudar={value=>setPaciente({...paciente, chupetaSelecioada: value})}
                            lista={simOuNao}
                        />

                        <Text style={styles.normal}>Com qual idade foi feita a introdução alimentar?</Text>
                            <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 15}}>
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
                            selecionado={paciente.difIntroAlimentarSelecionada}
                            aoMudar={value=>setPaciente({...paciente, difIntroAlimentarSelecionada: value})}
                            lista={simOuNao}
                        />
                        {paciente.difIntroAlimentarSelecionada === 'sim'
                        ? 
                        <>
                            <Input
                                titulo='Quais?'
                                valor={paciente.difAlimentar}
                                callback={newText=>setPaciente({...paciente, difAlimentar: newText})}
                            />
                        </>
                        : null}
                        <Text style={[styles.normal, {marginBottom: 5}]}>As respostas a seguir devem ser referentes ao estado atual do paciente</Text>
                        <ListaAlternativas
                            titulo='Quais das consistencias alimentares asseguir o adolescente aceita bem?'
                            lista={consistencias}
                            chave='consistencias'
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
                        <Text style={styles.normal}>Teve algum problema de crescimento ou desenvolvimento durante os primeiros anos de vida?</Text>
                        <Seletor
                            selecionado={paciente.problemaCrescimentoSelecionado}
                            aoMudar={value=>setPaciente({...paciente, problemaCrescimentoSelecionado: value})}
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
                            titulo='Pressione as condições que e doenças que seu filho já teve'
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
                            selecionado={paciente.usoMedicacaoSelecionado}
                            aoMudar={value=>setPaciente({...paciente, usoMedicacaoSelecionado: value})}
                        />
                        {paciente.usoMedicacaoSelecionado === 'sim'
                        ? <View style={[styles.inputArea, {width: '100%', gap: 7}]}>
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
                        : null}
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

                    <TouchableOpacity style={styles.teste} onPress={()=>console.log(paciente.atividadesFavoritas)}>
                        <Text style={styles.buttonText}>Teste</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}