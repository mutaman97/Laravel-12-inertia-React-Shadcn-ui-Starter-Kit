import ComponentViewer from '@/components/component-viewer'
import Footer from '@/components/layouts/landing/footer'
import LandingNavbar from '@/components/layouts/landing/landing-navbar'
import LandingNavbar2 from '@/components/layouts/landing/landing-navbar-2'

const Page = () => {
  return (
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-14">
      <ComponentViewer title="Landing Navbar Section" Component={LandingNavbar} componentPath="src/components/layouts/landing/landing-navbar.tsx" />

      <ComponentViewer
        title="Landing Navbar-2 Section"
        Component={LandingNavbar2}
        componentPath="src/components/layouts/landing/landing-navbar-2.tsx"
      />

      <ComponentViewer title="Footer Section" Component={Footer} componentPath="src/components/layouts/landing/footer.tsx" />
    </div>
  )
}

export default Page
