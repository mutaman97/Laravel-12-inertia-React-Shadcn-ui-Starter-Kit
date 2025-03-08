import ComponentViewer from '@/components/component-viewer'
import CallToAction from '@/components/landings/faqs/call-to-action'
import FAQs from '@/components/landings/faqs/faqs'

const Page = () => {
  return (
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-14">
      <ComponentViewer title="CTA Section" Component={CallToAction} componentPath="src/components/landings/faqs/call-to-action.tsx" />

      <ComponentViewer title="FAQs Section" Component={FAQs} componentPath="src/components/landings/faqs/faqs.tsx" />
    </div>
  )
}

export default Page
