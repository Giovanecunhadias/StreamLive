import { auth } from "@/server/auth";
import { HydrateClient } from "@/trpc/server";
import LiveClient from "./LiveClient";

export default async function Live() {
    const session = await auth(); // Obtém a sessão do servidor

    if (!session?.user) {
        // Redirecionamento do servidor para clientes não autenticados
        return (
            <HydrateClient>
                <h1>Você precisa estar logado para acessar esta página.</h1>
            </HydrateClient>
        );
    }

    // Renderiza o componente cliente com os dados da sessão
    return (
        <HydrateClient>
            <LiveClient session={session} />
        </HydrateClient>
    );
}
