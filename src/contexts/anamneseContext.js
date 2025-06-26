import React, { createContext, useState, useEffect } from "react";
import { condicoes } from '../constants/anamneseOptions'
import { format } from "date-fns";

export const AnamneseContext = createContext()

export default function AnamneseProvider({ children }){
    const [paciente, setPaciente] = useState({
        data: '',
        nome: '',
        sus: '',
        nascimento: '',
        apgar:{
            primeiroMinuto:'',
            quintoMinuto:'',
            peso:'',
            comprimento:''
        },
        endereco:{
            ruaN: '',
            bairro:'',
            cidadeUf: ''
        },
        informante:'',
        mae:{
            nome:'',
            nascimento:'',
            profissao:''
        },
        pai:{
            nome:'',
            nascimento:'',
            profissao:''
        },
        pais:{
            estadoCivil:''
        },
        outroGuardiao:{
            motivo:'',
            nome:''
        },
        condicoes: condicoes,
        escola:{
            frequenta: '',
            nome: '',
            aee: '',
            serie: '',
            turno: ''
        }
    })

    useEffect(()=>{
        function idadeHoje(){
            const dataHoje = new Date()
            console.log('Essa é a data de hoje:', dataHoje)
        }

        idadeHoje()
    }, [paciente])

    const [profissionais, setProfissionais] = useState({})

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

    function enviarDadosAnamn(dados){
        console.log(dados)
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
            enviarDadosAnamn
        }}>
            {children}
        </AnamneseContext.Provider>
    )
}