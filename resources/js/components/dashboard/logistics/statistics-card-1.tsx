import { Card } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

type Props = HTMLAttributes<HTMLDivElement>

const StatisticsCard1 = ({ className, ...props }: Props) => {
  return (
    <Card className={cn('bg-primary-foreground flex h-[204px] flex-col justify-between p-6', className)} {...props}>
      <div>
        <div className="mb-1 flex items-center gap-2">
          <h6 className="text-2xl font-semibold">$50K</h6>
          <span className="bg-card rounded-sm px-1 py-0.5 text-xs font-medium text-emerald-500">+4.67%</span>
        </div>

        <p className="text-secondary-foreground text-sm">Total Online Sales</p>
      </div>

      <div className="">
        <p className="mb-2 text-xs font-semibold">$100K to Goal</p>

        <Progress value={65} className="bg-icon-muted [&>div]:bg-icon-active h-2 w-full" />
      </div>
    </Card>
  )
}

export default StatisticsCard1
