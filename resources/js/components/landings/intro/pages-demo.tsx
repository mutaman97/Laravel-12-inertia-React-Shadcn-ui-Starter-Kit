import ThemeBasedImage from '@/components/theme-based-image'
import { Link } from '@inertiajs/react'
import { nanoid } from 'nanoid'
import React from 'react'

const PagesDemo = () => {
  return (
    <div className="mx-auto max-w-[1000px] px-4">
      <div className="landing-pages mb-24">
        <div className="mb-10 text-center">
          <span className="bg-card-hover -inset-px rounded-full bg-gradient-to-r from-purple-400 via-green-500 to-blue-500 px-4 py-2 text-xl font-bold text-white">
            Landing Pages
          </span>
          <p className="mt-6">Explore all Prebuilt Lanading pages </p>
        </div>

        <div className="bg-card grid w-full grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
          {landings.map(({ id, route, light, dark }, index) => (
            <React.Fragment key={id}>
              {' '}
              {/* ✅ Fix: Added a key to Fragment */}
              {index + 1 === landings.length ? (
                <Link target="_blank" href="landing-pages" className="relative mx-auto w-full max-w-[308px] md:mx-0">
                  <ThemeBasedImage key={id} width={308} height={500} lightSrc={light} darkSrc={dark} alt="shadcn-kit" />

                  <div className="text-primary-foreground absolute top-0 left-0 flex h-full w-full items-center justify-center bg-black/60 font-black">
                    <h4 className="dark:text-white">+6</h4>
                  </div>
                </Link>
              ) : (
                <Link href={route} target="_blank" className="group relative mx-auto w-full max-w-[308px] md:mx-0">
                  <ThemeBasedImage key={id} width={308} height={500} lightSrc={light} darkSrc={dark} alt="shadcn-kit" />

                  <div className="text-primary-foreground absolute top-0 left-0 flex h-full w-full items-center justify-center bg-black/40 font-semibold opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <p>View Page</p>
                  </div>
                </Link>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="dashboard-pages">
        <div className="mb-10 text-center">
          <span className="bg-card-hover -inset-px rounded-full bg-gradient-to-r from-purple-400 via-green-500 to-blue-500 px-4 py-2 text-xl font-bold text-white">
            Dashboards
          </span>
          <p className="mt-6">Explore all dashboard pages and start your Project</p>
        </div>

        <div className="bg-card grid w-full grid-cols-1 gap-12 rounded-xl p-6 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
          {dashboards.map(({ id, route, light, dark }, index) => (
            <React.Fragment key={id}>
              {' '}
              {/* ✅ Fix: Added a key to Fragment */}
              {index + 1 === dashboards.length ? (
                <Link target="_blank" href="dashboard-pages" className="relative overflow-hidden rounded-lg">
                  <ThemeBasedImage key={id} width={300} height={220} lightSrc={light} darkSrc={dark} alt="shadcn-kit" />

                  <div className="text-primary-foreground absolute top-0 left-0 flex h-full w-full items-center justify-center bg-black/60 font-black">
                    <h4 className="dark:text-white">+7</h4>
                  </div>
                </Link>
              ) : (
                <Link href={route} target="_blank" className="group relative overflow-hidden rounded-lg">
                  <ThemeBasedImage key={id} width={300} height={220} lightSrc={light} darkSrc={dark} alt="shadcn-kit" />

                  <div className="text-primary-foreground absolute top-0 left-0 flex h-full w-full items-center justify-center bg-black/40 font-semibold opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <p>View Page</p>
                  </div>
                </Link>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}

const landings = [
  {
    id: nanoid(),
    route: '/project-management',
    light: '/assets/pages/Landing-01-light.png',
    dark: '/assets/pages/Landing-01-dark.png',
  },
  {
    id: nanoid(),
    route: '/crm-landing',
    light: '/assets/pages/Landing-02-light.png',
    dark: '/assets/pages/Landing-02-dark.png',
  },
  {
    id: nanoid(),
    route: '/ai-content-landing',
    light: '/assets/pages/Landing-03-light.png',
    dark: '/assets/pages/Landing-03-dark.png',
  },
]

const dashboards = [
  {
    id: nanoid(),
    route: '/dashboard/analytics',
    light: '/assets/pages/Dashboard-01 light.png',
    dark: '/assets/pages/Dashboard-01 dark.png',
  },
  {
    id: nanoid(),
    route: '/dashboard/finance-1',
    light: '/assets/pages/Dashboard-02 light.png',
    dark: '/assets/pages/Dashboard-02 dark.png',
  },
  {
    id: nanoid(),
    route: '/dashboard/finance-2',
    light: '/assets/pages/Dashboard-03 light.png',
    dark: '/assets/pages/Dashboard-03 dark.png',
  },
  {
    id: nanoid(),
    route: '/dashboard/ecommerce',
    light: '/assets/pages/Dashboard-04 light.png',
    dark: '/assets/pages/Dashboard-04 dark.png',
  },
  {
    id: nanoid(),
    route: '/dashboard/project-management',
    light: '/assets/pages/Dashboard-05 light.png',
    dark: '/assets/pages/Dashboard-05 dark.png',
  },
  {
    id: nanoid(),
    route: '/dashboard/crm',
    light: '/assets/pages/Dashboard-06 light.png',
    dark: '/assets/pages/Dashboard-06 dark.png',
  },
]

export default PagesDemo
