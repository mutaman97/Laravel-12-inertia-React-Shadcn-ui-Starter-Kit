import AreaChart from '@/components/charts/area-chart'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { MoreHorizontal } from 'lucide-react'

const Investment = ({ className }: { className?: string }) => {
  return (
    <Card className={cn('', className)}>
      <div className="flex items-center justify-between p-6 pb-0">
        <p className="text-lg font-medium">Investment</p>

        <Button variant="secondary" size="icon" className="h-8 w-8 rounded-md">
          <MoreHorizontal className="text-icon h-4 w-4" />
        </Button>
      </div>

      <div className="pr-3">
        <AreaChart
          height={290}
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

export default Investment
