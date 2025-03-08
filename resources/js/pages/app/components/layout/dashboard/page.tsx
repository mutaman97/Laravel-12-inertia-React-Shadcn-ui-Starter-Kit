import ComponentViewer from '@/components/component-viewer'
import DashboardNavbar from '@/components/layouts/dashboard/dashboard-navbar'
import Footer from '@/components/layouts/dashboard/footer'

const Page = () => {
  return (
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-14">
      <ComponentViewer
        title="Dashboard Navbar Section"
        Component={DashboardNavbar}
        componentPath="src/components/layouts/dashboard/dashboard-navbar.tsx"
      />

      <ComponentViewer title="Footer Section" Component={Footer} componentPath="src/components/layouts/dashboard/footer.tsx" />
    </div>
  )
}

export default Page
