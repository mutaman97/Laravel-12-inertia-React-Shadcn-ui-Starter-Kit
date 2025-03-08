'use client'

import LeftArrow from '@/components/icons/left-arrow'
import ShadcnKit from '@/components/icons/shadcn-kit'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { setMobileSidenav } from '@/context/app-context'
import { useAppContext } from '@/hooks/useAppContext'
import routes from '@/lib/routes'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import SidebarItem from './sidebar-item'

const MobileSidebar = () => {
  const url = usePathname()
  const [open, setOpen] = useState<string | null>(null)
  const [state, dispatch] = useAppContext()
  const { mobileSidenav } = state

  const handleOpen = (value: string) => {
    if (value === open) {
      setOpen(null)
    } else {
      setOpen(value)
    }
  }

  const dropDown = (name: string) => {
    if (open === name) {
      return true
    } else {
      return false
    }
  }

  useEffect(() => {
    const path = `/${url.split('/')[1]}`
    setOpen(path)
    dropDown(path)
  }, [url])

  return (
    <section className="relative inset-0 z-50 block h-full w-full max-w-[0px] transition-all duration-300 md:hidden">
      <div
        className={cn(
          'bg-background border-border absolute top-0 left-0 h-full overflow-x-hidden border border-r shadow transition-all duration-300',
          mobileSidenav ? 'w-[260px]' : 'w-0'
        )}
      >
        <div className="flex items-center justify-between py-6">
          <a href="/" className="flex items-center gap-4 pl-6">
            <ShadcnKit />
          </a>
          <Button
            size="icon"
            variant="outline"
            className="h-9 w-6 rounded-r-none bg-gray-200 text-gray-500 hover:bg-gray-200 active:bg-gray-200"
            onClick={() => setMobileSidenav(dispatch, !mobileSidenav)}
          >
            <LeftArrow />
          </Button>
        </div>

        <ScrollArea style={{ height: 'calc(100vh - 86px)' }}>
          <div className="m-4">
            {routes.map(({ title, pages }, key) => {
              return (
                <ul key={key} className="mb-4 flex flex-col gap-1">
                  <li className="mx-3.5 mt-2 mb-5 block">
                    <small className="font-medium">{title}</small>
                  </li>

                  {pages.map(({ Icon, name, path, childItems = [] }) => (
                    <li key={name}>
                      <SidebarItem
                        url={url}
                        path={path}
                        Icon={Icon}
                        name={name}
                        compact={false}
                        childItems={childItems}
                        compactSpace="px-6"
                        compactHide="block"
                        dropDown={dropDown}
                        handleOpen={handleOpen}
                        navItemClick={() => setMobileSidenav(dispatch, !mobileSidenav)}
                      />
                    </li>
                  ))}
                </ul>
              )
            })}
          </div>
        </ScrollArea>
      </div>
    </section>
  )
}

export default MobileSidebar
