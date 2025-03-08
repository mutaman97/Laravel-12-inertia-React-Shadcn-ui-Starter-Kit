import ShadcnKit from '@/components/icons/shadcn-kit'

const Footer = () => {
  return (
    <div className="container px-4">
      <div className="mb-16 flex flex-col items-start justify-between gap-10 md:flex-row">
        <div className="w-full md:max-w-[420px]">
          <ShadcnKit className="text-primary mx-auto h-[50px] w-[212px] md:mx-0" />
          <p className="text-secondary-foreground mt-6 font-medium">
            ShadcnKit SaaS template is a powerful and versatile software application that provides a comprehensive framework for building and
            delivering cloud-based solutions.
          </p>
        </div>
        <div className="flex w-full flex-col justify-between gap-10 md:max-w-[650px] md:flex-row">
          <div>
            <p className="mb-[30px] text-xl font-semibold">Products</p>
            <ul className="text-secondary-foreground flex flex-col gap-5">
              <li>Project Management</li>
              <li>Multi-tenancy</li>
              <li>Scalability</li>
              <li>Customization</li>
              <li>Integration</li>
              <li>Mobile accessibility</li>
              <li>Analytics and reporting</li>
            </ul>
          </div>
          <div>
            <p className="mb-[30px] text-xl font-semibold">Features</p>
            <ul className="text-secondary-foreground flex flex-col gap-5">
              <li>User management</li>
              <li>Workflow automation</li>
              <li>API access</li>
              <li>Data visualization</li>
              <li>Version control</li>
              <li>Upgrades</li>
              <li>Billing and invoicing</li>
            </ul>
          </div>
          <div>
            <p className="mb-[30px] text-xl font-semibold">Explore</p>
            <ul className="text-secondary-foreground flex flex-col gap-5">
              <li>Docs</li>
              <li>Pricing</li>
              <li>Integrations</li>
              <li>Blog</li>
              <li>About</li>
            </ul>
          </div>
        </div>
      </div>

      <p className="text-secondary-foreground p-6 text-center text-lg">Copyright © 2023 UI-Lib. All rights reserved</p>
    </div>
  )
}

export default Footer
