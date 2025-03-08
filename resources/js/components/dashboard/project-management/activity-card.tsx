import SingleDot from '@/components/icons/single-dot'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { FileText, Layers, Mail } from 'lucide-react'
import { nanoid } from 'nanoid'
import { HTMLAttributes } from 'react'

type Props = HTMLAttributes<HTMLDivElement>

const ActivityCard = ({ className, ...props }: Props) => {
  return (
    <Card className={cn('p-6', className)} {...props}>
      <p className="mb-5 text-lg font-medium">Activity Card</p>

      <div className="flex flex-col gap-3">
        {activities.map(({ id, Icon, title, subtitle, createdAt }) => (
          <div key={id} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <SingleDot className="text-icon-active h-2 w-2" />
              <div className="flex items-center gap-3">
                <Button size="icon" variant="secondary" className="h-9 w-9">
                  <Icon className="h-4 w-4" />
                </Button>
                <div>
                  <p className="text-sm font-medium">{title}</p>
                  <p className="text-secondary-foreground text-xs">{subtitle}</p>
                </div>
              </div>
            </div>

            <p className="text-secondary-foreground text-xs">{createdAt}</p>
          </div>
        ))}
      </div>
    </Card>
  )
}

const activities = [
  {
    id: nanoid(),
    Icon: Mail,
    title: 'John Smith sent email',
    subtitle: 'Got an email year sale',
    createdAt: '3 min ago',
  },
  {
    id: nanoid(),
    Icon: FileText,
    title: 'Gage updated a file',
    subtitle: 'Fixed some bugs and error',
    createdAt: '5 min ago',
  },
  {
    id: nanoid(),
    Icon: Layers,
    title: 'Taveen shared project',
    subtitle: 'A link is share attachment',
    createdAt: '10 min ago',
  },
]

export default ActivityCard
