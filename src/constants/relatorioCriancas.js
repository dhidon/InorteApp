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
        </View>
    )
}