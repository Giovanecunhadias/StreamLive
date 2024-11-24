import * as React from "react"
import Link from "next/link"
import { Play, Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { auth } from "@/server/auth"
import { api } from "@/trpc/server"
import { Button } from "@/components/ui/button"

export default async function Navbar() {
    const session = await auth();
    if (session?.user) {
        void api.post.getLatest.prefetch();
      }
    
    return (
        <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
            <Link className="flex items-center justify-center" href="#">
              <Play className="h-6 w-6 text-primary" />
              <span className="ml-2 text-2xl font-bold text-primary">Stream Live</span>
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" className="p-0 lg:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col gap-4">
                  <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
                    Features
                  </Link>
                  <Link className="text-sm font-medium hover:underline underline-offset-4" href="">
                      Stream a Live
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
              </SheetContent>
            </Sheet>
            <nav className="hidden lg:flex gap-4 sm:gap-6">
              <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
                Features
              </Link>
              {session?.user && 
                <Link className="text-sm font-medium hover:underline underline-offset-4" href="/live">
                  Stream a Live
                </Link>
              }
              
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
    )
}