import ActionlessBarChart from '@/components/charts/actionless-bar-chart'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

const StatisticsCard2 = ({ className }: { className?: string }) => {
  return (
    <Card className={cn('flex h-[230px] flex-col justify-between', className)}>
      <div className="p-6 pb-0">
        <div className="mb-1 flex items-center gap-2">
          <h6 className="font-semibold">
            <span className="text-muted-foreground text-base font-medium">$</span>
            51,352
          </h6>
          <span className="bg-card rounded-sm px-1 py-0.5 text-xs font-medium text-emerald-500">+12.5%</span>
        </div>

        <p className="text-secondary-foreground text-sm">Average Daily Sales</p>
      </div>

      <ActionlessBarChart
        height={120}
        colors={['hsl(var(--icon-muted))']}
        chartCategories={['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri']}
        chartSeries={[{ name: 'Tasks', data: [70, 60, 90, 80, 100, 70, 80] }]}
      />
    </Card>
  )
}

export default StatisticsCard2
