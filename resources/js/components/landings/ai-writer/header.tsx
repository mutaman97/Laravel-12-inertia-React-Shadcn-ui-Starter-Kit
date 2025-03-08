import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle } from 'lucide-react'
// import Image from "next/image";

const Header = () => {
  return (
    <div className="container mt-[140px] px-4 md:mt-[200px]">
      <div className="mx-auto flex max-w-[1040px] flex-col items-center gap-[30px] text-center">
        <h3 className="font-bold">The Future of Writing is Here</h3>
        <p className="text-secondary-foreground max-w-[600px]">
          Discover Our AI-Driven Website Template for Scalable, High-Quality Content Creation and Take Your Business to the Next Level.
        </p>
        <Button className="h-16 px-7">
          Get Started for Free <ArrowRight className="ml-2.5 h-[18px] w-[18px]" />
        </Button>

        <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
          <p className="flex items-center">
            <CheckCircle className="mr-2 h-5 w-5" />
            <span>No credit card required</span>
          </p>
          <p className="flex items-center">
            <CheckCircle className="mr-2 h-5 w-5" />
            <span>2,000 free words per month</span>
          </p>
          <p className="flex items-center">
            <CheckCircle className="mr-2 h-5 w-5" />
            <span>90+ content types to explore</span>
          </p>
        </div>

        <div className="bg-card mt-20 rounded-[40px] p-5">
          <img width={995} height={528} src="/assets/images/ai-content-landing/banner.png" alt="shadcnkit" />
        </div>
      </div>
    </div>
  )
}

export default Header
