import ActionlessBarChart from '@/components/charts/actionless-bar-chart'
import { cn } from '@/lib/utils'
import { DivProps } from 'react-html-props'

const CompletedRates = ({ className, ...props }: DivProps) => {
  return (
    <div className={cn('border-border rounded-2xl border shadow', className)} {...props}>
      <div className="p-6 pb-0">
        <div className="mb-1 flex items-center gap-2">
          <h6 className="text-xl font-semibold">55%</h6>
          <span className="bg-card rounded-sm px-1 py-0.5 text-xs font-medium text-emerald-500">+7.5%</span>
        </div>
        <p className="text-secondary-foreground text-sm">Completed Rates</p>
      </div>

      <ActionlessBarChart
        height={104}
        colors={['hsl(var(--primary))']}
        chartCategories={['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri']}
        chartSeries={[{ name: 'Tasks', data: [70, 60, 90, 80, 100, 70, 80] }]}
      />
    </div>
  )
}

export default CompletedRates
