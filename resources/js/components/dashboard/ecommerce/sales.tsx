import BarChart from '@/components/charts/bar-chart'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { MoreHorizontal } from 'lucide-react'

const Sales = ({ className }: { className?: string }) => {
  return (
    <Card className={cn('', className)}>
      <div className="flex items-center justify-between p-6 pb-0">
        <p className="text-lg font-medium">Sales</p>

        <Button variant="secondary" size="icon" className="h-8 w-8 rounded-md">
          <MoreHorizontal className="text-icon h-4 w-4" />
        </Button>
      </div>

      <div className="pr-3">
        <BarChart
          height={320}
          columnRadius={10}
          columnWidth="30%"
          colors={['hsl(var(--icon-muted))', 'hsl(var(--primary))']}
          chartCategories={['SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI']}
          chartSeries={[
            {
              name: 'Sales',
              data: [28000, 13000, 18000, 22000, 11000, 30000, 20000],
            },
          ]}
        />
      </div>
    </Card>
  )
}

export default Sales
