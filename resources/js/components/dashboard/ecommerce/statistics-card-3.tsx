import { Card } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { cn } from '@/lib/utils'

const StatisticsCard3 = ({ className }: { className?: string }) => {
  return (
    <Card className={cn('flex h-[230px] flex-col justify-between p-6', className)}>
      <div>
        <div className="mb-1 flex items-center gap-2">
          <h6 className="font-semibold">
            <span className="text-muted-foreground text-base font-medium">$</span>
            51,352
          </h6>
          <span className="bg-card rounded-sm px-1 py-0.5 text-xs font-medium text-emerald-500">+12.5%</span>
        </div>

        <p className="text-secondary-foreground text-sm">Average Daily Sales</p>
      </div>

      <div className="pt-2 pb-3">
        <div className="mb-2 flex items-center justify-between text-sm">
          <p className="font-semibold">1,500 to Goal</p>
          <p className="text-secondary-foreground font-medium">75%</p>
        </div>

        <Progress value={65} className="bg-icon-muted h-2 w-full [&>div]:bg-emerald-500" />
      </div>
    </Card>
  )
}

export default StatisticsCard3
