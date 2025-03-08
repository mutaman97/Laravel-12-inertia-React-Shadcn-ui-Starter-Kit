import StarFull from '@/components/icons/star-full'
import StarHalf from '@/components/icons/star-half'
import { Card } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { cn } from '@/lib/utils'
import { nanoid } from 'nanoid'

const CustomerReview = ({ className }: { className?: string }) => {
  return (
    <Card className={cn('p-6', className)}>
      <div className="bg-card flex flex-col items-center gap-2 rounded-lg p-5">
        <div className="flex items-center justify-center text-yellow-500">
          <StarFull className="h-9 w-9" />
          <StarFull className="h-9 w-9" />
          <StarFull className="h-9 w-9" />
          <StarFull className="h-9 w-9" />
          <StarHalf className="h-9 w-9" />
        </div>
        <p className="text-xl font-extrabold">4.5/5</p>
        <p className="text-secondary-foreground text-sm font-medium">Total 650 customer review</p>
      </div>

      <div className="mt-8 flex flex-col gap-4">
        {reviews.map(item => (
          <div key={item.id} className="flex items-center justify-between">
            <div className="flex w-full max-w-[160px] items-center">
              <span className="text-secondary-foreground mr-0.5 text-sm whitespace-nowrap">{item.star} Star</span>
              <Progress value={item.star * 20} className="bg-icon-muted [&>div]:bg-icon-active h-2 w-full" />
            </div>

            <span className="text-secondary-foreground text-sm">{item.count}%</span>
          </div>
        ))}
      </div>
    </Card>
  )
}

const reviews = [
  { id: nanoid(), star: 5, count: 50 },
  { id: nanoid(), star: 4, count: 40 },
  { id: nanoid(), star: 3, count: 30 },
  { id: nanoid(), star: 2, count: 20 },
  { id: nanoid(), star: 1, count: 10 },
]

export default CustomerReview
