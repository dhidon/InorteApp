import React, { useContext, useEffect } from 'react'
import { View, Text, KeyboardAvoidingView, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import { styles, colors } from '../../../styles/Styles'
import Slider from '@react-native-community/slider'

import { AnamneseContext } from '../../../contexts/anamneseContext'
import { estadoCivil, guarda, guardiaoLegal, condicoes, simOuNao, consistencias, problemaAlimentacao } from '../../../constants/anamneseOptions'
import Header from '../../../components/Header'
import Seletor from '../../../components/Seletor'

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
        if (!paciente.condicoes) {
            setPaciente({...paciente, condicoes: condicoes})
        }
    }, [])

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
                        <Text style={styles.normal}>Nome completo:</Text>
                        <TextInput
                            placeholder={paciente.nome}
                            style={styles.input}
                            onChangeText={newText => setPaciente({...paciente, nome: newText})}
                            value={paciente.nome}
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
                        <Text style={styles.normal}>Endereço:</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={(newText) => setPaciente({...paciente, enderecoendereco: newText})}
                            value={paciente.endereco}
                            placeholder='Rua e número da casa'
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={(newText) => setPaciente({...paciente, endereco: newText})}
                            value={paciente.endereco}
                            placeholder='Bairro'
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={(newText) => setPaciente({...paciente, cidadeUf: newText})}
                            value={paciente.cidadeUf}
                            placeholder='Cidade, UF'
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={formatarCep}
                            value={paciente.cep}
                            placeholder='CEP'
                            keyboardType='numeric'
                        />
                    </View>

                    <View style={styles.inputArea}>
                        <Text style={styles.normal}>Informante:</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={(newText) => setPaciente({...paciente, informante: newText})}
                            value={paciente.informante}
                            placeholder='Qual o nome de quem está informando?'
                        />
                    </View>

                    <View style={[styles.inputArea, {gap: 7}]}>
                        <Text style={styles.normal}>Dados da mãe:</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={newText => setPaciente({...paciente, nomeMae: newText})}
                            value={paciente.nomeMae}
                            placeholder='Nome'
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={texto=>formatarData(texto, setPaciente, 'nascimentoMae')}
                            value={paciente.nascimentoMae}
                            placeholder='Data de nascimento'
                        />
                        <TextInput
                            style={styles.input}
                            value={paciente.profissaoMae}
                            onChangeText={newText => setPaciente({...paciente, profissaoMae: newText})}
                            placeholder='Profissão'
                        />
                    </View>

                    <View style={[styles.inputArea, {gap: 7}]}>
                        <Text style={styles.normal}>Dados do pai:</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={newText => setPaciente({...paciente, nomePai: newText})}
                            value={paciente.nomePai}
                            placeholder='Nome'
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={texto=>formatarData(texto, setPaciente, 'nascimentoPai')}
                            value={paciente.nascimentoPai}
                            placeholder='Data de nascimento'
                        />
                        <TextInput
                            style={styles.input}
                            value={paciente.profissaoPai}
                            onChangeText={newText => setPaciente({...paciente, profissaoPai: newText})}
                            placeholder='Profissão'
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
                            <Text style={styles.normal}>Que idade a criança tinha quando os pais se separaram?</Text>
                            <TextInput
                                style={styles.input}
                                value={paciente.idadeSeparacao}
                                onChangeText={newText=>setPaciente({...paciente, idadeSeparacao: newText})}
                                keyboardType='numeric'
                            />
                            <Text style={styles.normal}>Quem tem a guarda da criança?</Text>
                            <Seletor
                                selecionado={paciente.guardaSelecionada}
                                aoMudar={value=>setPaciente({...paciente, guardaSelecionada: value})}
                                lista={guarda}
                            />
                            {paciente.guardaSelecionada !== 'outro'
                            ? <View style={[styles.inputArea, {gap: 7, width: '100%'}]}>
                                <Text style={styles.normal}>Qual o nome do padrasto/madrasta?</Text>
                                <TextInput
                                style={styles.input}
                                value={paciente.padrastroMadrasta}
                                onChangeText={newText => setPaciente({...paciente, padrastoMadrasta: newText})}
                                />
                            </View>
                            : <View style={[styles.inputArea, {gap: 7, width: '100%'}]}>
                                <Text style={styles.normal}>Qual o motivo?</Text>
                                <TextInput
                                    style={styles.input}
                                    value={paciente.motivo}
                                    onChangeText={newText=>setPaciente({...paciente, motivo: newText})}
                                />
                                <Text style={styles.normal}>Quem possui a guarda legal?</Text>
                                <Seletor
                                    selecionado={paciente.guardiaoLegalSelecionado}
                                    aoMudar={value=>setPaciente({...paciente, guardiaoLegalSelecionado: value})}
                                    lista={guardiaoLegal}
                                />
                                <TextInput
                                    style={styles.input }
                                    value={paciente.guardiao}
                                    onChangeText={newText=>setPaciente({...paciente, guardiao: newText})}
                                    placeholder='Nome'
                                />
                            </View>}
                        </View> 
                        : null}
                    </View>

                    <Text style={styles.titulo}>2 Sintomas</Text>

                    <View style={styles.inputArea}>
                        <Text style={styles.normal}>Qual o principal motivo do paciente estar realizando esta avaliação?</Text>
                        <TextInput
                            style={styles.input}
                            value={paciente.motivo}
                            onChangeText={newText=>setPaciente({...paciente, motivo: newText})}
                        />
                        <Text style={styles.normal}>Que profissionais estão fazendo o acompanhamento?</Text>
                        <TextInput
                            style={styles.input}
                            value={paciente.profissionais}
                            onChangeText={newText=>setPaciente({...paciente, profissionais: newText})}
                        />
                        <Text style={styles.normal}>Com quem o adolescente passa mais tempo?</Text>
                        <TextInput
                            style={styles.input}
                            value={paciente.convive}
                            onChangeText={newText=>setPaciente({...paciente, convive: newText})}
                        />
                    </View>

                    <View style={styles.inputArea}>
                        <Text style={styles.normal}>Pressione as condições ou doenças que algum membro da família (pais, irmãos, tias, tios, primos, avós) já teve. Anote o grau de parentesco com a criança</Text>
                        {paciente.condicoes?.map((item, index)=>
                            <TouchableOpacity key={index} onPress={() => {
                                const newCondicoes = [...paciente.condicoes];
                                newCondicoes[index] = {
                                    ...newCondicoes[index],
                                    value: newCondicoes[index].value === 'não' ? 'sim' : 'não'
                                };
                                setPaciente({...paciente, condicoes: newCondicoes});
                            }}>
                                <View>
                                    <View style={{flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1}}>
                                        <Text>{item.label}</Text>
                                        <Text style={{fontWeight: 'bold'}}>{item.value}</Text>
                                    </View>
                                    {item.value === 'sim'
                                    ?<TextInput
                                        placeholder='Qual o parentesco?'
                                        style={[styles.input, {marginTop: 7}]}
                                        value={item.parentesco}
                                        onChangeText={newText=>{
                                            const newCondicoes = [...paciente.condicoes];
                                            newCondicoes[index] = {
                                                ...newCondicoes[index],
                                                parentesco: newText
                                            };
                                            setPaciente({...paciente, condicoes: newCondicoes});
                                        }}
                                    />
                                    :null
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
                        ? <View style={styles.inputArea}>
                            <Text style={styles.normal}>Quais?</Text>
                            <TextInput
                                value={paciente.difAlimentar}
                                style={styles.input}
                                onChangeText={newText=>setPaciente({...paciente, difAlimentar: newText})}
                            />
                        </View>
                        : null}
                        <Text style={[styles.normal, {marginBottom: 5}]}>As respostas a seguir devem ser referentes ao estado atual da criança</Text>
                        <Text style={[styles.normal, {marginBottom: 5}]}>Quais das consistencias alimentares asseguir o adolescente aceita bem?</Text>
                        {consistencias.map((item, index)=>{
                            return <TouchableOpacity key={index} onPress={()=>{
                                const newConsistencias = [...consistencias]
                                newConsistencias[index].value = item.value === 'não' ? 'sim' : 'não'
                                setPaciente({...paciente, consistencias: newConsistencias})
                            }}>
                                <View style={{flexDirection: 'row', borderBottomWidth: 1, justifyContent: 'space-between', marginBottom: 5}}>
                                    <Text>{item.label}</Text>
                                    <Text style={{fontWeight:'bold'}}>{item.value}</Text>
                                </View>
                            </TouchableOpacity>
                        })}
                        <Text style={[styles.normal, {marginBottom: 5}]}>Apresentou algum problema na alimenteação?</Text>
                        {problemaAlimentacao.map((item, index)=>{
                            return <TouchableOpacity key={index} onPress={()=>{
                                const newProbAlimentacao = [...problemaAlimentacao]
                                newProbAlimentacao[index].value = item.value === 'não' ? 'sim' : 'não'
                                setPaciente({...paciente, problemaAlimentacao: newProbAlimentacao})
                            }}>
                                <View style={{flexDirection: 'row', borderBottomWidth: 1, justifyContent: 'space-between', marginBottom: 5}}>
                                    <Text>{item.label}</Text>
                                    <Text style={{fontWeight:'bold'}}>{item.value}</Text>
                                </View>
                            </TouchableOpacity>
                        })}
                        <Text style={styles.normal}>Apresenta alguma seletividade em relação a comida?</Text>
                        <TextInput
                            style={styles.input}
                            value={paciente.seletividadeAlimentar}
                            onChangeText={newText=>setPaciente({...paciente, seletividadeAlimentar: newText})}
                        />    
                    </View>

                    <Text style={styles.titulo}>Sono e desenvolvimento</Text>

                    <View style={styles.inputArea}>
                        <Text style={styles.normal}>Como é o sono?</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='É tranquilo, agitado, acorda durante a noite...?'
                            value={paciente.formaSono}
                            onChangeText={newText=>setPaciente({...paciente, formaSono: newText})}
                        />
                        <Text style={styles.normal}>Dorme sozinho?</Text>
                        <Seletor
                            selecionado={paciente.dormeSozinhoSelecionado}
                            aoMudar={value=>setPaciente({...paciente, dormeSozinhoSelecionado: value})}
                            lista={simOuNao}
                        />
                    </View>




                    <TouchableOpacity style={styles.teste} onPress={()=>console.log(paciente.condicoes)}>
                        <Text style={styles.buttonText}>Teste</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}