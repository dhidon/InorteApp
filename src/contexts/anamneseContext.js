import React, { createContext, useState, useEffect } from "react";
import { condicoes } from '../constants/anamneseOptions'
import { collection, addDoc } from "firebase/firestore";
import { db } from "../services/firebaseConnection";
import { useNavigation } from "@react-navigation/native";

export const AnamneseContext = createContext()

export default function AnamneseProvider({ children }){
    const navigation = useNavigation()
    const [paciente, setPaciente] = useState({
        condicoes: condicoes
    })
    
    const [profissionais, setProfissionais] = useState({})

    useEffect(()=>{
        function gerarIdade() {
            if (!paciente.data || !paciente.nascimento) return "";
        
            const [diaAtual, mesAtual, anoAtual] = paciente.data.split("/").map(Number);
            const [diaNasc, mesNasc, anoNasc] = paciente.nascimento.split("/").map(Number);
        
            const hoje = new Date(anoAtual, mesAtual - 1, diaAtual);
            const nascimento = new Date(anoNasc, mesNasc - 1, diaNasc);
        
            let idade = hoje.getFullYear() - nascimento.getFullYear();
            const m = hoje.getMonth() - nascimento.getMonth();
        
            if (m < 0 || (m === 0 && hoje.getDate() < nascimento.getDate())) {
                idade--;
            }
        
            setPaciente({...paciente, idade: idade});
        }
        gerarIdade()
    }, [paciente.nascimento])

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

        setPaciente({...paciente, endereco: {...paciente.endereco, cep: textoFiltrado}})
    }

    async function sendToDb(data){
        try {
            const docRef = await addDoc(collection(db, "pacientes"), data)
            console.log('Documento gravado com o ID:', docRef.id)
            setPaciente({
                condicoes: condicoes
            })
            navigation.navigate('Home')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <AnamneseContext.Provider value={{ 
            setPaciente, 
            paciente,
            formatarData,
            formatarSus,
            formatarCep,
            profissionais,
            setProfissionais,
            sendToDb
        }}>
            {children}
        </AnamneseContext.Provider>
    )
}