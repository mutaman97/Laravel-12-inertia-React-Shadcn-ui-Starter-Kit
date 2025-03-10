import Shadcn from '@/components/icons/shadcn'
import ShadcnKit from '@/components/icons/shadcn-kit'
import { ScrollArea } from '@/components/ui/scroll-area'
import { useAppContext } from '@/hooks/useAppContext'
import routes from '@/lib/routes'
import { cn } from '@/lib/utils'
import { Link, usePage } from '@inertiajs/react'
import { useEffect, useState } from 'react'
import SidebarItem from './sidebar-item'

const DesktopSidebar: React.FC = () => {
  const { url } = usePage()
  const [state] = useAppContext()
  const { openSidenav } = state
  const [open, setOpen] = useState<string | null>(null)
  const [compact, setCompact] = useState<boolean>(false)

  const handleOpen = (value: string | null) => {
    setOpen(value === open ? null : value)
  }

  useEffect(() => {
    setCompact(!openSidenav)
  }, [openSidenav])

  useEffect(() => {
    const path = `/${url.split('/')[1]}`
    setOpen(path)
  }, [url])

  const compactHandler = () => {
    if (!openSidenav) {
      setCompact(prev => !prev)
    }
  }

  const compactHide = !openSidenav && compact ? 'hidden' : 'block'
  const compactSpace = !openSidenav && compact ? 'px-6' : 'px-4'

  return (
    <section
      className={cn(
        'relative inset-0 z-50 hidden h-full w-full transition-all duration-300 md:block',
        openSidenav ? 'max-w-[260px]' : 'max-w-[100px]'
      )}
    >
      <ScrollArea
        onMouseLeave={compactHandler}
        onMouseEnter={compactHandler}
        className={cn(
          'bg-background border-border absolute top-0 left-0 h-full overflow-x-hidden border border-r shadow transition-all duration-300 hover:w-[260px]',
          openSidenav ? 'w-[260px]' : 'w-[100px]'
        )}
      >
        {compact ? (
          <Link href="/" className="flex items-center gap-4 px-8 py-6">
            <Shadcn />
          </Link>
        ) : (
          <Link href="/" className="flex items-center gap-4 px-8 py-6">
            <ShadcnKit />
          </Link>
        )}

        <div className="m-4">
          {routes.map(({ title, pages }, key) => (
            <ul key={key} className="mb-4 flex flex-col gap-1">
              <li className={cn('mx-3.5 mt-2 mb-5', compactHide)}>
                <small className="font-medium">{title}</small>
              </li>
              {pages.map(({ Icon, name, path, childItems = [] }) => (
                <li key={name}>
                  <SidebarItem
                    url={url}
                    path={path}
                    Icon={Icon}
                    name={name}
                    compact={compact}
                    childItems={childItems}
                    compactSpace={compactSpace}
                    compactHide={compactHide}
                    handleOpen={handleOpen}
                  />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </ScrollArea>
    </section>
  )
}

export default DesktopSidebar
