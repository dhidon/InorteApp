import React from "react";
import { ScrollView, View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import { styles } from "../../../styles/Styles";

import Header from "../../../components/Header";
import RelatorioAdolescentes from "../../../constants/relatorioAdolescentes";
import RelatorioCriancas from "../../../constants/relatorioCriancas";
import RelText from "../../../components/RelText";

export default function Paciente(){
    const route = useRoute()
    const { data } = route.params

    return (
        <View style={styles.container}>
            <Header setor={data.nome}/>
            <ScrollView >
                <View style={[styles.contentArea, {marginHorizontal: 20, alignItems: '', gap: 10}]}>
                    <RelText campo='Data do registro' data={data.data}/>
                    <RelText campo='Grupo do paciente' data={data.grupo}/>

                    <Text style={styles.titulo}>1 - Dados de Identificação</Text>
                        
                    <View style={{flexDirection: 'row', gap: 5}}>
                        <RelText campo='Nome' data={data.nome}/>
                        <RelText campo='Nascimento' data={data.nascimento}/>
                        <RelText campo='Idade' data={data.idade}/>
                    </View>
                    <RelText campo='Nº do SUS' data={data.sus}/>
                    <View style={{flexDirection: 'row', gap: 5}}>
                        <RelText campo="Endereço" data={data.endereco?.ruaN}/>
                        <RelText campo="Bairro" data={data.endereco?.bairro}/>
                    </View>
                    <View style={{flexDirection: 'row', gap: 5}}>
                        <RelText campo="CEP" data={data.endereco?.cep}/>
                        <RelText campo="Cidade / UF" data={data.endereco?.cidadeUf}/>
                    </View>
                    <View style={{flexDirection: 'row', gap: 5}}>
                        <RelText campo="Contato" data={data.contato}/>
                        <RelText campo="Informante" data={data.informante}/>
                    </View>
                    <View style={{flexDirection: 'row', gap: 5}}>
                        <RelText campo="Nome da mãe" data={data.mae?.nome}/>
                        <RelText campo="Nascimento" data={data.mae?.nascimento}/>
                        <RelText campo="Profissão" data={data.mae?.profissao}/>
                    </View>
                    <View style={{flexDirection: 'row', gap: 5}}>
                        <RelText campo="Nome do pai" data={data.pai?.nome}/>
                        <RelText campo="Nascimento" data={data.pai?.nascimento}/>
                        <RelText campo="Profissão" data={data.pai?.profissao}/>
                    </View>
                    <RelText campo="Estado civil dos pais" data={data.pais?.estadoCivil}/>
                    {data.pais?.estadoCivil === 'separados' || data.pais?.estadoCivil === 'divorciados'
                        ? <Text>A criança tinha {data.idadeSeparacao} anos quando os pais se separaram</Text>
                        : ''}
                    <View style={{flexDirection: 'row', gap: 5}}>
                        <RelText campo='Giardião legal' data={data.guardiao}/>
                        <RelText campo='Nome do padrasto/madrasta' data={data.padrastoMadrasta}/>
                    </View>                

                    {data.guardiao === 'outro' && (
                        <View>
                            <RelText campo='O guardião legal se chama' data={data.outroGuardiao?.nome}/>
                            <RelText campo='O paciente mora com esse guardião pois' data={data.outroGuardiao?.motivo}/>
                        </View>
                    )}

                    <Text style={styles.titulo}>2 - Sintomas</Text>

                    <RelText campo="Queixa Principal" data={data.motivoAvaliacao} />
                    <RelText campo="Profissionais que o acompanham" data={data.profissionais} />
                    <RelText campo="Quem convive com o adolescente e com quem passa mais tempo" data={data.convive} />
                    <RelText campo="Condições ou doenças que parentes próximos já tiveram"/>
                    <View>
                        {data.condicoes.map((item, index)=>{
                            if(item.value === 'sim'){
                                return (
                                    <View key={index}>
                                        <Text>
                                            <Text style={{fontWeight: 'bold'}}>Condição: </Text>{item.label} - <Text style={{fontWeight: 'bold'}}>Parentesco: </Text>{item.parentesco}
                                        </Text>
                                    </View>
                                )
                            }
                        })}
                    </View>

                    {data.grupo === 'criança' ? <RelatorioCriancas data={data}/> : <RelatorioAdolescentes data={data}/>}

                    
                </View>
            </ScrollView>
        </View>
    )
}