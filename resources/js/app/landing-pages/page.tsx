import Navbar from '@/components/landings/intro/navbar-2'
import ThemeBasedImage from '@/components/theme-based-image'
import { nanoid } from 'nanoid'
import Link from 'next/link'

const Page = () => {
  return (
    <div>
      <Navbar />
      <div className="mx-auto max-w-[1000px] px-4 py-20">
        <h5 className="mb-6 text-center font-semibold">Landings Pages</h5>

        <div className="bg-card grid w-full grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
          {landings.map(({ id, route, light, dark }) => (
            <Link key={id} href={route} target="_blank" className="group relative mx-auto w-full max-w-[308px] md:mx-0">
              <ThemeBasedImage key={id} width={308} height={500} lightSrc={light} darkSrc={dark} alt="shadcn-kit" />

              <div className="text-primary-foreground absolute top-0 left-0 flex h-full w-full items-center justify-center bg-black/40 font-semibold opacity-0 transition-all duration-300 group-hover:opacity-100">
                <p>View Page</p>
              </div>
            </Link>
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
  {
    id: nanoid(),
    route: '/new-intro-landing',
    light: '/assets/pages/Landing-04 light.png',
    dark: '/assets/pages/Landing-04 dark.png',
  },
  {
    id: nanoid(),
    route: '/about-us-landing',
    light: '/assets/pages/Landing-05 light.png',
    dark: '/assets/pages/Landing-05 dark.png',
  },
  {
    id: nanoid(),
    route: '/contact-us-landing',
    light: '/assets/pages/Landing-06 light.png',
    dark: '/assets/pages/Landing-06 dark.png',
  },
  {
    id: nanoid(),
    route: '/faqs-landing',
    light: '/assets/pages/Landing-07 light.png',
    dark: '/assets/pages/Landing-07 dark.png',
  },
  {
    id: nanoid(),
    route: '/pricing-landing',
    light: '/assets/pages/Landing-08 light.png',
    dark: '/assets/pages/Landing-08 dark.png',
  },
  {
    id: nanoid(),
    route: '/career-landing',
    light: '/assets/pages/Landing-09 light.png',
    dark: '/assets/pages/Landing-09 dark.png',
  },
]

export default Page
