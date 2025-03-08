import ShadcnKit from '@/components/icons/shadcn-kit'
import ThemeToggle from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Link } from '@inertiajs/react'
import { Menu } from 'lucide-react'
import { nanoid } from 'nanoid'

const LandingNavbar = () => {
  return (
    <Card className="bg-card container mt-5 flex items-center justify-between gap-6 rounded-2xl border-0 px-4 py-3">
      <ShadcnKit className="text-primary cursor-pointer" />

      <ul className="text-card-foreground hidden items-center gap-10 md:flex">
        <li className="text-primary font-medium">
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#features">Features</a>
        </li>
        <li>
          <a href="#pricing">Pricing</a>
        </li>
        <li>
          <a href="#faqs">FAQs</a>
        </li>
        <li>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <span className="cursor-pointer">Pages</span>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="start">
              {landings.map(page => (
                <DropdownMenuItem key={page.id}>
                  <Link href={page.route}>{page.title}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
      </ul>

      <div className="flex items-center">
        <Button variant="secondary" className="hidden px-2 md:block">
          Login
        </Button>
        <Button className="mr-2 ml-2 hidden md:block">Get Started</Button>

        <div className="mr-2 flex items-center gap-2 md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <span className="rounded-md bg-gray-100 px-2 py-2">Pages</span>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="start">
              {landings.map(page => (
                <DropdownMenuItem key={page.id}>
                  <Link href={page.route}>{page.title}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5 scale-100 rotate-0" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <a href="#home">Home</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="#features">Features</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="#pricing">Pricing</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="#faqs">FAQs</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Button variant="secondary" className="w-full text-sm">
                  Login
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Button className="w-full text-sm">Get Started</Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <ThemeToggle />
      </div>
    </Card>
  )
}

const landings = [
  {
    id: nanoid(),
    title: 'Landing 01',
    route: '/project-management',
  },
  {
    id: nanoid(),
    title: 'Landing 02',
    route: '/crm-landing',
  },
  {
    id: nanoid(),
    title: 'Landing 03',
    route: '/ai-content-landing',
  },
  {
    id: nanoid(),
    title: 'Landing 04',
    route: '/new-intro-landing',
  },
  {
    id: nanoid(),
    title: 'Landing 05',
    route: '/about-us-landing',
  },
  {
    id: nanoid(),
    title: 'Landing 06',
    route: '/contact-us-landing',
  },
  {
    id: nanoid(),
    title: 'Landing 07',
    route: '/faqs-landing',
  },
  {
    id: nanoid(),
    title: 'Landing 08',
    route: '/pricing-landing',
  },
  {
    id: nanoid(),
    title: 'Landing 09',
    route: '/career-landing',
  },
]

export default LandingNavbar
