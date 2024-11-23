import Link from "next/link";


import { auth } from "@/server/auth";
import { api, HydrateClient } from "@/trpc/server";
import Image from "next/image";
export default async function Home() {
  const session = await auth();

  if (session?.user) {
    void api.post.getLatest.prefetch();
  }

  return (
    <HydrateClient>
      <div>
      
        {session?.user && <>
          <Link href={"https://embed.warezcdn.link/serie/tt0898266"}><Image src="https://m.media-amazon.com/images/M/MV5BZjgzY2QyNzItNDhhYi00ZWIwLWFjN2UtZDJkN2MxYWNjMmJjXkEyXkFqcGc@._V1_SX300.jpg" alt="logo" width={200} height={200} /></Link> 
          <Link href={"https://embed.warezcdn.link/filme/tt9218128"}><Image src="https://m.media-amazon.com/images/M/MV5BMWYzZTM5ZGQtOGE5My00NmM2LWFlMDEtMGNjYjdmOWM1MzA1XkEyXkFqcGc@._V1_SX300.jpg" alt="logo" width={200} height={200} /></Link> 
        
        </>}
        {!session?.user && (
          <div>
            <Link href="api/auth/signin">Login</Link>
          </div>
        )}
        {session?.user && <Link href="api/auth/signout">Logout</Link>}
      </div>
    </HydrateClient>
  );
}
