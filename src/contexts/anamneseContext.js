import React, { createContext, useState } from "react";
import { condicoes } from '../constants/anamneseOptions'

export const AnamneseContext = createContext()

export default function AnamneseProvider({ children }){
    const [paciente, setPaciente] = useState({
        data: '',
        nome: '',
        sus: '',
        condicoes: condicoes
    })

    const formatarData = (texto, callback, key) => {
        let textoFiltrado = texto.replace(/\D/g, '')
        if (textoFiltrado.length >= 5) {
            textoFiltrado = textoFiltrado.substring(0, 2) + '/' + textoFiltrado.substring(2, 4) + '/' + textoFiltrado.substring(4,8)
        } else if (textoFiltrado.length >= 3) {
            textoFiltrado = textoFiltrado.substring(0, 2) + '/' + textoFiltrado.substring(2, 4)
        }
        callback({...paciente, [key]: textoFiltrado})
    }

    const formatarSus = (texto) => {
        let textoFiltrado = texto.replace(/\D/g, '')
        textoFiltrado = textoFiltrado.match(/.{1,4}/g)?.join(' ') || textoFiltrado
        setPaciente({...paciente, sus: textoFiltrado})
    }

    const formatarCep = (texto) => {
        let textoFiltrado = texto.replace(/\D/g,'')
        if (textoFiltrado.length > 5) {
            textoFiltrado = `${textoFiltrado.substring(0,2)}.${textoFiltrado.substring(2,5)}-${textoFiltrado.substring(5,8)}`
        } else if(textoFiltrado.length > 2) {
            textoFiltrado = `${textoFiltrado.substring(0,2)}.${textoFiltrado.substring(2)}`
        }

        setPaciente({...paciente, cep: textoFiltrado})
    }

    return (
        <AnamneseContext.Provider value={{ 
            setPaciente, 
            paciente,
            formatarData,
            formatarSus,
            formatarCep
        }}>
            {children}
        </AnamneseContext.Provider>
    )
}