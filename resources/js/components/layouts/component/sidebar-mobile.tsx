'use client'

import LeftArrow from '@/components/icons/left-arrow'
import ShadcnKit from '@/components/icons/shadcn-kit'
import routes from '@/components/layouts/component/routes'
import SidebarItem from '@/components/layouts/component/sidebar-item'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { setMobileSidenav } from '@/context/app-context'
import { useAppContext } from '@/hooks/useAppContext'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const MobileSidebar = () => {
  const [state, dispatch] = useAppContext()
  const { mobileSidenav } = state

  return (
    <section className="relative inset-0 z-50 block h-full w-full max-w-[0px] transition-all duration-300 md:hidden">
      <div
        className={cn(
          'bg-background border-border absolute top-0 left-0 h-full overflow-x-hidden border border-r shadow transition-all duration-300',
          mobileSidenav ? 'w-[280px]' : 'w-0'
        )}
      >
        <div className="flex items-center justify-between py-6">
          <Link href="/" className="flex items-center gap-4 pl-6">
            <ShadcnKit />
          </Link>

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
            {routes.map(route => {
              return <SidebarItem key={route.id} {...route} />
            })}
          </div>
        </ScrollArea>
      </div>
    </section>
  )
}

export default MobileSidebar
