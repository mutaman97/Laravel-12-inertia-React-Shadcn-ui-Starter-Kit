import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { MoreHorizontal } from 'lucide-react'

const ActivityCard = ({ className }: { className?: string }) => {
  return (
    <Card className={cn('', className)}>
      <div className="flex items-center justify-between p-6">
        <p className="text-lg font-medium">Top Activity</p>

        <Button variant="secondary" size="icon" className="h-8 w-8 rounded-md">
          <MoreHorizontal className="text-icon h-4 w-4" />
        </Button>
      </div>

      <div className="relative mx-auto h-[280px] w-full max-w-[250px] py-1">
        <div className="bg-secondary-foreground border-border absolute top-0 right-0 flex h-full max-h-[186px] w-full max-w-[186px] flex-col items-center justify-center rounded-full border">
          <p className="font-medium">$17,25,258.69</p>
          <p className="text-xs">Asia</p>
        </div>

        <div className="bg-icon-muted border-border absolute bottom-12 left-0 flex h-full max-h-[124px] w-full max-w-[124px] flex-col items-center justify-center rounded-full border">
          <p className="font-medium">$2,525.25</p>
          <p className="text-secondary-foreground text-xs">Europe</p>
        </div>

        <div className="bg-muted-foreground border-border absolute bottom-6 left-1/2 flex h-full max-h-[86px] w-full max-w-[86px] -translate-x-1/2 flex-col items-center justify-center rounded-full border">
          <p className="font-medium">$525</p>
          <p className="text-xs">Africa</p>
        </div>
      </div>
    </Card>
  )
}

export default ActivityCard
