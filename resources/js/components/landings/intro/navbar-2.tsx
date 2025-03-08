import ShadcnKit from '@/components/icons/shadcn-kit'
import ThemeToggle from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Link } from '@inertiajs/react'
import { Menu } from 'lucide-react'
import { nanoid } from 'nanoid'

const Navbar = () => {
  return (
    <Card className="container mt-5 flex items-center justify-between gap-6 rounded-2xl border-0 bg-transparent px-4 py-3">
      <ShadcnKit className="text-primary cursor-pointer" />

      <ul className="text-card-foreground hidden items-center gap-10 md:flex">
        {pages.map(page => (
          <li key={page.id}>
            <Link href={page.route}>{page.title}</Link>
          </li>
        ))}
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
              {pages.map(page => (
                <DropdownMenuItem key={page.id}>
                  <Link href={page.route}>{page.title}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <ThemeToggle />
      </div>
    </Card>
  )
}

const pages = [
  {
    id: nanoid(),
    title: 'Home',
    route: '/',
  },
  {
    id: nanoid(),
    title: 'Landings',
    route: '/landing-pages',
  },
  {
    id: nanoid(),
    title: 'Dashboards',
    route: '/dashboard-pages',
  },
  {
    id: nanoid(),
    title: 'Components',
    route: '/components',
  },
]

export default Navbar
