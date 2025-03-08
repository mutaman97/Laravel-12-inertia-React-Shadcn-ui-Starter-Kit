import ShadcnKit from '@/components/icons/shadcn-kit'
import routes from '@/components/layouts/component/routes'
import SidebarItem from '@/components/layouts/component/sidebar-item'
import { ScrollArea } from '@/components/ui/scroll-area'
import Link from 'next/link'

const SidebarDesktop = () => {
  return (
    <section className="relative inset-0 z-50 hidden h-full w-full max-w-[300px] transition-all duration-300 md:block">
      <ScrollArea className="bg-background border-border absolute top-0 left-0 h-full w-[300px] overflow-x-hidden border border-r shadow transition-all duration-300">
        <Link href="/" className="flex items-center gap-4 px-8 py-6">
          <ShadcnKit />
        </Link>

        <div className="m-4">
          {routes.map(route => {
            return <SidebarItem key={route.id} {...route} />
          })}
        </div>
      </ScrollArea>
    </section>
  )
}

export default SidebarDesktop
