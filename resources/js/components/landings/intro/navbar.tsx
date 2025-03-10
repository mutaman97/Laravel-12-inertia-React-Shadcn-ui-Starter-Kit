'use client'

import ShadcnKit from '@/components/icons/shadcn-kit'
import ThemeToggle from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { scrollToSection } from '@/lib/scrollToSection'
import { Link } from '@inertiajs/react'
import { Menu } from 'lucide-react'

const Navbar = () => {
  return (
    <Card className="container mt-5 flex items-center justify-between gap-6 rounded-2xl border-0 bg-transparent px-4 py-3">
      <ShadcnKit className="cursor-pointer text-white" />

      <ul className="text-card-foreground hidden items-center gap-10 text-white md:flex [&>li]:cursor-pointer">
        <li onClick={() => scrollToSection('header')}>Home</li>
        <li onClick={() => scrollToSection('landing-pages')}>Landings</li>
        <li onClick={() => scrollToSection('dashboard-pages')}>Dashboards</li>
        <li>
          <Link href="/components">Components</Link>
        </li>
        <li onClick={() => scrollToSection('pricing')}>Pricing</li>
      </ul>

      <div className="flex items-center">
        <div className="mr-2 block md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5 scale-100 rotate-0" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => scrollToSection('header')}>Home</DropdownMenuItem>
              <DropdownMenuItem onClick={() => scrollToSection('landing-pages')}>Landings</DropdownMenuItem>
              <DropdownMenuItem onClick={() => scrollToSection('dashboard-pages')}>Dashboards</DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/components">Components</Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => scrollToSection('pricing')}>Pricing</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <ThemeToggle />
      </div>
    </Card>
  )
}

export default Navbar
