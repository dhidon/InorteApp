import React, { useContext } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { styles } from "../styles/Styles";

import Input from './Input'

import { AnamneseContext } from "../contexts/anamneseContext";

export default function Sintomas(){
    const {paciente, setPaciente} = useContext(AnamneseContext)

    return (
        <>
            <Text style={styles.titulo}>2 Sintomas</Text>

            <View style={styles.inputArea}>
                <Input
                    titulo="Qual o principal motivo do paciente estar realizando esta avaliação?"
                    valor={paciente.motivoAvaliacao}
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
                            {item.value === 'sim' &&
                                <TextInput
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
                            }
                        </View>
                    </TouchableOpacity>
                )}
            </View>
        </>
    )
}