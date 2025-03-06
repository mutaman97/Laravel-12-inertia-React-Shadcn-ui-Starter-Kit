'use client'

import { Link } from '@inertiajs/react'
// import { usePathname } from 'next/navigation'

import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string
    title: string
  }[]
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
  // const pathname = usePathname()
  const pathname = null

  return (
    <nav className={cn('flex space-x-2 lg:flex-col lg:space-y-1 lg:space-x-0', className)} {...props}>
      {items.map(item => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(buttonVariants({ variant: 'ghost' }), pathname === item.href ? 'bg-muted hover:bg-muted' : 'hover:bg-muted', 'justify-start')}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  )
}
