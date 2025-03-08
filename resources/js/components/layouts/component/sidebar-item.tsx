'use client'

import { RouteTypes } from '@/components/layouts/component/routes'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const SidebarItem = (props: RouteTypes) => {
  const url = usePathname()
  const { id, path, title, pages } = props

  return (
    <>
      {pages.length > 0 ? (
        <ul key={id} className="mb-8 flex flex-col gap-2">
          <li className={cn('mx-4 mb-2')}>
            <p className="text-sm font-medium">{title}</p>
          </li>

          {pages.map(page => (
            <li key={page.id} className="pl-4">
              <Link href={`${path}${page.path}`}>
                <Button variant="link" className={cn('h-8 px-4 text-xs', `${path}${page.path}` === url && 'font-semibold underline')}>
                  {page.name}
                </Button>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <Button key={id} variant="link" className={cn('mb-4 px-4 text-sm', path === url && 'font-semibold underline')}>
          <Link href={path}>{title}</Link>
        </Button>
      )}
    </>
  )
}

export default SidebarItem
