import React from 'react'
import { View, Text } from 'react-native'
import { styles } from '../styles/Styles'

import RelText from '../components/RelText'
import ListaCondicoes from '../components/ListaCondicoes'

export default function RelatorioCriancas({data}){
    return (
        <View style={{gap: 10}}>
            
            <Text style={styles.titulo}>3 - Histórico do desenvolvimento</Text>
            <Text style={styles.titulo}>Gestação e nascimento</Text>

            <View style={{gap: 5, flexDirection: 'row'}}>
                <RelText campo="A gestação planejada" data={data.gestacaoPlanejada} />
                <RelText campo="Realizou pré-natal" data={data.prenatal} />
            </View>
            <RelText campo="Teve alguma intercorrência durante a gravidez" data={data.intercorrencia} />
            {data.intercorrencia === 'sim' && <RelText campo="A intercorrencia foi" data={data.qualIntercorrencia} />}
            <RelText campo="Fez uso de medicamentos durante a gestação" data={data.medicamentoGestacao} />
            <RelText campo="O tipo de parto foi" data={data.parto?.tipo} />
            <RelText campo="O motivo do parto" data={data.parto?.motivo} />
            <Text style={{fontWeight: 'bold'}}>A criança nasceu com {data.nasceuSemanas} semanas</Text>
            <RelText campo="APGAR" data={`1º min: ${data.apgar?.primeiroMinuto} - 5º min: ${data.apgar?.quintoMinuto} - Peso: ${data.apgar?.peso} - Comp: ${data.apgar?.comprimento}`} />
            <RelText campo="Houve algum problema com o bebê logo que nasceu?" data={data.problemaNascimento} />
            <RelText campo="Nasceu cianótico" data={data.cianotico} />
            <RelText campo="Precisou de oxigênio" data={data.oxigenio} />
            <RelText campo="Chorou logo" data={data.chorou} />
            <RelText campo="Icterícia" data={data.ictericia} />
            <RelText campo="Precisou fazer fototerapia" data={data.fototerapia} />

            <Text style={styles.titulo}>Alimentação</Text>
            
            <RelText campo='A criança mamou' data={data.mamou}/>
            {data.mamou === 'sim' && 
                <View>
                    <Text>Aleitamento materno exclusivo até {data.leiteMatExclMes} meses</Text>
                    <Text>Mamou até {data.mamouIdade} anos</Text>
                </View>
            }
            <View style={{flexDirection: 'row', gap: 5}}>
                <RelText campo='Usou mamadeira' data={data.mamadeira}/>
                <RelText campo='Usou chupeta' data={data.chupeta}/>
            </View>
            
            <Text>A introdução alimentar foi feita com {data.idadeIntroAlimentar}</Text>
            {data.difIntroAlimentar === 'sim' ? <RelText campo='O paciente apresenta a seguinte dificuldade alimentar' data={data.difAlimentar}/> : <Text>O paciente não apresentou dificuldade na introdução alimentar</Text>}
            <ListaCondicoes
                lista={data.consistenciasAceitas}
                titulo='Atualmente aceita bem as seguintes consistências alimentares'
            />
            
            {data.problemaAlimentacao.some(item => item.value === 'sim') && <ListaCondicoes titulo='Apresenta as seguintes dificuldades alimentares' lista={data.problemaAlimentacao}/>}
            
            <RelText campo='O paciente apresenta a seguinte seletividade alimentar' data={data.seletividadeAlimentar}/>

            <Text style={styles.titulo}>Sono</Text>
            
            <RelText campo='O sono do paciente é' data={data.formaSono}/>
            <RelText campo='Dorme sozinho' data={data.dormeSozinho}/>
            <RelText campo='Cama compartilhada com' data={data.quemCompartilhaCama}/>
            <View style={{flexDirection: 'row', gap: 5}}>
                <RelText campo='Dorme às' data={data.horarioDormir}/>
                <RelText campo='Acorda às' data={data.horarioAcordar}/>
            </View>

            <Text style={styles.titulo}>Desenvolvimento neuropsicomotor</Text>

            <RelText campo='Idade em que sentou sem apoio' data={data.sentouSemApoio}/>
            <RelText campo='Idade em que engatinhou' data={data.engatinhou}/>
            <RelText campo='Idade que andou sem suporte' data={data.andouSemSuporte}/>
            
            <RelText campo='Sobre a fase atual do paciente'/>

            {data.controlaEsfincter === 'sim' ? <Text style={{fontWeight: 'bold'}}>O paciente apresenta controle do esfíncter</Text> : <Text style={{fontWeight: 'bold'}}>O Paciente não apresenta controle do esfíncter</Text>}
            {data.fraldas === 'sim' ? <Text style={{fontWeight: 'bold'}}>O paciente usa fraldas</Text> : <Text style={{fontWeight: 'bold'}}>O paciente não usa fraldas</Text>}

            {data.itensSignificantes.some(item=> item.value === 'sim') && <ListaCondicoes lista={data.itensSignificantes} titulo='Os itens a seguir estão presentes com significância no desenvolvimento do paciente'/>}

            <RelText campo='Apresenta manipulação de objetos com os dedos' data={data.manipObjDedos}/>
            {data.praticaEsporte === 'sim' ? <RelText campo='O paciente pratica' data={data.esporte}/> : <Text style={{fontWeight: 'bold'}}>O paciente não pratica esporte</Text>}
            <View style={{flexDirection: 'row', gap: 5}}>
                <RelText campo='Pratica autoagressão' data={data.autoagressao}/>
                <RelText campo='Pratica heteroagressão' data={data.heteroagressao}/>
            </View>

            <Text style={styles.titulo}>Desenvolvimento da linguagem</Text>
            <RelText campo='Idades em que'/>

            <View style={{flexDirection: 'row', gap: 5}}>
                <RelText campo='Balbuciou' data={data.idadeBalbuciou}/>
                <RelText campo='Emitiu sílabas' data={data.idadeSilabas}/>
            </View>
            <View style={{flexDirection: 'row', gap: 5}}>
                <RelText campo='Emitiu as primeiras palavras' data={data.idadePriPalavras}/>
                <RelText campo='Emitiu as primeiras frases' data={data.idadeFrases}/>
            </View>
            <RelText campo='Apresentou dificuldade no desenvolvimento da linguagem' data={data.difDesenvolvimentoLinguagem}/>

            <ListaCondicoes titulo='Os comportamentos a seguir são baseados no estado atual do paciente' lista={data.condDesenvolvAtuais}/>
            <RelText campo='Apresenta dificuldade na articulação e pronúncia' data={data.difArtPronuncia}/>
            <RelText campo='Apresenta dificuldade no rítmo e entonação de voz' data={data.difRitVoz}/>
            <RelText campo='Repete a última palavra ou frase imediatamente ouvida' data={data.repeteFrase}/>
            <RelText campo='Faz confusão entre pronomes' data={data.confusaoPron}/>
            <RelText campo='Uma dificuldade cognitiva apresentada pelo paciente' data={data.difCognitiva}/>
            <RelText campo='Habilidade especial apresentada pelo paciente' data={data.habEspecial}/>
            <RelText campo='Possui dificuldades na compreesão de linguagem' data={data.difComprLinguagem}/>
            <RelText campo='Como reage quando contrariado' data={data.reacaoContrariado}/>

            <Text style={styles.titulo}>Autocuidado</Text>
            <RelText campo='Toma banho sozinho' data={data.banhoSozinho}/>
            <RelText campo='Escova os dentes sozinho' data={data.escovaDentesSozinho}/>
            <RelText campo='Limpa-se sozinho' data={data.limpaSozinho}/>
            <RelText campo='Ao cuidar da própria higiene, atrapalha-se com a sequência de tarefas' data={data.atrapalhaComHigiene}/>
            <RelText campo='Veste-se sozinho' data={data.vesteSozinho}/>
            <RelText campo='Amarra os cadarços' data={data.amarraCadarcos}/>

            <Text style={styles.titulo}>Sociabilidade/afetividade</Text>
            <RelText campo='Apresenta sorriso espontâneo a pessoas familiares' data={data.sorrisoEspontaneoFamiliares}/>
            <RelText campo='Apresenta sorriso espontâneo a pessoas não familiares' data={data.sorrisoEspontaneoNaoFamiliares}/>
            <RelText campo='Sorriso em resposta ao sorriso de outras pessoas' data={data.sorrisoResposta}/>
            <RelText campo='Variação na expressão facial' data={data.variacaoExpressaoFacial}/>
            <RelText campo='Expressão emocional apropriada ao contexto' data={data.exprEmocionalContexto}/>
            <RelText campo='Compartilha atividades prazerosas com outras pessoas' data={data.compartAtivPraz}/>
            <RelText campo='Prefere ficar sozinho' data={data.sozinho}/>
            <RelText campo='Excessivamente quieto ou timido' data={data.excQuieto}/>
            <RelText campo='Mias interessado em objetos que em pessoas' data={data.interObjPess}/>
            <RelText campo='Demonstra preocupação se os pais estão tristes/doentes/machucados?' data={data.preocupPais}/>

            <Text style={styles.titulo}>Atenção compartilhada</Text>
            <RelText campo='Mostra, traz para perto do rosto do parceiro ou aponta objetos/eventos de interesse variados apenas para compartilhar' data={data.mostraObjComp}/>
            <RelText campo='Olha para onde o parceiro aponta' data={data.olhaAponta}/>
            <RelText campo='Responde aos convites para brincar' data={data.respBrincar}/>

            <Text style={styles.titulo}>Respostas/iniciativas sociais com outras crianças</Text>
            <RelText campo='Iniciativa de aproximação ou interesse em outras crianças' data={data.aproxIntCriancas}/>
            <RelText campo='Responde mas não toma iniciativa' data={data.respSemIniciativa}/>
            <RelText campo='Fica ansioso com a presença de outras crianças/adolescentes' data={data.ansiosoPresencaCriAdol}/>
            <RelText campo='Gosta de brincadeiras com grupos' data={data.brincaGrupos}/>
            <RelText campo='Fica intensamente ansioso quando na presença de pessoas que não são de seu convívio' data={data.ansiosoNaoConvivio}/>
            <RelText campo='Ignora ou evita de forma persistente esse contato' data={data.evitaContato}/>
            <RelText campo='Excessiva desinibição social para a idade em relação a pessoas estranhas' data={data.excessivaDesinibicao}/>

            <Text style={styles.titulo}>Comportamento de apego</Text>
            <RelText campo='Demonstra preocupação quando separado dos pais' data={data.preocupSeparaPais}/>
            <RelText campo='Sorri ou demonstra excitação com o retorno dos pais' data={data.excitRetornoPais}/>
            <RelText campo='Busca a ajuda dos pais quando machucado' data={data.ajudaPais}/>

            <Text style={styles.titulo}>Brincadeira</Text>
            <RelText campo='Brinquedos e atividades favoritas' data={data.brinquedoAtividade}/>
            <RelText campo='Manipula vários objetos/brinquedos' data={data.manipulaObjBrinquedo}/>
            <RelText campo='Formas de exploração dos brinquedos' data={data.exploraBrinquedos}/>
            <RelText campo='Brinca de faz de conta usando um objeto como se fosse outro' data={data.brincaFazDeConta}/>
            <RelText campo='Brinca de faz de conta atribuindo papéis a si mesmo' data={data.brincaPapeis}/>

            <Text>Comportamentos repetitivos e rituais</Text>
            <RelText campo='Alinha, empilha objetos quando brincando, sem função aparente' data={data.alinhaEmpilhaObj}/>
            <RelText campo='Faz brincadeiras com partes de objetos em vez de um objeto como um todo (ex: ignora o carrinho e gira apenas as rodas por um longo tempo)?' data={data.brincaPartesObj}/>
            <RelText campo='Abre/fecha portas, gavetas; liga/desliga interruptores de luz; intenso interesse por objetos que giram (ex: máquina de lavar, ventilador, veículos em geral). Considerar a idade e persistência' data={data.abreFechaLigaDesliga}/>
            <RelText campo='Reação à interrupção da brincadeira' data={data.reacaoBrincInterromp}/>
            <RelText campo='Resistência a mudanças de rotina pessoal/da casa' data={data.resistenciaMudancaRotina}/>
            <RelText campo='SequeÊncia fixa e rígida de atividades' data={data.sequenciaFixaAtiv}/>
            <ListaCondicoes titulo='Apresenta os comportamentos a seguir' lista={data.comportRepetitivos}/>
            <RelText campo='Medos (relacionar medos discrepantes com a etapa evolutiva - frequência, intensidade, grau de interferência em outras atividades da família, facilidade com que é acalmado/distraído)' data={data.medos}/>

        </View>
    )
}