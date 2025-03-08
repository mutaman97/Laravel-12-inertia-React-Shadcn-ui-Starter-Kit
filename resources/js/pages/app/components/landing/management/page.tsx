import ComponentViewer from '@/components/component-viewer'
import Analytics from '@/components/landings/management/analytics'
import Demos from '@/components/landings/management/demos'
import FAQs from '@/components/landings/management/faqs'
import Features from '@/components/landings/management/features'
import Header from '@/components/landings/management/header'
import Sponsors from '@/components/landings/management/sponsors'

const Page = () => {
  return (
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-14">
      <ComponentViewer title="Header Section" Component={Header} componentPath="src/components/landings/management/header.tsx" />

      <ComponentViewer title="Features Section" Component={Features} componentPath="src/components/landings/management/features.tsx" />

      <ComponentViewer title="Demos Section" Component={Demos} componentPath="src/components/landings/management/demos.tsx" />

      <ComponentViewer title="FAQs Section" Component={FAQs} componentPath="src/components/landings/management/faqs.tsx" />

      <ComponentViewer title="Analytics Section" Component={Analytics} componentPath="src/components/landings/management/analytics.tsx" />

      <ComponentViewer title="Sponsors Section" Component={Sponsors} componentPath="src/components/landings/management/sponsors.tsx" />
    </div>
  )
}

export default Page
