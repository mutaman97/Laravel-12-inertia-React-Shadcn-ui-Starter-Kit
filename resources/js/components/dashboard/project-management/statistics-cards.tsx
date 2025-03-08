import ChartPie from '@/components/icons/chart-pie'
import ClipboardCheck from '@/components/icons/clipboard-check'
import LightningBolt from '@/components/icons/lightning-bolt'
import PencilAlt from '@/components/icons/pencil-alt'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { nanoid } from 'nanoid'
import { DivProps, SVGProps } from 'react-html-props'

const StatisticsCards = ({ className, ...props }: DivProps) => {
  return (
    <div className={cn(className, 'grid grid-cols-2 gap-7')} {...props}>
      {statistics.map(({ id, title, count, Icon }) => (
        <Card key={id} className="p-6">
          <Button size="icon" variant="secondary" className="h-9 w-9">
            <Icon className="text-icon h-4 w-4" />
          </Button>

          <h6 className="mt-6 font-semibold">{count}</h6>
          <p className="text-secondary-foreground text-xs">{title}</p>
        </Card>
      ))}
    </div>
  )
}

interface statisticType {
  id: string
  title: string
  count: string
  Icon: (props: SVGProps) => JSX.Element
}

const statistics: statisticType[] = [
  { id: nanoid(), title: 'Task Completed', count: '36', Icon: ChartPie },
  { id: nanoid(), title: 'New Task Assigned', count: '26', Icon: PencilAlt },
  { id: nanoid(), title: 'Obj. Completed', count: '12', Icon: LightningBolt },
  {
    id: nanoid(),
    title: 'Project Completed',
    count: '60%',
    Icon: ClipboardCheck,
  },
]

export default StatisticsCards
