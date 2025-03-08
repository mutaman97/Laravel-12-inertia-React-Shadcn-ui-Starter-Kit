import ComponentViewer from '@/components/component-viewer'
import Demos from '@/components/landings/ai-writer/demos'
import Features from '@/components/landings/ai-writer/features'
import Header from '@/components/landings/ai-writer/header'
import Overview from '@/components/landings/ai-writer/overview'
import Testimonials from '@/components/landings/ai-writer/testimonials'

const Page = () => {
  return (
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-14">
      <ComponentViewer title="Header Section" Component={Header} componentPath="src/components/landings/ai-writer/header.tsx" />

      <ComponentViewer title="Features Section" Component={Features} componentPath="src/components/landings/ai-writer/features.tsx" />

      <ComponentViewer title="Demos Section" Component={Demos} componentPath="src/components/landings/ai-writer/demos.tsx" />

      <ComponentViewer title="Overview Section" Component={Overview} componentPath="src/components/landings/ai-writer/overview.tsx" />

      <ComponentViewer title="Testimonials Section" Component={Testimonials} componentPath="src/components/landings/ai-writer/testimonials.tsx" />
    </div>
  )
}

export default Page
