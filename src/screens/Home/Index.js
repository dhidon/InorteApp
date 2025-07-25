import React, { useContext } from "react";
import { View, Text, KeyboardAvoidingView, TouchableOpacity, Image } from "react-native";
import { styles } from "../../styles/Styles";
import { AuthContext } from "../../contexts/auth";
import Feather from '@expo/vector-icons/Feather';


export default function Home() {
    const { user, authUser } = useContext(AuthContext)

    return (
        <KeyboardAvoidingView style={styles.container}>
            
            <View style={styles.contentArea}>

                <View style={styles.userInfoArea}>

                    {authUser.profilePic 
                    ? <Image
                        source={uri(authUser.profilePic)}
                    />
                    :<Feather name="user" size={90} color="black" />}

                    <Text style={[styles.normal, {color: 'black', numberOfLines: 1}]}>Bem-vindo, {user.displayName ? user.displayName : user.email}</Text>

                </View>

                
            </View>
        </KeyboardAvoidingView>
    )
}