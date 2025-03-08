import LineChart from '@/components/charts/line-chart'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { MoreHorizontal } from 'lucide-react'
import { DivProps } from 'react-html-props'

const AveragePositions = ({ className, ...props }: DivProps) => {
  return (
    <div className={cn('border-border rounded-2xl border shadow', className)} {...props}>
      <div className="mb-[30px] flex items-start justify-between p-6">
        <div>
          <div className="flex items-center gap-2">
            <h6 className="font-semibold">5.8</h6>
            <p className="text-sm font-medium">+2.5%</p>
          </div>
          <p className="text-secondary-foreground text-sm">Average Positions</p>
        </div>

        <Button variant="secondary" size="icon" className="h-8 w-8">
          <MoreHorizontal className="text-icon h-4 w-4" />
        </Button>
      </div>

      <LineChart
        colors={['hsl(var(--primary))']}
        chartSeries={[{ name: 'Sales', data: [6, 15, 10, 17] }]}
        chartCategories={['Sep 20', 'Sep 21', 'Sep 22', 'Sep 23']}
      />
    </div>
  )
}

export default AveragePositions
