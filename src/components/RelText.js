import React from "react";
import { Text } from "react-native";

export default function RelText({campo, data}){
    return (
        <Text><Text style={{fontWeight: 'bold', flexWrap: 'wrap', lineHeight: 22}}>{campo}: </Text>{data}</Text>
    )
}