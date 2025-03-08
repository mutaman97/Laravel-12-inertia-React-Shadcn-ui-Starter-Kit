import Pricing from '@/components/landings/pricing/pricing'
import Footer from '@/components/layouts/landing/footer'
import LandingNavbar from '@/components/layouts/landing/landing-navbar'

export default function Page() {
  return (
    <main>
      <LandingNavbar />
      <Pricing />
      <Footer />
    </main>
  )
}
