import React, { createContext, useState } from "react";

export const AnamneseContext = createContext()

export default function AnamneseProvider({ children }){
    const [paciente, setPaciente] = useState({
        data: ''
    })

    return (
        <AnamneseContext.Provider value={{ setPaciente, paciente }}>
            {children}
        </AnamneseContext.Provider>
    )
}