import CallToAction from '@/components/landings/crm/call-to-action'
import Demos from '@/components/landings/crm/demos'
import Header from '@/components/landings/crm/header'
import Pricing from '@/components/landings/crm/pricing'
import Testimonials from '@/components/landings/crm/testimonials'
import Footer from '@/components/layouts/landing/footer'
import LandingNavbar from '@/components/layouts/landing/landing-navbar'

export default function Page() {
  return (
    <main>
      <LandingNavbar />
      <Header />
      <Demos />
      <CallToAction />
      <Testimonials />
      <Pricing />
      <Footer />
    </main>
  )
}
