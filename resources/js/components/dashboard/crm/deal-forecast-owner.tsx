import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { cn } from '@/lib/utils'
import { MoreHorizontal } from 'lucide-react'
import { nanoid } from 'nanoid'
import { HTMLAttributes } from 'react'

type Props = HTMLAttributes<HTMLDivElement>

const DealForecastOwner = ({ className, ...props }: Props) => {
  return (
    <Card className={cn('', className)} {...props}>
      <div className="flex items-center justify-between p-6 pb-2">
        <p className="text-lg font-medium">Deal Forecast by Owner</p>

        <Button variant="secondary" size="icon" className="h-8 w-8 rounded-md">
          <MoreHorizontal className="text-icon h-4 w-4" />
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow className="text-secondary-foreground border-none text-sm font-medium">
            <TableHead className="px-6 py-1">Owner</TableHead>
            <TableHead className="px-6 py-1 text-end">Deal Won</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {deals.map(item => (
            <TableRow key={item.id} className="border-none text-sm font-medium">
              <TableCell className="px-6 py-3">
                <div className="flex items-center gap-3">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src={item.user.image} alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{item.user.name}</p>
                    <p className="mt-1 text-xs">{item.user.designation}</p>
                  </div>
                </div>
              </TableCell>

              <TableCell className="px-6 py-3 text-end">${item.dealValue}</TableCell>
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
    dealValue: 203500,
    status: 'Deal won',
    status_type: 'success',
    company: 'Absternet LLC',
    user: {
      name: 'Astole Banne',
      designation: 'Sales Manager',
      image: '/assets/avatars/Ellipse-1.png',
    },
  },
  {
    id: nanoid(),
    dealValue: 283500,
    status: 'Stuck',
    status_type: 'error',
    company: 'Nike',
    user: {
      name: 'Lisa Bee',
      designation: 'Sales Manager',
      image: '/assets/avatars/Ellipse-2.png',
    },
  },
  {
    id: nanoid(),
    dealValue: 243500,
    status: 'Pending',
    status_type: 'warning',
    company: 'Absternet LLC',
    user: {
      name: 'Stuward Canne',
      designation: 'Sales Manager',
      image: '/assets/avatars/Ellipse-3.png',
    },
  },
]

export default DealForecastOwner
