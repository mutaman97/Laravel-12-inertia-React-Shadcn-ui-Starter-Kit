import AreaChart from '@/components/charts/area-chart'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { MoreHorizontal } from 'lucide-react'
import { HTMLAttributes } from 'react'

type Props = HTMLAttributes<HTMLDivElement>

const CompanyProgress = ({ className, ...props }: Props) => {
  return (
    <Card className={cn('', className)} {...props}>
      <div className="flex items-center justify-between p-6">
        <p className="text-lg font-medium">Company Progress</p>

        <Button variant="secondary" size="icon" className="h-8 w-8 rounded-md">
          <MoreHorizontal className="text-icon h-4 w-4" />
        </Button>
      </div>

      <div className="flex flex-wrap items-center gap-8 px-6 py-4">
        <div>
          <div className="mb-1 flex items-center gap-2">
            <h6 className="text-xl font-semibold">$18,469</h6>
            <span className="bg-card rounded-sm px-1 py-0.5 text-xs font-medium text-red-500">-2.37%</span>
          </div>
          <p className="text-secondary-foreground text-start text-sm">This month</p>
        </div>

        <div>
          <div className="mb-1 flex items-center gap-2">
            <h6 className="text-xl font-semibold">22,356</h6>
            <span className="bg-card rounded-sm px-1 py-0.5 text-xs font-medium text-emerald-500">+4.67%</span>
          </div>
          <p className="text-secondary-foreground text-start text-sm">Last month</p>
        </div>
      </div>

      <div className="pr-3">
        <AreaChart
          height={260}
          colors={['hsl(var(--primary))']}
          chartSeries={[
            {
              name: 'Sales',
              data: [8000, 4000, 4500, 17000, 18000, 40000, 18000, 10000, 6000, 20000],
            },
          ]}
          chartCategories={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
        />
      </div>
    </Card>
  )
}

export default CompanyProgress
