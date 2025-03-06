import ActionlessAreaChart from '@/components/charts/actionless-area-chart'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { MoreHorizontal } from 'lucide-react'
import { HTMLAttributes } from 'react'

type Props = HTMLAttributes<HTMLDivElement>

const CallDuration = ({ className, ...props }: Props) => {
  return (
    <Card className={cn('h-[316px] overflow-hidden', className)} {...props}>
      <div className="flex items-center justify-between p-6">
        <p className="text-lg font-medium">Avg. Call Duration</p>

        <Button variant="secondary" size="icon" className="h-8 w-8 rounded-md">
          <MoreHorizontal className="text-icon h-4 w-4" />
        </Button>
      </div>

      <div className="px-6 pt-1">
        <h6 className="text-xl font-semibold">41,352</h6>
        <p className="text-secondary-foreground text-sm">Completed Goals</p>
      </div>

      <ActionlessAreaChart
        height={200}
        colors={['hsl(var(--primary))']}
        chartCategories={['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri']}
        chartSeries={[{ name: 'Tasks', data: [70, 60, 90, 80, 100, 70, 80] }]}
      />
    </Card>
  )
}

export default CallDuration
