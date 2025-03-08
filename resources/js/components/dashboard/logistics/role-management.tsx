import UserCog from '@/components/icons/user-cog'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'
import { cn } from '@/lib/utils'
import { MoreHorizontal } from 'lucide-react'
import { nanoid } from 'nanoid'
import { HTMLAttributes } from 'react'

type Props = HTMLAttributes<HTMLDivElement>

const RoleManagement = ({ className, ...props }: Props) => {
  return (
    <Card className={cn('', className)} {...props}>
      <div className="flex justify-between p-6 pb-5">
        <div>
          <p className="mb-1 text-lg font-medium">Role Management</p>
          <p className="text-secondary-foreground text-xs">The important 5 logistics role</p>
        </div>

        <Button variant="secondary" size="icon" className="h-8 w-8 rounded-md">
          <MoreHorizontal className="text-icon h-4 w-4" />
        </Button>
      </div>

      <Table>
        <TableBody>
          {deals.map(item => (
            <TableRow key={item.id} className="border-none text-sm font-medium">
              <TableCell className="px-6 py-3.5">
                <div className="flex items-center gap-3">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src={item.image} alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="mt-1 text-xs">{item.subtitle}</p>
                  </div>
                </div>
              </TableCell>

              <TableCell className="px-6 py-3.5 text-end">
                <Button size="icon" variant="secondary" className="h-8 w-8 rounded-md">
                  <UserCog className="text-icon h-4 w-4" />
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
const deals = [
  {
    id: nanoid(),
    title: 'Material sourcing',
    image: '/assets/avatars/Ellipse-1.png',
    subtitle: 'Material sourcing involves',
  },
  {
    id: nanoid(),
    title: 'Transportation',
    image: '/assets/avatars/Ellipse-2.png',
    subtitle: 'The best carrier based cost',
  },
  {
    id: nanoid(),
    title: 'Order fulfillment',
    image: '/assets/avatars/Ellipse-3.png',
    subtitle: 'The process comprise order',
  },
  {
    id: nanoid(),
    title: 'Warehousing',
    image: '/assets/avatars/Ellipse-4.png',
    subtitle: 'Planners consider warehouse',
  },
  {
    id: nanoid(),
    title: 'Supply management',
    image: '/assets/avatars/Ellipse-5.png',
    subtitle: 'Logistics is an important link',
  },
]

export default RoleManagement
