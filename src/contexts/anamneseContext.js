import React, { createContext, useState, useEffect, useContext } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../services/firebaseConnection";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "./auth";
import { supabase } from '../services/supabase'
import { condicoes, comportamentos } from "../constants/anamneseOptions";

export const AnamneseContext = createContext()

export default function AnamneseProvider({ children }){
    const { user } = useContext(AuthContext)
    const navigation = useNavigation()
    const [paciente, setPaciente] = useState({
        user: '',
        grupo: '',
        data: '',
        nome: '',
        sus: '',
        nascimento: '',
        idade: '0',
        endereco: {
            ruaN: '',
            bairro: '',
            cidadeUf: '',
            cep: '',
        },
        informante: '',
        contato: '',
        mae: {
            nome: '',
            nascimento: '',
            profissao: ''
        },
        pai: {
            nome: '',
            nascimento: '',
            profissao: ''
        },
        pais: {
            estadoCivil: '',
        },
        idadeSeparacao: '',
        guardiao: '',
        padrastoMadrasta: '',
        outroGuardiao: {
            motivo: '',
            nome: ''
        },
        guardiaoLegal: '',
        motivoAvaliacao: '',
        profissionais: '',
        convive: '',
        condicoes: condicoes,
        gestacaoPlanejada: '',
        prenatal: '',
        intercorrencia: '',
        qualIntercorrencia: '',
        medicamentoGestacao: '',
        parto: {
            tipo: '',
            motivo: ''
        },
        nasceuSemanas: '',
        apgar: {
            primeiroMinuto: '',
            quintoMinuto: '',
            peso: '',
            comprimento: ''
        },
        problemaNascimento: '',
        oxigenio: '',
        cianotico: '',
        chorou: '',
        ictericia: '',
        fototerapia:'',
        mamou: '',
        leitMatExclMes: '',
        mamouIdade: '',
        mamadeira: '',
        chupeta: '',
        idadeIntroAlimentar: '',
        difIntroAlimentar: '',
        difAlimentar: '',
        consistenciasAceitas: '',
        problemaAlimentacao: '',
        seletividadeAlimentar: '',
        formaSono: '',
        dormeSozinho: '',
        quemCompartilhaCama: '',
        horarioDormir: '',
        horarioAcordar:'',
        problemaCrescimento: '',
        itensSignificantes: '',
        condicoesFilho:'',
        fatoresDif: '',
        medicacao: {
            usa:'',
            nome: '',
            motivo: '',
            receitadaPor:''
        },
        compreensaoFala: '',
        resolProblemas: '',
        mantemAtencao: '',
        habOrganizacao: '',
        recEventos: '',
        recFatos: '',
        aprendExp: '',
        entendConceitos: '',
        outrasDificuldades: '',
        outraDifCogn: '',
        habilidadeEspecial: '',
        difCompreensaoLing: '',
        difComunicExpressiva: '',
        estereotipiasMovCorporais: '',
        caracteristicasSociais: '',
        atividadesFavoritas: '',
        comportamentos: comportamentos,
        probLimites: '',
        cumprePedidos: '',
        estrategiasUsadas: '',
        independenciaAtiv: '',
        habilidadesMotoras: '',
        contatoVisual: '',
        inclinaCabeca: '',
        aproximaObjetos: '',
        afastaObjetos: '',
        movimentoOlhos: '',
        avOftalmo: '',
        dorCabeca: '',
        difAuditiva: '',
        realizouAv: '',
        escola: {
            frequenta: '',
            nome: '',
            aee: '',
            serie: '',
            turno: ''
        },
        difAprend: '',
        comportEscola: '',
        medicoResponsavel: '',
        tecnicoResponsavel: '',
        sentouSemApoio: '',
        engatinhou: '',
        andouSemSuporte: '',
        controlaEsfincter: '',
        fraldas: '',
        manipObjDedos: '',
        praticaEsporte: '',
        esporte: '',
        autoAgressao: '',
        heteroAgressao: '',
        idadeBalbuciou: '',
        idadeSilabas: '',
        idadePriPalavras: '',
        idadeFrases: '',
        difDesenvolvimentoLinguagem: '',
        difArtPronuncia: '',
        difRitVoz: '',
        repeteFrases: '',
        confusaoPron: '',
        difCognitiva: '',
        habEspecial: '',
        difComprLinguagem: '',
        reacaoContrariado: '',
        banhoSozinho: '',
        escovaDentesSozinho: '',
        limpaSozinho: '',
        atrapalhaComHigiene: '',
        vesteSozinho: '',
        amarraCadarcos: '',
        sorrisoEspontaneoFamiliares: '',
        sorrisoEspontaneoNaoFamiliares: '',
        sorrisoResposta: '',
        variacaoExpressaoFacial: '',
        exprEmocionalContexto: '',
        compartAtivPraz: '',
        sozinho: '',
        excQuieto: '',
        interObjPess: '',
        preocupPais:'',
    })
    const [fotoPaciente, setFotoPaciente] = useState(null)
    const [profissionais, setProfissionais] = useState({})

    const pacienteInicial = {
        user: '',
        grupo: '',
        data: '',
        nome: '',
        sus: '',
        nascimento: '',
        idade: '0',
        endereco: {
            ruaN: '',
            bairro: '',
            cidadeUf: '',
            cep: '',
        },
        informante: '',
        contato: '',
        mae: {
            nome: '',
            nascimento: '',
            profissao: ''
        },
        pai: {
            nome: '',
            nascimento: '',
            profissao: ''
        },
        pais: {
            estadoCivil: '',
        },
        idadeSeparacao: '',
        guardiao: '',
        padrastoMadrasta: '',
        outroGuardiao: {
            motivo: '',
            nome: ''
        },
        guardiaoLegal: '',
        motivoAvaliacao: '',
        profissionais: '',
        convive: '',
        condicoes: condicoes,
        gestacaoPlanejada: '',
        prenatal: '',
        intercorrencia: '',
        qualIntercorrencia: '',
        medicamentoGestacao: '',
        parto: {
            tipo: '',
            motivo: ''
        },
        nasceuSemanas: '',
        apgar: {
            primeiroMinuto: '',
            quintoMinuto: '',
            peso: '',
            comprimento: ''
        },
        problemaNascimento: '',
        oxigenio: '',
        cianotico: '',
        chorou: '',
        ictericia: '',
        fototerapia:'',
        mamou: '',
        leitMatExclMes: '',
        mamouIdade: '',
        mamadeira: '',
        chupeta: '',
        idadeIntroAlimentar: '',
        difIntroAlimentar: '',
        difAlimentar: '',
        consistenciasAceitas: '',
        problemaAlimentacao: '',
        seletividadeAlimentar: '',
        formaSono: '',
        dormeSozinho: '',
        quemCompartilhaCama: '',
        horarioDormir: '',
        horarioAcordar:'',
        problemaCrescimento: '',
        itensSignificantes: '',
        condicoesFilho:'',
        fatoresDif: '',
        medicacao: {
            usa:'',
            nome: '',
            motivo: '',
            receitadaPor:''
        },
        compreensaoFala: '',
        resolProblemas: '',
        mantemAtencao: '',
        habOrganizacao: '',
        recEventos: '',
        recFatos: '',
        aprendExp: '',
        entendConceitos: '',
        outrasDificuldades: '',
        outraDifCogn: '',
        habilidadeEspecial: '',
        difCompreensaoLing: '',
        difComunicExpressiva: '',
        estereotipiasMovCorporais: '',
        caracteristicasSociais: '',
        atividadesFavoritas: '',
        comportamentos: comportamentos,
        probLimites: '',
        cumprePedidos: '',
        estrategiasUsadas: '',
        independenciaAtiv: '',
        habilidadesMotoras: '',
        contatoVisual: '',
        inclinaCabeca: '',
        aproximaObjetos: '',
        afastaObjetos: '',
        movimentoOlhos: '',
        avOftalmo: '',
        dorCabeca: '',
        difAuditiva: '',
        realizouAv: '',
        escola: {
            frequenta: '',
            nome: '',
            aee: '',
            serie: '',
            turno: ''
        },
        difAprend: '',
        comportEscola: '',
        medicoResponsavel: '',
        tecnicoResponsavel: '',
        sentouSemApoio: '',
        engatinhou: '',
        andouSemSuporte: '',
        controlaEsfincter: '',
        fraldas: '',
        manipObjDedos: '',
        praticaEsporte: '',
        esporte: '',
        autoAgressao: '',
        heteroAgressao: '',
        idadeBalbuciou: '',
        idadeSilabas: '',
        idadePriPalavras: '',
        idadeFrases: '',
        difDesenvolvimentoLinguagem: '',
        difArtPronuncia: '',
        difRitVoz: '',
        repeteFrases: '',
        confusaoPron: '',
        difCognitiva: '',
        habEspecial: '',
        difComprLinguagem: '',
        reacaoContrariado: '',
        banhoSozinho: '',
        escovaDentesSozinho: '',
        limpaSozinho: '',
        atrapalhaComHigiene: '',
        vesteSozinho: '',
        amarraCadarcos: '',
        sorrisoEspontaneoFamiliares: '',
        sorrisoEspontaneoNaoFamiliares: '',
        sorrisoResposta: '',
        variacaoExpressaoFacial: '',
        exprEmocionalContexto: '',
        compartAtivPraz: '',
        sozinho: '',
        excQuieto: '',
        interObjPess: '',
        preocupPais:'',
    }

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
        
            setPaciente(prev => ({...prev, idade: idade}));
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
        callback(prev => ({...prev, [key]: textoFiltrado}))
    }

    const formatarSus = (texto) => {
        let textoFiltrado = texto.replace(/\D/g, '')
        textoFiltrado = textoFiltrado.match(/.{1,4}/g)?.join(' ') || textoFiltrado
        setPaciente(prev => ({...prev, sus: textoFiltrado}))
    }

    const formatarCep = (texto) => {
        let textoFiltrado = texto.replace(/\D/g,'')
        if (textoFiltrado.length > 5) {
            textoFiltrado = `${textoFiltrado.substring(0,2)}.${textoFiltrado.substring(2,5)}-${textoFiltrado.substring(5,8)}`
        } else if(textoFiltrado.length > 2) {
            textoFiltrado = `${textoFiltrado.substring(0,2)}.${textoFiltrado.substring(2)}`
        }

        setPaciente( prev => ({...prev, endereco: {...prev.endereco, cep: textoFiltrado}}))
    }

    async function sendToDb(data) {
        try {
          // 1. Upload da imagem para Supabase
          const response = await fetch(fotoPaciente);
          const blob = await response.blob();
          const cleanedSus = (data.sus || '').toString().replace(/\s/g, '');
          const filePath = `${cleanedSus}/profile.jpg`;
      
          const { data: uploadData, error: uploadError } = await supabase.storage
            .from('fotos-pacientes')
            .upload(filePath, blob, {
              cacheControl: '3600',
              upsert: true,
              contentType: 'image/jpg',
            });
      
          if (uploadError) {
            console.log('Erro ao enviar imagem:', uploadError);
            return;
          }
      
          // 2. Geração de URL assinada
          const { data: signedData, error: signedError } = await supabase.storage
            .from('fotos-pacientes')
            .createSignedUrl(filePath, 3600);
      
          if (signedError) {
            console.log('Erro ao gerar URL assinada:', signedError);
            return;
          }
      
          const imageUrl = signedData.signedUrl;
      
          // 3. Monta o objeto final
          const pacienteData = {
            ...data,
            imageUrl,
            userId: data.uid,
          };
      
          // 4. Envia para o Firestore
          const docRef = await addDoc(collection(db, 'pacientes'), pacienteData);
      
          console.log('Documento gravado com o ID:', docRef.id);
      
          // 5. Limpa e navega
          setPaciente(pacienteInicial);
          navigation.navigate('Home');
      
        } catch (error) {
          console.log('Erro inesperado em sendToDb:', error);
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
            sendToDb,
            fotoPaciente,
            setFotoPaciente
        }}>
            {children}
        </AnamneseContext.Provider>
    )
}