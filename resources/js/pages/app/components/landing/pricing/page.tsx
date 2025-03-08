import ComponentViewer from '@/components/component-viewer'
import Pricing from '@/components/landings/pricing/pricing'

const Page = () => {
  return (
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-14">
      <ComponentViewer title="Pricing Plans Section" Component={Pricing} componentPath="src/components/landings/pricing/pricing.tsx" />
    </div>
  )
}

export default Page
