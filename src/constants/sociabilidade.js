import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { AnamneseContext } from '../contexts/anamneseContext'
import { styles } from '../styles/Styles'

import Input from '../components/Input'
import Seletor from '../components/Seletor'
import ListaAlternativas from '../components/ListaAlternativas'
import { comportRepetitivos, difSociabilidadeAfetividade } from './anamneseOptions'

export default function Sociabilidade(){
    const {paciente, setPaciente} = useContext(AnamneseContext)

    return (
        <>
            <Text style={styles.titulo}>Sociabilidade/afetividade</Text>

            <View style={styles.inputArea}>
                <Text style={styles.normal}>Apresenta sorriso espontâneo a pessoas familiares</Text>
                <Seletor
                    selecionado={paciente.sorrisoEspontaneoFamiliares}
                    aoMudar={value=>setPaciente({...paciente, sorrisoEspontaneoFamiliares: value})}
                    lista={difSociabilidadeAfetividade}
                />
                <Text style={styles.normal}>Apresenta sorriso espontâneo a pessoas não familiares</Text>
                <Seletor
                    selecionado={paciente.sorrisoEspontaneoNaoFamiliares}
                    aoMudar={value=>setPaciente({...paciente, sorrisoEspontaneoNaoFamiliares: value})}
                    lista={difSociabilidadeAfetividade}
                />
                <Text style={styles.normal}>Apresenta sorriso em resposta ao sorriso de outras pessoas?</Text>
                <Seletor
                    selecionado={paciente.sorrisoResposta}
                    aoMudar={value=>setPaciente({...paciente, sorrisoResposta: value})}
                    lista={difSociabilidadeAfetividade}
                />
                <Text style={styles.normal}>Variação na expressão facial (contentamento, frustração, surpresa, constrangimento)</Text>
                <Seletor
                    selecionado={paciente.variacaoExpressaoFacial}
                    aoMudar={value=>setPaciente({...paciente, variacaoExpressaoFacial: value})}
                    lista={difSociabilidadeAfetividade}
                />
                <Text style={styles.normal}>Expressão emocional apropriada ao contexto</Text>
                <Seletor
                    selecionado={paciente.exprEmocionalContexto}
                    aoMudar={value=>setPaciente({...paciente, exprEmocionalContexto: value})}
                    lista={difSociabilidadeAfetividade}
                />
                <Text style={styles.normal}>Compartilha atividades prazerosas com outras pessoas</Text>
                <Seletor
                    selecionado={paciente.compartAtivPraz}
                    aoMudar={value=>setPaciente({...paciente, compartAtivPraz: value})}
                    lista={difSociabilidadeAfetividade}
                />
                <Text style={styles.normal}>Prefere ficar sozinho</Text>
                <Seletor
                    selecionado={paciente.sozinho}
                    aoMudar={value=>setPaciente({...paciente, sozinho: value})}
                    lista={difSociabilidadeAfetividade}
                />
                <Text style={styles.normal}>Excessivamente quieto ou tímido</Text>
                <Seletor
                    selecionado={paciente.excQuieto}
                    aoMudar={value=>setPaciente({...paciente, excQuieto: value})}
                    lista={difSociabilidadeAfetividade}
                />
                <Text style={styles.normal}>Mais interessado em objetos do que em pessoas</Text>
                <Seletor
                    selecionado={paciente.interObjPess}
                    aoMudar={value=>setPaciente({...paciente, interObjPess: value})}
                    lista={difSociabilidadeAfetividade}
                />
                <Text style={styles.normal}>Demonstra preocupação se os pais estão tristes/doentes/machucados?</Text>
                <Seletor
                    selecionado={paciente.preocupPais}
                    aoMudar={value=>setPaciente({...paciente, preocupPais: value})}
                    lista={difSociabilidadeAfetividade}
                />

                </View>


                <Text style={styles.titulo}>Atenção compartilhada</Text>

                <View style={styles.inputArea}>
                    <Text style={styles.normal}>Mostra, traz pra perto do rosto do parceiro ou aponta objetos / eventos de interesse variados apenas para compartilhar?</Text>
                    <Seletor
                        selecionado={paciente.mostraObjComp}
                        aoMudar={value=>setPaciente({...paciente, mostraObjComp: value})}
                        lista={difSociabilidadeAfetividade}
                    />
                    <Text style={styles.normal}>Olha para onde o parceiro aponta</Text>
                    <Seletor
                        selecionado={paciente.olhaAponta}
                        aoMudar={value=>setPaciente({...paciente, olhaAponta: value})}
                        lista={difSociabilidadeAfetividade}
                    />
                    <Text style={styles.normal}>Responde aos convites para brincar</Text>
                    <Seletor
                        selecionado={paciente.respBrincar}
                        aoMudar={value=>setPaciente({...paciente, respBrincar: value})}
                        lista={difSociabilidadeAfetividade}
                    />
                </View>

                <Text style={[styles.titulo, {width: '90%'}]}>Respostas/iniciativas sociais com outras crianças</Text>

                <View style={styles.inputArea}>
                    <Text style={styles.normal}>Iniciativa de aproximação ou interesse em outras crianças</Text>
                    <Seletor
                        selecionado={paciente.aproxIntCriancas}
                        aoMudar={value=>setPaciente({...paciente, aproxIntCriancas: value})}
                        lista={difSociabilidadeAfetividade}
                    />
                    <Text style={styles.normal}>Responde mas não toma iniciativa</Text>
                    <Seletor
                        selecionado={paciente.respSemIniciativa}
                        aoMudar={value=>setPaciente({...paciente, respSemIniciativa: value})}
                        lista={difSociabilidadeAfetividade}
                    />
                    <Text style={styles.normal}>Fica ansioso com a presença de outras crianças/adolescentes?</Text>
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
                </View>

                <Text style={styles.titulo}>Comportamento de apego</Text>

                <View style={styles.inputArea}>
                    <Text style={styles.normal}>Demonstra preocupação quando separado dos pais?</Text>
                    <Seletor
                        selecionado={paciente.preocupSeparaPais}
                        aoMudar={value=>setPaciente({...paciente, preocupSeparaPais: value})}
                        lista={difSociabilidadeAfetividade}
                    />
                    <Text style={styles.normal}>Sorri ou mostra excitação com o retorno dos pais</Text>
                    <Seletor
                        selecionado={paciente.excitRetornoPais}
                        aoMudar={value=>setPaciente({...paciente, excitRetornoPais: value})}
                        lista={difSociabilidadeAfetividade}
                    />
                    <Text style={styles.normal}>Busca a ajuda dos pais quando machucado</Text>
                    <Seletor
                        selecionado={paciente.ajudaPais}
                        aoMudar={value=>setPaciente({...paciente, ajudaPais: value})}
                        lista={difSociabilidadeAfetividade}
                    />
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
                        titulo='Medos (relacionar medos discrepantes com a etapa evolutiva-frequência, intensidade, grau de interferÊncia em outras atividades da família, facilidade com que é acalmado /distraído):'
                        valor={paciente.medos}
                        callback={newText=>setPaciente({...paciente, medos: newText})}
                    />
                </View>
        </>
    )
}