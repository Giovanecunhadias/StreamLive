import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Play, Tv, Film, Music, Smartphone, Globe, Check } from 'lucide-react'

import { auth } from "@/server/auth"
import { api, HydrateClient } from "@/trpc/server"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default async function StreamingNetworkLanding() {
  const session = await auth();

  if (session?.user) {
    void api.post.getLatest.prefetch();
  }

  return (
    <HydrateClient>
      <div className="flex flex-col min-h-screen">
        <header className="px-4 lg:px-6 h-14 flex items-center">
          <Link className="flex items-center justify-center" href="#">
            <Play className="h-6 w-6 text-primary" />
            <span className="ml-2 text-2xl font-bold text-primary">Stream Live</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
              Features
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#pricing">
              Pricing
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#about">
              About
            </Link>
            {!session?.user ? (
              <Link className="text-sm font-medium hover:underline underline-offset-4" href="/api/auth/signin">
                Login
              </Link>
            ) : (
              <Link className="text-sm font-medium hover:underline underline-offset-4" href="/api/auth/signout">
                Logout
              </Link>
            )}
          </nav>
        </header>
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Your World of Entertainment
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                    Stream your favorite movies, TV shows, and music anytime, anywhere. One subscription, endless entertainment.
                  </p>
                </div>
                <div className="space-x-4">
                  <Button>Get Started</Button>
                  <Button variant="outline">Learn More</Button>
                </div>
              </div>
            </div>
          </section>
          {session?.user && (
            <section className="w-full py-12 md:py-24 lg:py-32">
              <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Featured Content</h2>
                <div className="flex flex-wrap justify-center gap-8">
                  <Link href="https://embed.warezcdn.link/serie/tt0898266">
                    <Image src="https://m.media-amazon.com/images/M/MV5BZjgzY2QyNzItNDhhYi00ZWIwLWFjN2UtZDJkN2MxYWNjMmJjXkEyXkFqcGc@._V1_SX300.jpg" alt="The Big Bang Theory" width={200} height={200} />
                  </Link>
                  <Link href="https://embed.warezcdn.link/filme/tt9218128">
                    <Image src="https://m.media-amazon.com/images/M/MV5BMWYzZTM5ZGQtOGE5My00NmM2LWFlMDEtMGNjYjdmOWM1MzA1XkEyXkFqcGc@._V1_SX300.jpg" alt="Gladiador II" width={200} height={200} />
                  </Link>
                  <Link href="https://embed.warezcdn.link/filme/tt26731216">
                    <Image src="https://m.media-amazon.com/images/M/MV5BNTViOGIzNWEtMzY5OC00OWQxLWE4ZjAtZDFkMGE0NjNhM2QwXkEyXkFqcGc@._V1_SX300.jpg" alt="A Forja" width={200} height={200} />
                  </Link>
                </div>
              </div>
            </section>
          )}
          <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <FeatureCard
                  icon={<Tv className="h-10 w-10 mb-4 text-primary" />}
                  title="TV Shows"
                  description="Binge-watch the latest series and classic favorites."
                />
                <FeatureCard
                  icon={<Film className="h-10 w-10 mb-4 text-primary" />}
                  title="Movies"
                  description="Enjoy a vast library of films from every genre."
                />
                <FeatureCard
                  icon={<Music className="h-10 w-10 mb-4 text-primary" />}
                  title="Music"
                  description="Listen to millions of songs and podcasts."
                />
                <FeatureCard
                  icon={<Smartphone className="h-10 w-10 mb-4 text-primary" />}
                  title="Mobile"
                  description="Watch on your phone or tablet with our mobile app."
                />
                <FeatureCard
                  icon={<Globe className="h-10 w-10 mb-4 text-primary" />}
                  title="Global Access"
                  description="Access your content from anywhere in the world."
                />
                <FeatureCard
                  icon={<Play className="h-10 w-10 mb-4 text-primary" />}
                  title="Offline Viewing"
                  description="Download and watch offline, perfect for travel."
                />
              </div>
            </div>
          </section>
          <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Pricing Plans</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <PricingCard
                  title="Basic"
                  price="$8.99"
                  description="Perfect for individuals"
                  features={["HD Streaming", "Watch on 1 device", "Cancel anytime", "First month free"]}
                />
                <PricingCard
                  title="Standard"
                  price="$13.99"
                  description="Great for couples"
                  features={["Full HD Streaming", "Watch on 2 devices", "Cancel anytime", "First month free", "Download & watch offline"]}
                />
                <PricingCard
                  title="Premium"
                  price="$17.99"
                  description="Ideal for families"
                  features={["4K + HDR Streaming", "Watch on 4 devices", "Cancel anytime", "First month free", "Download & watch offline", "Exclusive content"]}
                />
              </div>
            </div>
          </section>
        </main>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 StreamNet. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Privacy
            </Link>
          </nav>
        </footer>
      </div>
    </HydrateClient>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-center">{icon}</div>
        <CardTitle className="text-xl text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-center text-gray-500 dark:text-gray-400">{description}</p>
      </CardContent>
    </Card>
  )
}


interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
}
function PricingCard({ title, price, description, features }: PricingCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl text-center">{title}</CardTitle>
        <CardDescription className="text-center">{description}</CardDescription>
      </CardHeader>
      <CardContent className="text-center">
        <span className="text-4xl font-bold">{price}</span>
        <span className="text-gray-500 dark:text-gray-400">/month</span>
        <ul className="mt-4 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="text-green-500 mr-2 h-4 w-4" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Choose Plan</Button>
      </CardFooter>
    </Card>
  )
}

