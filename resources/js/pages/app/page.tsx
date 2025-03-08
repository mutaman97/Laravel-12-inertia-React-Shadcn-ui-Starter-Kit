import Demos from '@/components/landings/intro/demos'
import Features from '@/components/landings/intro/features'
import Footer from '@/components/landings/intro/footer'
import Header from '@/components/landings/intro/header'
import Navbar from '@/components/landings/intro/navbar'
import PagesDemo from '@/components/landings/intro/pages-demo'
import Pricing from '@/components/landings/intro/pricing'

export default function Home() {
  return (
    <main className="flex flex-col gap-24">
      <div className="header flex flex-col gap-24 bg-gradient-to-r from-purple-800 to-blue-900">
        <Navbar />
        <Header />
      </div>

      <Features />
      <Demos />
      <PagesDemo />
      {/* <Testimonials /> */}
      <Pricing />
      <Footer />
    </main>
  )
}
