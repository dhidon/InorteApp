import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/Styles";
import Feather from '@expo/vector-icons/Feather';
import { useNavigation } from "@react-navigation/native";

export default function Header({ setor }) {
    const navigation = useNavigation()

    return (
        <View style={styles.cabecalhoArea}>

            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', position: 'relative'}}>

                <TouchableOpacity onPress={()=>navigation.openDrawer()} style={{}}>
                    <Feather name='menu' size={35} color='#121212'/>
                </TouchableOpacity>

                <Image
                    style={styles.cabecalhoImg}
                    source={require('../assets/logoInorte.png')}
                />
            </View>
                
            <Text style={styles.titulo}>{setor}</Text>
        </View>
    )
}