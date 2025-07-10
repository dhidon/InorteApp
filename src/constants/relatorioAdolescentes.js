import React from 'react'
import { View, Text } from 'react-native'
import { styles } from '../styles/Styles'

import RelText from '../components/RelText'
import ListaCondicoes from '../components/ListaCondicoes'

export default function RelatorioAdolescentes({data}){
    return (
            <View style={{gap: 10}}>
               
                <Text style={styles.titulo}>3 - Histórico do desenvolvimento</Text>
                <Text style={styles.titulo}>Gestação e nascimento</Text>

                <RelText campo="A gestação planejada" data={data.gestacaoPlanejada} />
                <RelText campo="Realizou pré-natal" data={data.prenatal} />
                <RelText campo="Teve alguma intercorrência durante a gravidez" data={data.intercorrencia} />
                {data.intercorrencia === 'sim' && <RelText campo="A intercorrencia foi" data={data.qualIntercorrencia} />}
                <RelText campo="Fez uso de medicamentos durante a gestação" data={data.medicamentoGestacao} />
                <RelText campo="O tipo de parto foi" data={data.tipoParto} />
                <RelText campo="O motivo do parto" data={data.motivoParto} />
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

                <Text style={styles.titulo}>Desenvolvimento</Text>
                
                {data.problemaCrescimento === 'sim' 
                ? <Text>O paciente apresentou problemas de crescimento </Text>
                : <RelText campo='O paciente não apresentou problemas de crescimento'/>}
                
                {data.itensSignificantes.some(item => item.value === 'sim') && <ListaCondicoes titulo='Os itens a seguir estiveram presentes na vida do paciente com algum grau de significância:' lista={data.itensSignificantes}/>}
                
                
                <Text style={{fontWeight: 'bold'}}>Idades em que apresentou pela primeira vez os seguintes comportamentos:</Text>
                
                {data.comportamentos.map((item, index)=>{
                    return (
                        <View key={index} style={{justifyContent: 'space-between'}}><Text>{item.label}: {item.idade} anos</Text></View>
                    )
                })}
                
                
                <Text style={styles.titulo}>Saúde geral</Text>
                
                {data.condicoesFilho.some(item => item.value === 'sim') && <ListaCondicoes lista={data.condicoesFilho} titulo='Condições e doenças que o paciente já teve'/>}

                {data.fatoresDif.some(item => item.value === 'sim') && <ListaCondicoes lista={data.fatoresDif} titulo='Fatores que o responsável acredita contribuírem para as dificuldades do paciente'/>}

                {data.medicacao?.usa === 'sim' 
                ? <View>
                    <RelText campo='O paciente usa a medicação' data={data.medicacao.nome}/> 
                    <RelText campo='Motivo' data={data.medicacao.motivo}/>
                    <RelText campo='Quem receitou' data={data.medicacao.receitou}/>
                </View>
                : <Text style={{fontWeight: 'bold'}}>O paciente não faz uso de nenhuma medicação</Text>}
                
                <Text style={styles.titulo}>Habilidades cognitivas</Text>

                <RelText campo='Classificação das habilidades do paciente em relação a outras crianças da mesma idade'/>
                <RelText campo='Compreensão da fala' data={data.compreensaoFala}/>
                <RelText campo='Resolução de problemas' data={data.resolProblemas}/>
                <RelText campo='Mantém a atenção' data={data.mantemAtencao}/>
                <RelText campo='Habilidades de organização' data={data.habOrganizacao}/>
                <RelText campo='Recordação de eventos' data={data.recEventos}/>
                <RelText campo='Recordação de fatos' data={data.recFatos}/>
                <RelText campo='Aprendizagem a partir de experiencias' data={data.aprendExp}/>
                <RelText campo='Entendimento de conceitos' data={data.entendConceitos}/>
                
                {data.outrasDificuldades.some(item=>item.value === 'sim')
                ? <ListaCondicoes lista={data.outrasDificuldades} titulo='O paciente também apresenta as seguintes dificuldades'/>
                :<Text>O paciente não apresenta outras dificuldades</Text>}

                <RelText campo='Outra dificuldade cognitiva apresentada pelo paciente' data={data.outraDifCogn}/>
                <RelText campo='Habilidade especial apresentada pelo paciente' data={data.habilidadeEspecial}/>
                <RelText campo='Dificuldade na compreensão da linguagem' data={data.difCompreensaoLing}/>
                <RelText campo='Dificuldade na comunicação expressiva' data={data.difComunicExpressiva}/>
                <RelText campo='Realiza estereotipias ou movimentos corporais' data={data.estereotipiasMovCorporais}/>

                <Text style={styles.titulo}>Desenvolvimento social</Text>
                
                <ListaCondicoes lista={data.caracteristicasSociais} titulo='Comportamentos apresentados'/>
                <RelText campo='O paciente apresenta problemas com limites' data={data.probLimites}/>
                <RelText campo='O paciente costuma pedir o que lhe é solicitado' data={data.cumprePedidos}/>
                <RelText campo='Estratégias usadas mais bem-sucedidas' data={data.estrategiasUsadas}/>
                <RelText campo='O paciente consegue ser independente nas atividades de vida diárias' data={data.independenciaAtiv}/>

                <Text style={styles.titulo}>Habilidades motoras</Text>

                {data.habilidadesMotoras.some(item=>item.value === 'sim') && <ListaCondicoes lista={data.habilidadesMotoras} titulo='Habilidades motoras apresentadas pelo paciente'/>}
                
                <Text style={styles.titulo}>Visão</Text>
                <RelText campo='Consegue manter contato visual por muito tempo' data={data.contatoVisual}/>
                <RelText campo='Inclina a cabeça apra olhar' data={data.inclinaCabeca}/>
                <RelText campo='Aproxima objetos dos olhos' data={data.aproximaObjetos}/>
                <RelText campo='Afasta os objetos' data={data.afastaObjetos}/>
                <RelText campo='Movimenta os olhos excessivamente' data={data.movimentoOlhos}/>
                <RelText campo='Realizou avaliação oftalmológica' data={data.avOftalmo}/>
                <RelText campo='Reclama de dores de cabeça constantes, principalmente na região fronto-temporal' data={data.dorCabeca}/>

                <Text style={styles.titulo}>Audição</Text>

                <RelText campo='Apresenta dificuldade auditiva' data={data.difAuditiva}/>
                <RelText campo='Já realizou avaliação' data={data.realizouAv}/>

                <Text style={styles.titulo}>Desempenho acadêmico</Text>

                {data.escola?.frequenta === 'sim' 
                ?<>
                    <RelText campo='O paciente frequenta a escola' data={data.escola.nome}/>
                    <View style={{flexDirection: 'row', gap: 5}}>
                        <RelText campo='Faz AEE' data={data.escola.aee}/>
                        <RelText campo='Série' data={data.escola.serie}/>
                        <RelText campo='Turno' data={data.escola.turno}/>
                    </View>
                </>
                :<Text style={{fontWeight: 'bold'}}>O paciente não frequenta a escola</Text>}
                <RelText campo='Apresenta dificuldade na aprendizagem' data={data.difAprend}/>
                <RelText campo='Comportamento no âmbito escolar' data={data.comportEscola}/>

                <Text style={styles.titulo}>Responsáveis pela avaliação</Text>
                <RelText campo='Anamnese realizada com' data={data.medicoResponsavel}/>
                <RelText campo='Técnico' data={data.tecnicoResponsavel}/>
            </View>
    )
}