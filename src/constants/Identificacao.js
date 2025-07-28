import React, { useContext, useEffect } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import { styles, colors } from '../styles/Styles'
import { parse, format } from 'date-fns'
import * as ImagePicker from 'expo-image-picker'
import Fontisto from '@expo/vector-icons/Fontisto';

import { AnamneseContext } from '../contexts/anamneseContext'

import { listaEstadoCivil, guarda, listaGuardiaoLegal } from './anamneseOptions'

import Input from '../components/Input'
import Seletor from '../components/Seletor'


export default function Identificacao(){
    const {paciente, setPaciente, formatarCep, formatarData, formatarSus, setFotoPaciente, fotoPaciente} = useContext(AnamneseContext)

    function formatData(newDate, key, subkey) {
        const onlyNumbers = newDate.replace(/\D/g, '');
    
        if (onlyNumbers.length === 8) {
            const date = parse(onlyNumbers, 'ddMMyyyy', new Date());
            const formatedDate = format(date, 'dd/MM/yyyy');
    
            setPaciente(prev => ({
                ...prev,
                [key]: {
                    ...prev[key],
                    [subkey]: formatedDate
                }
            }));
        } else {
            setPaciente(prev => ({
                ...prev,
                [key]: {
                    ...prev[key],
                    [subkey]: newDate
                }
            }));
        }
    }

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
    
        setPaciente(prev => ({ ...prev, idade: idade }));
    }, [paciente.nascimento])

    const pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                aspect: [1,1],
                quality: 1,
                mediaTypes: ['images'],
                selectionLimit: 1
            })

            if(!result.canceled && result.assets && result.assets.length > 0){
                const imageUri = result.assets[0].uri
                setFotoPaciente(imageUri)
                
                return
            } else {
                setFotoPaciente(null)
            }
        } catch (error) {
            console.log(error)
            alert(error)
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
                        callback={newText => {setPaciente( prev => ({...prev, nome: newText}))}}
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
                        callback={newText => setPaciente(prev => ({...prev, endereco: {...prev.endereco, ruaN: newText}}))}
                        legenda='Rua e número da casa'
                    />
                    <Input
                        legenda="Bairro:"
                        valor={paciente.endereco?.bairro}
                        callback={newText => setPaciente(prev => ({...prev, endereco: {...prev.endereco, bairro: newText}}))}
                    />
                    <Input
                        legenda="Cidade, UF:"
                        valor={paciente.endereco?.cidadeUf}
                        callback={newText => setPaciente(prev => ({...prev, endereco: {...prev.endereco, cidadeUf: newText}}))}
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
                    callback={newText=>setPaciente(prev => ({...prev, contato: newText}))}
                    legenda='(__)_____-____'
                />
                <Input
                    titulo="Informante:"
                    valor={paciente.informante}
                    callback={newText => setPaciente(prev => ({...prev, informante: newText}))}
                    legenda='Qual o nome de quem está informando?'
                />
            </View>

            <View style={[styles.inputArea, {gap: 7}]}>
                <Text style={styles.normal}>Dados da mãe:</Text>
                <Input
                    legenda="Nome:"
                    valor={paciente.mae?.nome}
                    callback={newText => setPaciente(prev => ({...prev, mae: {...prev.mae, nome: newText}}))}
                />
                <Input
                    legenda="Data de nascimento:"
                    valor={paciente.mae?.nascimento}
                    callback={texto=>formatData(texto, 'mae', 'nascimento')}
                />
                <Input
                    legenda="Profissão:"
                    valor={paciente.mae?.profissao}
                    callback={newText => setPaciente(prev => ({...prev, mae: {...prev.mae, profissao: newText}}))}
                />
            </View>

            <View style={[styles.inputArea, {gap: 7}]}>
                <Text style={styles.normal}>Dados do pai:</Text>
                <Input
                    legenda="Nome:"
                    valor={paciente.pai?.nome}
                    callback={newText => setPaciente(prev => ({...prev, pai: {...prev.pai, nome: newText}}))}
                />
                <Input
                    legenda="Data de nascimento:"
                    valor={paciente.pai?.nascimento}
                    callback={texto=>formatData(texto, 'pai', 'nascimento')}
                />
                <Input
                    legenda="Profissão:"
                    valor={paciente.pai?.profissao}
                    callback={newText => setPaciente(prev => ({...prev, pai: {...prev.pai, profissao: newText}}))}
                />
            </View>

            <View style={[styles.inputArea, {gap: 7}]}>
                <Text style={styles.normal}>Estado civil dos pais</Text>
                <Seletor
                    selecionado={paciente.pais?.estadoCivil}
                    aoMudar={value=>setPaciente(prev => ({...prev, pais: {...prev.pais, estadoCivil: value}}))}
                    lista={listaEstadoCivil}
                />

                {(paciente.pais?.estadoCivil === 'separados' || paciente.pais?.estadoCivil === 'divorciados') &&
                <View style={[styles.inputArea, {gap: 7, width: '100%'}]}>
                    <Input
                        titulo='Que idade a criança tinha quando os pais se separaram?'
                        valor={paciente.idadeSeparacao}
                        kt='numeric'
                        callback={newText=>setPaciente(prev => ({...prev, idadeSeparacao: newText}))}
                    />
                    <Text style={styles.normal}>Quem tem a guarda da criança?</Text>
                    <Seletor
                        selecionado={paciente.guardiao}
                        aoMudar={value=>setPaciente(prev => ({...prev, guardiao: value}))}
                        lista={guarda}
                    />
                    {paciente.guardiao !== 'Outro'
                    ? <>
                        <Input
                            titulo='Qual o nome do conjuge do guardião?'
                            valor={paciente.padrastoMadrasta}
                            callback={newText => setPaciente(prev => ({...prev, padrastoMadrasta: newText}))}
                        />
                    </>
                    : <View style={{gap: 7, width: '100%'}}>
                        <Input
                            titulo='Qual o motivo?'
                            valor={paciente.outroGuardiao?.motivo}
                            callback={newText=>setPaciente(prev => ({...prev, outroGuardiao: {...prev.outroGuardiao, motivo: newText}}))}
                        />
                        <Text style={styles.normal}>Quem possui a guarda legal?</Text>
                        <Seletor
                            selecionado={paciente.guardiaoLegal}
                            aoMudar={value=>setPaciente(prev =>({...prev, guardiaoLegal: value}))}
                            lista={listaGuardiaoLegal}
                        />
                        <Input
                            valor={paciente.outroGuardiao?.nome}
                            legenda='Nome'
                            callback={newText=>setPaciente(prev => ({...prev, outroGuardiao: {...prev.outroGuardiao, nome: newText}}))}
                            onClick={e => e.stopPropagation()}
                        />
                    </View>}
                </View> 
                }

                <View style={{flexDirection: 'row', gap: 20, marginBottom: 10, justifyContent: "space-between", alignItems: 'center'}}>
                    <TouchableOpacity onPress={pickImage} style={styles.input}>
                        <Text style={styles.normal}>Adicionar imagem do paciente</Text>
                    </TouchableOpacity>

                    {fotoPaciente
                    ?<Image source={{uri: fotoPaciente}} style={{height: 200, width: 150}}/>
                    :<Fontisto name="picture" size={24} color="black" />
                    }
                </View>
            </View>
        </>
    )
}