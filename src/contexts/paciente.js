import React, { createContext, useState, useContext } from 'react';

const PacienteContext = createContext({});

export function PacienteProvider({ children }) {
    const [paciente, setPaciente] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Função para buscar dados do paciente
    async function buscarPaciente(id) {
        try {
            setLoading(true);
            setError(null);
            
            // Aqui você faria a chamada para sua API
            // const response = await api.get(`/pacientes/${id}`);
            // setPaciente(response.data);
            
            setLoading(false);
        } catch (err) {
            setError('Erro ao buscar dados do paciente');
            setLoading(false);
        }
    }

    // Função para atualizar dados do paciente
    async function atualizarPaciente(dados) {
        try {
            setLoading(true);
            setError(null);
            
            // Aqui você faria a chamada para sua API
            // const response = await api.put(`/pacientes/${paciente.id}`, dados);
            // setPaciente(response.data);
            
            setLoading(false);
        } catch (err) {
            setError('Erro ao atualizar dados do paciente');
            setLoading(false);
        }
    }

    // Função para limpar dados do paciente (logout)
    function limparPaciente() {
        setPaciente(null);
        setError(null);
    }

    return (
        <PacienteContext.Provider 
            value={{ 
                paciente, 
                loading, 
                error,
                buscarPaciente,
                atualizarPaciente,
                limparPaciente
            }}
        >
            {children}
        </PacienteContext.Provider>
    );
}

export function usePaciente() {
    const context = useContext(PacienteContext);
    
    if (!context) {
        throw new Error('usePaciente deve ser usado dentro de um PacienteProvider');
    }
    
    return context;
} 