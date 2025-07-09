import React from 'react'
import { View, Text } from 'react-native'


export default function RelatorioAdolescentes({data}){
    return (
            <>
                {'\n'}
                {'\n'}
                <Text>Histórico do desenvolvimento</Text>{'\n'}
                <Text>Gestação e nascimento</Text>{'\n'}
                {'\n'}
                <Text>A gestação foi planejada?</Text> - {data.gestacaoPlanejada}{'\n'}
                Realizou pré-natal? - {data.prenatal}{'\n'}
                Teve alguma intercorrência durante a gravidez? - {data.intercorrencia}{'\n'}
                {data.intercorrencia === 'sim' && <Text>{data.qualIntercorrencia}</Text>}{'\n'}
                Fez uso de medicamentos durante a gestação? {data.medicamentoGestacao}
                Parto: {data.tipoParto}, motivo: {data.motivoParto}
                Criança nasceu com quantas semanas? {data.nasceuSemanas}{'\n'}
                APGAR: 1º) {data.apgar?.primeiroMinuto} / 5º) {data.apgar?.quintoMinuto}; peso: {data.apgar?.peso}; comp: {data.apgar?.comprimento}
                Houve algum problema com o bebê logo que nasceu? {data.problemaNascimento}
                Precisou de oxigênio? {data.oxigenio} Nasceu cianótico? {data.cianotico} Chorou logo? {data.chorou}
                Icterícia: {data.ictericia} Precisou fazer fototerapia? {data.fototerapia}

            </>
    )
}