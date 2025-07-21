import React, { useContext } from 'react'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import { View, Image, Text } from 'react-native'

import { AuthContext } from '../contexts/auth'

export default function CustomDrawer(props){
    const { authUser, signOut } = useContext(AuthContext)

    return (
        <DrawerContentScrollView>
            <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 25}}>
                <Image
                source={require('../assets/logo-card.png')}
                style={{width: 200, height: 200}}
                resizeMode='contain'
                />
                 <Text style={{marginTop: 14, fontSize: 18}}>
                    Bem-vindo!
                </Text>
                <Text style={{fontSize: 17, fontWeight: 'bold', marginBottom: 14, paddingHorizontal: 20}} numberOfLines={1}>
                    {authUser && authUser.email}
                </Text>
            </View>

            <DrawerItemList {...props}/>

            <DrawerItem
                {...props}
                label='Sair'
                onPress={signOut}
                labelStyle={{textAlign: 'center', color: "#000"}}
                style={{backgroundColor: '#FF6347'}}
            />
        </DrawerContentScrollView>
    )
}