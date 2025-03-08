import worldMap from '@/__fakeData__/map/worldMap.json'
import SingleDot from '@/components/icons/single-dot'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { cn } from '@/lib/utils'
import { VectorMap } from '@south-paw/react-vector-maps'
import { MoreHorizontal } from 'lucide-react'
import { DivProps } from 'react-html-props'

const SalesCountry = ({ className, ...props }: DivProps) => {
  return (
    <div className={cn('border-border rounded-2xl border p-6 shadow', className)} {...props}>
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h6 className="mb-2 text-lg font-medium">Sales by Country</h6>
          <p className="text-secondary-foreground text-sm">Average Positions</p>
        </div>

        <Button variant="secondary" size="icon" className="h-8 w-8">
          <MoreHorizontal className="text-icon h-4 w-4" />
        </Button>
      </div>

      <div className="flex flex-col items-center gap-9 lg:flex-row">
        <div className="flex w-full flex-col gap-6 lg:w-[270px]">
          {queries.map((item, ind) => (
            <div
              key={ind}
              className="group text-secondary-foreground hover:text-primary flex w-full items-center justify-between text-sm font-medium lg:w-[270px]"
            >
              <div className="flex w-[100px] items-center">
                <SingleDot className="mr-2 h-2 w-2" />
                <span>{item.name}</span>
              </div>

              <div className="flex w-[calc(100%-100px)] items-center justify-between">
                <Progress value={item.progress} className="bg-card [&>div]:bg-icon-muted group-hover:[&>div]:bg-primary h-2 w-[calc(100%-40px)]" />

                <p className="w-10 text-right">{item.progress}%</p>
              </div>
            </div>
          ))}
        </div>

        <div className="vectorMap relative h-full w-full">
          <VectorMap {...worldMap} />
        </div>
      </div>
    </div>
  )
}

const queries = [
  { name: 'Australia', progress: 72 },
  { name: 'USA', progress: 62 },
  { name: 'RSA', progress: 92 },
  { name: 'Brazil', progress: 7 },
  { name: 'Japan', progress: 40 },
  { name: 'UAE', progress: 55 },
  { name: 'Thailand', progress: 50 },
]

export default SalesCountry
