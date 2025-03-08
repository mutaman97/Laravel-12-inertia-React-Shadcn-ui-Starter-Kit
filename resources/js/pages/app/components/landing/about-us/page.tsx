import ComponentViewer from '@/components/component-viewer'
import Demos from '@/components/landings/about-us/demos'
import Header from '@/components/landings/about-us/header'
import Teams from '@/components/landings/about-us/teams'
import Testimonials from '@/components/landings/about-us/testimonials'

const Page = () => {
  return (
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-14">
      <ComponentViewer title="Header Section" Component={Header} componentPath="src/components/landings/about-us/header.tsx" />

      <ComponentViewer title="Demos Section" Component={Demos} componentPath="src/components/landings/about-us/demos.tsx" />

      <ComponentViewer title="Teams Section" Component={Teams} componentPath="src/components/landings/about-us/teams.tsx" />

      <ComponentViewer title="Testimonials Section" Component={Testimonials} componentPath="src/components/landings/about-us/testimonials.tsx" />
    </div>
  )
}

export default Page
