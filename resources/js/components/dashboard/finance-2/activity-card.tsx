import PieChart from '@/components/charts/pie-chart'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { MoreHorizontal } from 'lucide-react'

const ActivityCard = ({ className }: { className?: string }) => {
  return (
    <Card className={cn('pb-6', className)}>
      <div className="flex items-center justify-between p-6">
        <p className="text-lg font-medium">Top Activity</p>

        <Button variant="secondary" size="icon" className="h-8 w-8 rounded-md">
          <MoreHorizontal className="text-icon h-4 w-4" />
        </Button>
      </div>

      <PieChart
        height={290}
        colors={['hsl(var(--secondary-foreground))', 'hsl(var(--muted-foreground))', 'hsl(var(--icon-muted))']}
        chartSeries={[55, 45, 33]}
        chartCategories={['Asia', 'Europe', 'Africa']}
      />
    </Card>
  )
}

export default ActivityCard
