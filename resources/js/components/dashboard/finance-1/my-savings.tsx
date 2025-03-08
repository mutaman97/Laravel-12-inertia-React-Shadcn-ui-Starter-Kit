import Building2 from '@/components/icons/building-2'
import HealthCare from '@/components/icons/health-care'
import Hourglass from '@/components/icons/hourglass'
import Lightbulb from '@/components/icons/lightbulb'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { ChevronRight, MoreHorizontal } from 'lucide-react'
import { nanoid } from 'nanoid'
import { SVGProps } from 'react-html-props'

const MySavings = ({ className }: { className?: string }) => {
  return (
    <Card className={cn('p-6', className)}>
      <div className="flex items-center justify-between">
        <p className="text-lg font-medium">My Savings</p>

        <Button variant="secondary" size="icon" className="h-8 w-8 rounded-md">
          <MoreHorizontal className="text-icon h-4 w-4" />
        </Button>
      </div>

      <div className="mt-6 flex flex-col gap-3">
        {savings.map(({ id, title, amount, Icon }) => (
          <div key={id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button variant="secondary" size="icon" className="h-12 w-12">
                <Icon className="text-icon h-4 w-4" />
              </Button>
              <div>
                <p className="text-lg font-medium">${amount}</p>
                <p className="text-secondary-foreground text-sm">{title}</p>
              </div>
            </div>

            <ChevronRight className="text-icon h-4 w-4 cursor-pointer" />
          </div>
        ))}
      </div>
    </Card>
  )
}

interface savingType {
  id: string
  title: string
  amount: number
  Icon: (props: SVGProps) => JSX.Element
}

const savings: savingType[] = [
  {
    id: nanoid(),
    amount: 23560,
    Icon: Lightbulb,
    title: 'Emergency',
  },
  {
    id: nanoid(),
    amount: 19489,
    Icon: HealthCare,
    title: 'Health',
  },
  {
    id: nanoid(),
    amount: 18889,
    Icon: Hourglass,
    title: 'Investment',
  },
  {
    id: nanoid(),
    amount: 21489,
    Icon: Building2,
    title: 'Education',
  },
]

export default MySavings
