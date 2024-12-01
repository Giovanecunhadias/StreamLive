import Link from "next/link"
import Image from "next/image"


export default function Contents() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 justify-items-center">
                    <Link href="https://embed.warezcdn.link/serie/tt0898266" className="w-full max-w-[300px]">
                      <Image src="https://m.media-amazon.com/images/M/MV5BZjgzY2QyNzItNDhhYi00ZWIwLWFjN2UtZDJkN2MxYWNjMmJjXkEyXkFqcGc@._V1_SX300.jpg" alt="The Big Bang Theory" width={300} height={300} className="w-full h-auto object-cover rounded-lg shadow-lg" />
                    </Link>
                    <Link href="https://embed.warezcdn.link/filme/tt9218128" className="w-full max-w-[300px]">
                      <Image src="https://m.media-amazon.com/images/M/MV5BMWYzZTM5ZGQtOGE5My00NmM2LWFlMDEtMGNjYjdmOWM1MzA1XkEyXkFqcGc@._V1_SX300.jpg" alt="Gladiador II" width={300} height={300} className="w-full h-auto object-cover rounded-lg shadow-lg" />
                    </Link>
                    <Link href="https://embed.warezcdn.link/filme/tt26731216" className="w-full max-w-[300px]">
                      <Image src="https://m.media-amazon.com/images/M/MV5BNTViOGIzNWEtMzY5OC00OWQxLWE4ZjAtZDFkMGE0NjNhM2QwXkEyXkFqcGc@._V1_SX300.jpg" alt="A Forja" width={300} height={300} className="w-full h-auto object-cover rounded-lg shadow-lg" />
                    </Link>
                    <Link href="https://embed.warezcdn.link/serie/tt22248376" className="w-full max-w-[300px]">
                      <Image src="https://m.media-amazon.com/images/M/MV5BZTI4ZGMxN2UtODlkYS00MTBjLWE1YzctYzc3NDViMGI0ZmJmXkEyXkFqcGc@._V1_SX300.jpg" alt="Frieren e a Jornada para o Além" width={300} height={300} className="w-full h-auto object-cover rounded-lg shadow-lg" />
                    </Link>
                    <Link href="https://embed.warezcdn.link/serie/tt1355642" className="w-full max-w-[300px]">
                      <Image src="https://m.media-amazon.com/images/M/MV5BMzNiODA5NjYtYWExZS00OTc4LTg3N2ItYWYwYTUyYmM5MWViXkEyXkFqcGc@._V1_SX300.jpg" alt="Fullmetal Alchemist: Brotherhood" width={300} height={300} className="w-full h-auto object-cover rounded-lg shadow-lg" />
                    </Link>
                    <Link href="https://embed.warezcdn.link/serie/tt2098220" className="w-full max-w-[300px]">
                      <Image src="https://m.media-amazon.com/images/M/MV5BYzYxOTlkYzctNGY2MC00MjNjLWIxOWMtY2QwYjcxZWIwMmEwXkEyXkFqcGc@._V1_SX300.jpg" alt="Hunter x Hunter" width={300} height={300} className="w-full h-auto object-cover rounded-lg shadow-lg" />
                    </Link>
                    <Link href="https://embed.warezcdn.link/serie/tt1632701" className="w-full max-w-[300px]">
                      <Image src="https://m.media-amazon.com/images/M/MV5BYmE4MmNjZjUtNTEyNy00NTZiLWE4NTktYjM2NjBhYzQ1N2IzXkEyXkFqcGc@._V1_SX300.jpg" alt="Suits Homens de Terno" width={300} height={300} className="w-full h-auto object-cover rounded-lg shadow-lg" />
                    </Link>
                </div>
    )
}