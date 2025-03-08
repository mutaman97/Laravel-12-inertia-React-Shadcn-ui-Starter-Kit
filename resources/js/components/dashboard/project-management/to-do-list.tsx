import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Circle, MoreVertical } from 'lucide-react'
import { nanoid } from 'nanoid'
import { HTMLAttributes } from 'react'

type Props = HTMLAttributes<HTMLDivElement>

const ToDoList = ({ className, ...props }: Props) => {
  return (
    <Card className={cn('p-6', className)} {...props}>
      <p className="mb-3.5 text-lg font-medium">To-do List</p>

      <div className="flex flex-col gap-3.5">
        {activities.map(({ id, title }) => (
          <div key={id} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Circle className="text-icon-active h-2 w-2" />
              <p className="text-secondary-foreground text-sm font-medium">{title}</p>
            </div>

            <Button size="icon" variant="secondary" className="h-6 w-6">
              <MoreVertical className="text-icon h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>
    </Card>
  )
}

const activities = [
  {
    id: nanoid(),
    title: 'Design a Delivery App',
  },
  {
    id: nanoid(),
    title: 'Frontend Development',
  },
  {
    id: nanoid(),
    title: 'Backend Development',
  },
  {
    id: nanoid(),
    title: 'Responsive UI Design',
  },
]

export default ToDoList
