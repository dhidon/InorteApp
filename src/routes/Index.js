import React, { useContext } from "react";
import {View} from 'react-native'

import AuthRoute from "./auth.route";
import AppRoute from "./app.route";
import { AuthContext } from "../contexts/auth";

export default function Routes(){
    const { signed } = useContext(AuthContext)
    const building = true // quando terminar eliminar isso e colocar signed no lugar 

    return(
        <View style={{flex: 1}}>
            {building ? <AppRoute/> : <AuthRoute/>}
        </View>
    )
}