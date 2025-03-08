import ThemeBasedImage from '@/components/theme-based-image'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { ArrowDown, ArrowUp } from 'lucide-react'

const TopActivity = ({ className }: { className: string }) => {
  return (
    <Card className={cn('flex flex-col justify-between p-6 lg:flex-row lg:items-center', className)}>
      <div>
        <div>
          <h6 className="mb-1 font-semibold">$21,350.25</h6>
          <p className="text-secondary-foreground text-sm">My Balance</p>
        </div>

        <div className="flex items-center justify-center gap-7 py-9 lg:justify-start">
          <div className="flex items-center">
            <Button variant="secondary" size="icon">
              <ArrowUp className="h-4 w-4 text-emerald-500" />
            </Button>
            <div className="ml-3">
              <p className="font-semibold">14,210.15</p>
              <p className="text-secondary-foreground text-sm">Income</p>
            </div>
          </div>

          <div className="flex items-center">
            <Button variant="secondary" size="icon">
              <ArrowDown className="h-4 w-4 text-red-500" />
            </Button>
            <div className="ml-3">
              <p className="font-semibold">7,352.17</p>
              <p className="text-secondary-foreground text-sm">Expance</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 lg:justify-start">
          <Button className="w-[100px]">Send</Button>
          <Button variant="secondary" className="text-muted-foreground w-[100px]">
            Receive
          </Button>
        </div>
      </div>

      <div className="flex justify-center pt-8 lg:justify-end lg:pt-0">
        <ThemeBasedImage
          width={190}
          height={210}
          lightSrc="/assets/svg/balance-card-light.svg"
          darkSrc="/assets/svg/balance-card-dark.svg"
          alt="shadcnkit"
        />
      </div>
    </Card>
  )
}

export default TopActivity
