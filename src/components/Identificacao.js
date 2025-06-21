import React, { useContext } from 'react'
import { View, Text, TextInput } from 'react-native'
import { styles, colors } from '../styles/Styles'

import { AnamneseContext } from '../contexts/anamneseContext'

import { estadoCivil } from '../constants/anamneseOptions'

import Input from './Input'
import Seletor from './Seletor'


export default function Identificacao(){
    const {paciente, setPaciente, formatarCep, formatarData, formatarSus} = useContext(AnamneseContext)

    return (
        <>
            <Text style={styles.titulo}>1. Dados de Identificação</Text>

                <View style={styles.inputArea}>
                    <Input
                        titulo="Nome completo:"
                        valor={paciente.nome}
                        callback={newText => setPaciente({...paciente, nome: newText})}
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
                        valor={paciente.endereco}
                        callback={newText => setPaciente({...paciente, endereco: newText})}
                        legenda='Rua e número da casa'
                    />
                    <Input
                        legenda="Bairro:"
                        valor={paciente.bairro}
                        callback={newText => setPaciente({...paciente, bairro: newText})}
                    />
                    <Input
                        legenda="Cidade, UF:"
                        valor={paciente.cidadeUf}
                        callback={newText => setPaciente({...paciente, cidadeUf: newText})}
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
                        valor={paciente.nomeMae}
                        callback={newText => setPaciente({...paciente, nomeMae: newText})}
                    />
                    <Input
                        legenda="Data de nascimento:"
                        valor={paciente.nascimentoMae}
                        callback={texto=>formatarData(texto, setPaciente, 'nascimentoMae')}
                    />
                    <Input
                        legenda="Profissão:"
                        valor={paciente.profissaoMae}
                        callback={newText => setPaciente({...paciente, profissaoMae: newText})}
                    />
                </View>

                <View style={[styles.inputArea, {gap: 7}]}>
                    <Text style={styles.normal}>Dados do pai:</Text>
                    <Input
                        legenda="Nome:"
                        valor={paciente.nomePai}
                        callback={newText => setPaciente({...paciente, nomePai: newText})}
                    />
                    <Input
                        legenda="Data de nascimento:"
                        valor={paciente.nascimentoPai}
                        callback={texto=>formatarData(texto, setPaciente, 'nascimentoPai')}
                    />
                    <Input
                        legenda="Profissão:"
                        valor={paciente.profissaoPai}
                        callback={newText => setPaciente({...paciente, profissaoPai: newText})}
                    />
                </View>

                <View style={[styles.inputArea, {gap: 7}]}>
                    <Text style={styles.normal}>Estado civil dos pais</Text>
                    <Seletor
                        selecionado={paciente.estadoCivilSelecionado}
                        aoMudar={value=>setPaciente({...paciente, estadoCivilSelecionado: value})}
                        lista={estadoCivil}
                    />

                    {(paciente.estadoCivilSelecionado === 'separados' || paciente.estadoCivilSelecionado === 'divorciados') &&
                    <View style={[styles.inputArea, {gap: 7, width: '100%'}]}>
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
                    }
                </View>
        </>
    )
}