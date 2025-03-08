import Navbar from '@/components/layouts/component/navbar'
import SidebarDesktop from '@/components/layouts/component/sidebar-desktop'
import SidebarMobile from '@/components/layouts/component/sidebar-mobile'
import { ScrollArea } from '@/components/ui/scroll-area'
import { AppContextProvider } from '@/context/app-context'
import { ReactNode } from 'react'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <AppContextProvider>
      <div className="flex h-screen text-start">
        <SidebarDesktop />
        <SidebarMobile />

        <div className="w-full">
          <Navbar />

          <ScrollArea className="h-[calc(100vh-66px)]">
            <div className="mx-auto w-full max-w-[1200px] p-6">{children}</div>
          </ScrollArea>
        </div>
      </div>
    </AppContextProvider>
  )
}

export default Layout
