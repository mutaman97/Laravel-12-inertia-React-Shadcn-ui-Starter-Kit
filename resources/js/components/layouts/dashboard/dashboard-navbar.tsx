'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { setMobileSidenav, setOpenSidenav } from '@/context/app-context'
import { useAppearance } from '@/hooks/use-appearance'
import { useAppContext } from '@/hooks/useAppContext'
import { cn } from '@/lib/utils'
import { Bell, Menu, Moon, Search, Sun } from 'lucide-react'
import { HTMLAttributes } from 'react'

type Props = HTMLAttributes<HTMLDivElement>

const DashboardNavbar = ({ className, ...props }: Props) => {
  const { appearance, updateAppearance } = useAppearance()

  const [state, dispatch] = useAppContext()
  const { openSidenav, mobileSidenav } = state

  return (
    <div className={cn('', className)} {...props}>
      <div className="border-border flex justify-between gap-6 rounded-lg border px-7 py-4 shadow">
        <div className="capitalize">
          <Button
            size="icon"
            variant="outline"
            className="hidden h-8 w-8 items-center justify-center md:flex"
            onClick={() => setOpenSidenav(dispatch, !openSidenav)}
          >
            <Menu className="h-4 w-4" />
          </Button>
          <Button
            size="icon"
            variant="outline"
            className="flex h-8 w-8 items-center justify-center md:hidden"
            onClick={() => setMobileSidenav(dispatch, !mobileSidenav)}
          >
            <Menu className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" className="h-8 w-8">
            <Search className="h-4 w-4" />
          </Button>

          <Button variant="outline" size="icon" className="h-8 w-8">
            <Bell className="h-4 w-4" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="h-8 w-8">
                <Sun className="h-5 w-5 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                <Moon className="absolute h-5 w-5 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => updateAppearance('light')}>Light</DropdownMenuItem>
              <DropdownMenuItem onClick={() => updateAppearance('dark')}>Dark</DropdownMenuItem>
              <DropdownMenuItem onClick={() => updateAppearance('system')}>System</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="h-8 w-8 cursor-pointer">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Log Out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  )
}

export default DashboardNavbar
