import ActionlessAreaChart from '@/components/charts/actionless-area-chart'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { IndianRupee } from 'lucide-react'
import { HTMLAttributes } from 'react'

type Props = HTMLAttributes<HTMLDivElement>

const StaticsCard = ({ className, ...props }: Props) => {
  return (
    <Card className={cn('h-44 p-6', className)} {...props}>
      <div className="flex items-center pr-2.5">
        <IndianRupee className="text-icon h-7 w-7" />
        <p className="text-lg font-semibold">Revenue</p>
      </div>

      <div className="flex items-end justify-between">
        <div className="">
          <h6 className="text-lg font-semibold">$45k+</h6>
          <p className="text-secondary-foreground text-sm">20% Increase</p>
        </div>

        <div className="h-[100px] w-full max-w-[150px]">
          <ActionlessAreaChart
            height={110}
            colors={['hsl(var(--primary))']}
            chartCategories={['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri']}
            chartSeries={[{ name: 'Tasks', data: [0, 60, 90, 80, 100, 70, 80] }]}
          />
        </div>
      </div>
    </Card>
  )
}

export default StaticsCard
