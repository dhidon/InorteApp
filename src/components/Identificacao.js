import React, { useContext } from 'react'
import { View, Text, TextInput, KeyboardAvoidingView, ScrollView, TouchableOpacity } from 'react-native'
import { styles, colors, platformInfo } from '../styles/Styles'
import { parse, format } from 'date-fns'

import { AnamneseContext } from '../contexts/anamneseContext'

import { listaEstadoCivil, guarda, listaGuardiaoLegal } from '../constants/anamneseOptions'

import Input from './Input'
import Seletor from './Seletor'


export default function Identificacao(){
    const {paciente, setPaciente, formatarCep, formatarData, formatarSus} = useContext(AnamneseContext)

    function formatData(newDate, key, subkey){
        const onlyNumbers = newDate.replace(/\D/g, '');

        if (onlyNumbers.length === 8) {
            const date = parse(onlyNumbers, 'ddMMyyyy', new Date());
            const formatedDate = format(date, 'dd/MM/yyyy');
            setPaciente({
                ...paciente,
                [key]: {
                    ...paciente[key],
                    [subkey]: formatedDate
                }
            });
        } else {
            setPaciente({
                ...paciente,
                [key]: {
                    ...paciente[key],
                    [subkey]: newDate
                }
            });
        }
    }

    return (
        <>
            <Text style={styles.titulo}>1. Dados de Identificação</Text>

                <View style={styles.inputArea}>
                    <View>
                        <Input
                            titulo="Nome completo:"
                            valor={paciente.nome}
                            callback={newText => setPaciente({...paciente, nome: newText})}
                        />
                        <Text style={styles.normal}>Nº SUS:</Text>
                        <TextInput
                            value={paciente.sus}
                            style={[styles.input, {width: 160}]}
                            placeholder='___ ___ ___ ___'
                            onChangeText={formatarSus}
                            maxLength={19}
                            keyboardType="numeric"
                        />
                    </View>

                    <Text style={styles.normal}>Data de nascimento:</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <TextInput
                            style={[styles.input, {width: '60%'}]}
                            placeholder='DD/MM/AAAA'
                            onChangeText={texto=>formatarData(texto, setPaciente, 'nascimento')}
                            value={paciente.nascimento}
                            keyboardType='numeric'
                        />
                        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 30}}>
                            <Text style={styles.normal}>Idade:</Text>
                            <Text style={{ borderRadius: 3, padding: 5, backgroundColor: colors.primary, color: colors.white, height: 40, fontSize: 18}}>
                                {paciente.idade ? paciente.idade : '0'}
                            </Text>
                        </View>
                    </View>
                    <View style={{gap: 7}}>
                        <Input
                            titulo="Endereço:"
                            valor={paciente.endereco?.ruaN}
                            callback={newText => setPaciente({...paciente, endereco: {...paciente.endereco, ruaN: newText}})}
                            legenda='Rua e número da casa'
                        />
                        <Input
                            legenda="Bairro:"
                            valor={paciente.endereco?.bairro}
                            callback={newText => setPaciente({...paciente, endereco: {...paciente.endereco, bairro: newText}})}
                        />
                        <Input
                            legenda="Cidade, UF:"
                            valor={paciente.endereco?.cidadeUf}
                            callback={newText => setPaciente({...paciente, endereco: {...paciente.endereco, cidadeUf: newText}})}
                        />
                        <Input
                            valor={paciente.endereco?.cep}
                            callback={formatarCep}
                            legenda='CEP: __.___-___'
                        />
                    </View>
                    <Input
                        titulo='Contato:'
                        valor={paciente.contato}
                        callback={newText=>setPaciente({...paciente, contato: newText})}
                        legenda='(__)_____-____'
                    />
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
                        valor={paciente.mae?.nome}
                        callback={newText => setPaciente({...paciente, mae: {...paciente.mae, nome: newText}})}
                    />
                    <Input
                        legenda="Data de nascimento:"
                        valor={paciente.mae?.nascimento}
                        callback={texto=>formatData(texto, 'mae', 'nascimento')}
                    />
                    <Input
                        legenda="Profissão:"
                        valor={paciente.mae?.profissao}
                        callback={newText => setPaciente({...paciente, mae: {...paciente.mae, profissao: newText}})}
                    />
                </View>

                <View style={[styles.inputArea, {gap: 7}]}>
                    <Text style={styles.normal}>Dados do pai:</Text>
                    <Input
                        legenda="Nome:"
                        valor={paciente.pai?.nome}
                        callback={newText => setPaciente({...paciente, pai: {...paciente.pai, nome: newText}})}
                    />
                    <Input
                        legenda="Data de nascimento:"
                        valor={paciente.pai?.nascimento}
                        callback={texto=>formatData(texto, 'pai', 'nascimento')}
                    />
                    <Input
                        legenda="Profissão:"
                        valor={paciente.pai?.profissao}
                        callback={newText => setPaciente({...paciente, pai: {...paciente.pai, profissao: newText}})}
                    />
                </View>

                <View style={[styles.inputArea, {gap: 7}]}>
                    <Text style={styles.normal}>Estado civil dos pais</Text>
                    <Seletor
                        selecionado={paciente.pais?.estadoCivil}
                        aoMudar={value=>setPaciente({...paciente, pais: {...paciente.pais, estadoCivil: value}})}
                        lista={listaEstadoCivil}
                    />

                    {(paciente.pais?.estadoCivil === 'separados' || paciente.pais?.estadoCivil === 'divorciados') &&
                    <View style={[styles.inputArea, {gap: 7, width: '100%'}]}>
                        <Input
                            titulo='Que idade a criança tinha quando os pais se separaram?'
                            valor={paciente.idadeSeparacao}
                            kt='numeric'
                            callback={newText=>setPaciente({...paciente, idadeSeparacao: newText})}
                        />
                        <Text style={styles.normal}>Quem tem a guarda da criança?</Text>
                        <Seletor
                            selecionado={paciente.guardiao}
                            aoMudar={value=>setPaciente({...paciente, guardiao: value})}
                            lista={guarda}
                        />
                        {paciente.guardiao !== 'outro'
                        ? <>
                            <Input
                                titulo='Qual o nome do conjuge do guardião?'
                                valor={paciente.padrastoMadrasta}
                                callback={newText => setPaciente({...paciente, padrastoMadrasta: newText})}
                            />
                        </>
                        : <View style={{gap: 7, width: '100%'}}>
                            <Input
                                titulo='Qual o motivo?'
                                valor={paciente.outroGuardiao?.motivo}
                                callback={newText=>setPaciente({...paciente, outroGuardiao: {...paciente.outroGuardiao, motivo: newText}})}
                            />
                            <Text style={styles.normal}>Quem possui a guarda legal?</Text>
                            <Seletor
                                selecionado={paciente.guardiaoLegal}
                                aoMudar={value=>setPaciente({...paciente, guardiaoLegalSelecionado: value})}
                                lista={listaGuardiaoLegal}
                            />
                            <Input
                                valor={paciente.outroGuardiao?.nome}
                                legenda='Nome'
                                callback={newText=>setPaciente({...paciente, guardiao: {...paciente.guardiao, nome: newText}})}
                            />
                        </View>}
                    </View> 
                    }
                </View>
        </>
    )
}