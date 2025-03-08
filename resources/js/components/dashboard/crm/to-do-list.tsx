import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Progress } from '@/components/ui/progress'
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'
import { cn } from '@/lib/utils'
import { MoreHorizontal, MoreVertical } from 'lucide-react'
import { nanoid } from 'nanoid'
import { HTMLAttributes } from 'react'

type Props = HTMLAttributes<HTMLDivElement>

const ToDoList = ({ className, ...props }: Props) => {
  return (
    <Card className={cn('', className)} {...props}>
      <div className="flex items-center justify-between p-6 pb-5">
        <p className="text-lg font-medium">Deal Status</p>

        <Button variant="secondary" size="icon" className="h-8 w-8 rounded-md">
          <MoreHorizontal className="text-icon h-4 w-4" />
        </Button>
      </div>

      <div className="flex items-center px-6 py-3">
        <p className="text-secondary-foreground pr-3 font-medium">75%</p>

        <Progress value={65} className="bg-icon-muted h-2 w-full [&>div]:bg-emerald-500" />
      </div>

      <Table>
        <TableBody>
          {todos.map(({ id, title }) => (
            <TableRow key={id} className="border-border text-sm font-medium">
              <TableCell className="px-6 py-2.5">
                <div className="flex items-center space-x-2">
                  <Checkbox id={id} />
                  <label htmlFor={id} className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    {title}
                  </label>
                </div>
              </TableCell>

              <TableCell className="px-6 py-2.5 text-right">
                <Button size="icon" variant="ghost" className="h-8 w-8 rounded-md">
                  <MoreVertical className="text-icon h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}

// CUSTOM DUMMY DATA SET
const todos = [
  { id: nanoid(), title: 'Design a poster for a company', complete: true },
  { id: nanoid(), title: 'Analyze Data', complete: false },
  { id: nanoid(), title: 'YouTube campaign', complete: false },
  { id: nanoid(), title: 'Assaign employee', complete: false },
]

export default ToDoList
