import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { cn } from '@/lib/utils'

const InstalmentCard = ({ className }: { className?: string }) => {
  return (
    <Card className={cn('p-6', className)}>
      <div className="flex items-center justify-between">
        <p className="text-lg font-medium">Instalment</p>
        <Button variant="link">View All</Button>
      </div>

      <div className="pt-2 pb-3">
        <p className="text-secondary-foreground text-sm">Electricity Instalments</p>

        <Progress value={65} className="bg-icon-muted [&>div]:bg-icon-active h-2 w-full" />
      </div>

      <div className="flex items-center justify-between text-sm">
        <p>Collected</p>
        <p>
          <span className="text-secondary-foreground">$200.00</span>/$300.00
        </p>
      </div>
    </Card>
  )
}

export default InstalmentCard
