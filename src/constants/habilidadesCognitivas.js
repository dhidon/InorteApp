import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { AnamneseContext } from '../contexts/anamneseContext'
import { styles } from '../styles/Styles'

import Input from '../components/Input'
import Seletor from '../components/Seletor'
import ListaAlternativas from '../components/ListaAlternativas'
import { outrasDificuldades, simOuNao, nivelHabilidades } from './anamneseOptions'

export default function HabilidadesCognitivas(){
    const {paciente, setPaciente} = useContext(AnamneseContext)
    
    return (
        <>
            <Text style={styles.titulo}>Habilidades cognitivas</Text>

            <View style={styles.inputArea}>
                <Text style={styles.normal}>Classifique as habilidades do seu filho em relação a outros adolescentes da mesma idade</Text>
                <Text style={styles.normal}>Compreensão da fala</Text>
                <Seletor
                    selecionado={paciente.compreensaoFala}
                    aoMudar={value=>setPaciente(prev => ({...prev, compreensaoFala: value}))}
                    lista={nivelHabilidades}
                />
                <Text style={styles.normal}>Resolução de problemas</Text>
                <Seletor
                    selecionado={paciente.resolProblemas}
                    aoMudar={value=>setPaciente(prev => ({...prev, resolProblemas: value}))}
                    lista={nivelHabilidades}
                />
                <Text style={styles.normal}>Mantém a atenção</Text>
                <Seletor
                    selecionado={paciente.mantemAtencao}
                    aoMudar={value=>setPaciente(prev => ({...prev, mantemAtencao: value}))}
                    lista={nivelHabilidades}
                />
                <Text style={styles.normal}>Habilidades de organização</Text>
                <Seletor
                    selecionado={paciente.habOrganizacao}
                    aoMudar={value=>setPaciente(prev => ({...prev, habOrganizacao: value}))}
                    lista={nivelHabilidades}
                />
                <Text style={styles.normal}>Recordação de eventos</Text>
                <Seletor
                    selecionado={paciente.recEventos}
                    aoMudar={value=>setPaciente(prev => ({...prev, recEventos: value}))}
                    lista={nivelHabilidades}
                />
                <Text style={styles.normal}>Recordação de fatos</Text>
                <Seletor
                    selecionado={paciente.recFatos}
                    aoMudar={value=>setPaciente(prev => ({...prev, recFatos: value}))}
                    lista={nivelHabilidades}
                />
                <Text style={styles.normal}>Aprendizagem a partir de experiências</Text>
                <Seletor
                    selecionado={paciente.aprendExp}
                    aoMudar={value=>setPaciente(prev => ({...prev, aprendExp: value}))}
                    lista={nivelHabilidades}
                />
                <Text style={styles.normal}>Entendimento de conceitos</Text>
                <Seletor
                    selecionado={paciente.entendConceitos}
                    aoMudar={value=>setPaciente(prev => ({...prev, entendConceitos: value}))}
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
                    callback={newText=>setPaciente(prev => ({...prev, outraDifCogn: newText}))}
                />
                <Input
                    titulo="Descreva brevemente alguma habilidade especial que seu filho possua"
                    valor={paciente.habilidadeEspecial}
                    callback={newText=>setPaciente(prev => ({...prev, habilidadeEspecial: newText}))}
                />
                <Text style={styles.normal}>Apresenta dificuldade na compreensão de linguagem?</Text>
                <Seletor
                    selecionado={paciente.difCompreensaoLing}
                    aoMudar={value=>setPaciente(prev => ({...prev, difCompreensaoLing: value}))}
                    lista={simOuNao}
                />
                <Text style={styles.normal}>Dificuldade na comunicação expressiva?</Text>
                <Seletor
                    selecionado={paciente.difComunicExpressiva}
                    aoMudar={value=>setPaciente(prev => ({...prev, difComunicExpressiva: value}))}
                    lista={simOuNao}
                />
                <Text style={styles.normal}>Realiza estereotipias ou movimentos corporais?</Text>
                <Seletor
                    selecionado={paciente.estereotipiasMovCorporais}
                    aoMudar={value=>setPaciente(prev => ({...prev, estereotipiasMovCorporais: value}))}
                    lista={simOuNao}
                />
            </View>
        </>
    )
}