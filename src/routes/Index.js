import React, { useContext } from "react";
import { View, ActivityIndicator} from 'react-native'

import AuthRoute from "./auth.route";
import AppRoute from "./app.route";
import { AuthContext } from "../contexts/auth";

export default function Routes(){
    const { signed, loading } = useContext(AuthContext)

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size='large' color='#000'/>
            </View>
        )
            
    }
    
    return (
        <View style={{flex: 1}}>
            {signed ? <AppRoute/> : <AuthRoute/>}
        </View>

    )
    }