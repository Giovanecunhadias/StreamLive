import * as React from "react"
import Link from "next/link"
import { Play, Tv, Film, Music, Smartphone, Globe, Check } from 'lucide-react'
import Navbar from "./_components/navbar"
import { auth } from "@/server/auth"
import { api, HydrateClient } from "@/trpc/server"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Contents from "./_components/contents"
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
      <Navbar />
      <div className="flex flex-col min-h-screen">
        <div className="max-w-[1920px] mx-auto w-full">
          
          <main className="flex-1">
            <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
              <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                <div className="flex flex-col items-center space-y-4 text-center">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                      Your World of Entertainment
                    </h1>
                    <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                      Stream your favorite movies, TV shows, and music anytime, anywhere. One subscription, endless entertainment.
                    </p>
                  </div>
                  {!session?.user&&
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <Button><Link href={"/api/auth/signin"}>Get Started</Link></Button>
                    <Button variant="outline">Learn More</Button>
                  </div>}
                </div>
              </div>
            </section>
            {session?.user && (
              <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Featured Content</h2>
                  <Contents />
                </div>
              </section>
            )}
            <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
              <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Features</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-8">
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
            {!session?.user && <>
              <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
              <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Pricing Plans</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
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
                  <PricingCard
                    title="Ultimate"
                    price="$24.99"
                    description="For the ultimate experience"
                    features={["8K Streaming", "Watch on 6 devices", "Cancel anytime", "First month free", "Download & watch offline", "Exclusive content", "Early access to new releases"]}
                  />
                </div>
              </div>
            </section>
            </>}
            
          </main>
          <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
            <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Stream Live. All rights reserved.</p>
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
    <Card className="flex flex-col items-center">
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
    <Card className="w-full max-w-[350px]">
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
              <Check className="text-green-500 mr-2 h-4 w-4 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
className="w-full">Choose Plan</Button>
      </CardFooter>
    </Card>
  )
}

