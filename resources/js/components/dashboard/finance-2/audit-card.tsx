import RadialBarChart from '@/components/charts/radial-bar-chart'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { cn } from '@/lib/utils'
import { MoreHorizontal } from 'lucide-react'

const AuditCard = ({ className }: { className?: string }) => {
  return (
    <Card className={cn('p-6', className)}>
      <div className="flex items-center justify-between">
        <p className="text-lg font-medium">Audit</p>

        <Button variant="secondary" size="icon" className="h-8 w-8 rounded-md">
          <MoreHorizontal className="text-icon h-4 w-4" />
        </Button>
      </div>

      <RadialBarChart bgColor="hsl(var(--icon-active))" colors={['hsl(var(--icon-active))']} chartSeries={[70]} />

      <div>
        <p className="text-xl font-medium">50%</p>
        <p className="text-secondary-foreground mb-1 text-sm">Access Grant</p>

        <Progress value={65} className="bg-icon-muted [&>div]:bg-icon-active h-2 w-full" />
      </div>
    </Card>
  )
}

export default AuditCard
