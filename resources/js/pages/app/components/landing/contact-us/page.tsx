import ComponentViewer from '@/components/component-viewer'
import ContactBranches from '@/components/landings/contact-us/contact-branches'
import ContactForm from '@/components/landings/contact-us/contact-form'

const Page = () => {
  return (
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-14">
      <ComponentViewer
        title="Contact Branches Section"
        Component={ContactBranches}
        componentPath="src/components/landings/contact-us/contact-branches.tsx"
      />

      <ComponentViewer title="Contact Form Section" Component={ContactForm} componentPath="src/components/landings/contact-us/contact-form.tsx" />
    </div>
  )
}

export default Page
