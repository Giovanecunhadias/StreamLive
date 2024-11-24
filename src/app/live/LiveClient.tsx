"use client";

import React, { useEffect } from "react";

// Define a interface para a sessão
interface Session {
    user?: {
        id: string;
    };
}

export default function LiveClient({ session }: { session: Session }) {
    useEffect(() => {
        if (!session?.user) {
            // Redireciona para a página inicial se não houver usuário autenticado
            window.location.href = "/";
        }
    }, [session]);

    if (!session?.user) {
        return null; // Não renderiza nada enquanto redireciona
    }

    return (
        <>
            <h1>Live</h1>
            <div>Em breve você poderá streamar suas próprias lives.</div>
        </>
    );
}
