import { auth } from "@/server/auth"
import { HydrateClient } from "@/trpc/server"

export default async function Live(){
    const session = await auth();
    if(session?.user){
        return(
            <HydrateClient>
                <h1>Live</h1>

                <div>Em Breve você podera stremar suas propias lives</div>
            </HydrateClient>   
        )
    }
    return(
        <HydrateClient>
            <script>
                window.location.href = "/";
            </script>
        </HydrateClient>   
    )
}