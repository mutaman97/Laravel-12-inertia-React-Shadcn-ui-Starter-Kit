import AvailableJobs from '@/components/landings/career/available-jobs'
import Searching from '@/components/landings/career/searching'
import Footer from '@/components/layouts/landing/footer'
import LandingNavbar2 from '@/components/layouts/landing/landing-navbar-2'

export default function Home() {
  return (
    <main>
      <LandingNavbar2 />
      <Searching />
      <AvailableJobs />
      <Footer />
    </main>
  )
}
