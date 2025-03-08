'use client'

import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { setMobileSidenav } from '@/context/app-context'
import { useAppContext } from '@/hooks/useAppContext'
import { cn } from '@/lib/utils'
import { Menu, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { HTMLAttributes } from 'react'

type Props = HTMLAttributes<HTMLDivElement>

const DashboardNavbar = ({ className, ...props }: Props) => {
  const { setTheme } = useTheme()
  const [state, dispatch] = useAppContext()
  const { mobileSidenav } = state

  return (
    <div className={cn('', className)} {...props}>
      <div className="border-border flex justify-between gap-6 border-y px-7 py-4 shadow">
        <div className="capitalize">
          <Button
            size="icon"
            variant="outline"
            className="flex h-8 w-8 items-center justify-center md:hidden"
            onClick={() => setMobileSidenav(dispatch, !mobileSidenav)}
          >
            <Menu className="h-4 w-4" />
          </Button>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="h-8 w-8">
              <Sun className="h-5 w-5 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
              <Moon className="absolute h-5 w-5 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('system')}>System</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}

export default DashboardNavbar
