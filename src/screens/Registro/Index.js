import React, { useContext } from 'react'
import { View, Text, KeyboardAvoidingView, ScrollView, TouchableOpacity } from 'react-native'
import { styles } from '../../styles/Styles'
import { useNavigation } from '@react-navigation/native'
import Feather from '@expo/vector-icons/Feather';

import { AnamneseContext } from '../../contexts/anamneseContext'
import Identificacao from '../../constants/Identificacao'
import Sintomas from '../../constants/Sintomas'
import DateInput from '../../components/DateInput'
import GestDesenvolv from '../../constants/gestacaoEDesenvolvimento'
import Alimentacao from '../../constants/alimentacao'
import Sono from '../../constants/sono'
import Desenvolvimento from '../../constants/desenvolvimento'
import Saude from '../../constants/saude'
import HabilidadesCognitivas from '../../constants/habilidadesCognitivas'
import Comportamento from '../../constants/comportamento'
import HabilidadesFisicas from '../../constants/habilidadesFisicas'
import DesempenhoAcademico from '../../constants/desempenhoAcademico'
import DesenvolvimentoLinguagem from '../../constants/desenvolvimentoLinguagem';
import Autocuidado from '../../constants/autocuidado';
import Sociabilidade from '../../constants/sociabilidade';

export default function Registro(){
    const { paciente } = useContext(AnamneseContext)
    const navigation = useNavigation()

    return (
        <KeyboardAvoidingView style={styles.container} behavior={'height'}>
            
            <ScrollView>
                
                <View style={styles.contentArea}>

                    <Text style={styles.titulo}>ANAMNESE {paciente.grupo === 'criança' ? `DA CRIANÇA` : `DO ADOLESCENTE`}</Text>

                    <DateInput/>

                    <Identificacao/>

                    <Sintomas/>

                    <Text style={styles.titulo}>3. Histórico de saúde</Text>

                    <GestDesenvolv/>

                    <Alimentacao/>

                    <Sono/>

                    <Desenvolvimento/>

                    {
                        paciente.grupo === 'adolescente'
                        ?(
                            <>
                                <Saude/>
                                <HabilidadesCognitivas/>
                                <Comportamento/>
                                <HabilidadesFisicas/>
                            </>
                        )
                        :(
                            <>
                                <DesenvolvimentoLinguagem/>
                                <Autocuidado/>
                                <Sociabilidade/>
                            </>
                        )
                    }

                    <DesempenhoAcademico/>
                        
                    <View style={{flexDirection: 'row', flex: 1, justifyContent: 'space-around', marginTop: 20, gap: 30}}>

                        <TouchableOpacity style={[styles.buttonArea, {width: 120, flexDirection: 'row', gap: 5, alignItems: 'center'}]} onPress={()=>navigation.goBack()}>
                        <Feather name="arrow-left" size={24} color="#FFF" />
                            <Text style={styles.buttonText}>Voltar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.buttonArea, {width: 120, flexDirection: 'row', gap: 5}]} onPress={()=>navigation.navigate('Profissionais')}>
                        <Feather name="arrow-right" size={24} color="#FFF" />
                            <Text style={styles.buttonText}>Próximo</Text>
                        </TouchableOpacity>

                    </View>

                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}