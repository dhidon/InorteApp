import React from "react";
import { ScrollView, View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import { styles } from "../../../styles/Styles";

import Header from "../../../components/Header";
import RelatorioAdolescentes from "../../../constants/relatorioAdolescentes";
import RelatorioCriancas from "../../../constants/relatorioCriancas";

export default function Paciente(){
    const route = useRoute()
    const { data } = route.params

    return (
        <ScrollView style={styles.container}>
            <Header setor={data.nome}/>
            <View style={[styles.contentArea, {marginHorizontal: 20}]}>
                <Text style={{flexWrap: 'wrap', lineHeight: 22}}>
                    <Text style={{fontWeight: 'bold'}}>Data:</Text> {data.data} {"\n"}
                    {"\n"}
                    <Text style={styles.titulo}>1 - Dados de Identificação {"\n"}</Text>
                    {"\n"}
                    <Text style={{fontWeight: 'bold'}}>Nome:</Text> {data.nome} {"\n"}
                    <Text style={{fontWeight: 'bold'}}>Nascimento: </Text>{data.nascimento} - <Text style={{fontWeight: 'bold'}}>Idade: </Text>{data.idade} {"\n"}
                    <Text style={{fontWeight: 'bold'}}>Nº do SUS: </Text>{data.sus} {'\n'}
                    <Text style={{fontWeight: 'bold'}}>Endereço:</Text> {data.endereco?.ruaN}, <Text style={{fontWeight: 'bold'}}>Bairro: </Text>{data.endereco?.bairro}, {"\n"}
                    <Text style={{fontWeight: 'bold'}}>CEP: </Text>{data.endereco?.cep} - <Text style={{fontWeight: 'bold'}}>Cidade / UF: </Text>{data.endereco?.cidadeUf} {"\n"}
                    <Text style={{fontWeight: 'bold'}}>Contato: </Text>{data.contato}, <Text style={{fontWeight: 'bold'}}>Informante: </Text>{data.informante} {"\n"}
                    <Text style={{fontWeight: 'bold'}}>Nome da mãe:</Text> {data.mae?.nome}, <Text style={{fontWeight: 'bold'}}>Nascimento: </Text>{data.mae?.nascimento} {"\n"}
                    <Text style={{fontWeight: 'bold'}}>Profissão: </Text>{data.mae?.profissao} {"\n"}
                    <Text style={{fontWeight: 'bold'}}>Nome do pai: </Text>{data.pai?.nome}, <Text style={{fontWeight: 'bold'}}>Nascimento: </Text>{data.pai?.nascimento}{"\n"}
                    <Text style={{fontWeight: 'bold'}}>Profissão: </Text>{data.pai?.profissao}{"\n"}
                    <Text style={{fontWeight: 'bold'}}>Estado civil dos pais: </Text>{data.pais?.estadoCivil}{"\n"}
                    {data.pais?.estadoCivil === 'separados' || data.pais?.estadoCivil === 'divorciados'
                        ? `A criança tinha ${data.idadeSeparacao} anos quando os pais se separaram.\n`
                        : ''}
                    <Text style={{fontWeight: 'bold'}}>Guardião legal:</Text> {data.guardiao} - <Text style={{fontWeight: 'bold'}}>Nome do padrasto/madrasta:</Text> {data.padrastoMadrasta} {"\n"}
                

                    {data.guardiao === 'outro' && (
                        <Text>
                            <Text style={{fontWeight: 'bold'}}>O guardião legal se chama:</Text> {data.outroGuardiao?.nome}
                            <Text style={{fontWeight: 'bold'}}>O paciente mora com esse guardião pois:</Text> {data.outroGuardiao?.motivo}
                        </Text>
                    )}

                    {'\n'}
                    <Text style={{fontWeight: 'bold'}}>2 - Sintomas</Text> {'\n'}
                    {'\n'}
                    <Text style={{fontWeight: 'bold'}}>Queixa Principal:</Text> {data.motivoAvaliacao} {"\n"}
                    <Text style={{fontWeight: 'bold'}}>Profissionais que o acompanham:</Text> {data.profissionais} {"\n"}
                    <Text style={{fontWeight: 'bold'}}>Quem convive com o adolescente e com quem passa mais tempo:</Text> {data.convive} {"\n"}
                    <Text style={{fontWeight: 'bold'}}>Condições ou doenças que parentes próximos já tiveram:</Text> {'\n'}
                    
                    {data.condicoes.map((item, index)=>{
                        if(item.value === 'sim'){
                            return (
                                <View key={index} style={{alignItems: 'space-between'}}>
                                    <Text>
                                        <Text style={{fontWeight: 'bold'}}>Condição: </Text>{item.label} - <Text style={{fontWeight: 'bold'}}>Parentesco: </Text>{item.parentesco}
                                    </Text>
                                </View>
                            )
                        }
                    })}

                    {data.grupo === 'criança' ? <RelatorioCriancas data={data}/> : <RelatorioAdolescentes data={data}/>}

                </Text>
            </View>
        </ScrollView>
    )
}