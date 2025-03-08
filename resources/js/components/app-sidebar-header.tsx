import { Breadcrumbs } from '@/components/breadcrumbs'
import Search from '@/components/search'
import ThemeToggle from '@/components/theme-toggle'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { type BreadcrumbItem as BreadcrumbItemType } from '@/types'
import { Link } from '@inertiajs/react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function AppSidebarHeader({ breadcrumbs = [] }: { breadcrumbs?: BreadcrumbItemType[] }) {
  return (
    <div className="sticky top-0 z-50 flex flex-col">
      <header className="border-sidebar-border/50 bg-background flex h-16 shrink-0 items-center gap-2 border-b px-6 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 md:px-4">
        <SidebarTrigger className="-ml-1" />
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <div className="w-full flex-1">
          <Search />
        </div>
        <ThemeToggle />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <figure className="cursor-pointer">
              <img src={`/images/avatars/1.png`} className="h-10 w-10" alt="..." />
            </figure>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>
              <Link href={route('profile.edit')} prefetch>
                My Account
              </Link>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href={route('password.edit')} prefetch>
                Change Password
              </Link>
            </DropdownMenuItem>
            {/* <DropdownMenuItem>Support</DropdownMenuItem> */}
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href={route('logout')} method="post">
                Logout
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
    </div>
  )
}
