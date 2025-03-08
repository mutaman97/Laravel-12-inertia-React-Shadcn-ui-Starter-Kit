import DonutChart from '@/components/charts/donut-chart'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { MoreHorizontal } from 'lucide-react'
import { HTMLAttributes } from 'react'

type Props = HTMLAttributes<HTMLDivElement>

const DealType = ({ className, ...props }: Props) => {
  return (
    <Card className={cn('', className)} {...props}>
      <div className="flex items-center justify-between p-6 pb-3">
        <p className="text-lg font-medium">Deal Type</p>

        <Button variant="secondary" size="icon" className="h-8 w-8 rounded-md">
          <MoreHorizontal className="text-icon h-4 w-4" />
        </Button>
      </div>

      <DonutChart
        height={280}
        legend={true}
        colors={['hsl(var(--icon))', 'hsl(var(--icon-muted))', 'hsl(var(--icon-active))']}
        dataIndicator={false}
        labels={['Loss', 'Won', 'Pending']}
        chartSeries={[30, 30, 40]}
      />
    </Card>
  )
}

export default DealType
