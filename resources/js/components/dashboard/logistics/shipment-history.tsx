import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { cn } from '@/lib/utils'
import { MoreHorizontal } from 'lucide-react'
import { nanoid } from 'nanoid'
import { HTMLAttributes } from 'react'

type Props = HTMLAttributes<HTMLDivElement>

const ShipmentHistory = ({ className, ...props }: Props) => {
  return (
    <Card className={cn('', className)} {...props}>
      <div className="flex items-center justify-between p-6 pb-3">
        <div>
          <p className="text-lg font-medium">Shipment History</p>
          <p className="text-secondary-foreground mt-2 text-sm">50+ Active Shipments</p>
        </div>

        <Button variant="secondary" size="icon" className="h-8 w-8 rounded-md">
          <MoreHorizontal className="text-icon h-4 w-4" />
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow className="text-secondary-foreground text-sm font-medium">
            <TableHead className="px-6 py-5">NAME & ID</TableHead>
            <TableHead className="px-6 py-5">CLIENTS NAME</TableHead>
            <TableHead className="px-6 py-5">ADDRESS</TableHead>
            <TableHead className="px-6 py-5 text-end">STATUS</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {DATA.map(item => (
            <TableRow key={item.id} className="border-border text-sm font-medium">
              <TableCell className="px-6 py-4">
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

              <TableCell className="px-6 py-4">{item.user.name}</TableCell>

              <TableCell className="px-6 py-4">{item.address}</TableCell>

              <TableCell className="px-6 py-4 text-end">
                <span
                  className={cn(
                    'bg-card text-icon-active rounded-sm px-1 py-0.5 text-xs',
                    item.status === 'Confirmed' ? 'text-emerald-500' : item.status === 'Rejected' && 'text-red-500'
                  )}
                >
                  {item.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}

// CUSTOM DUMMY DATA SET
const DATA = [
  {
    id: nanoid(),
    status: 'Delivered',
    status_type: 'success',
    title: 'Apple Watch',
    address: 'Rome, Italy.',
    image: '/assets/images/products/apple-watch.png',
    user: {
      name: 'Astole Banne',
      balance: 560,
      designation: 'Sales Manager',
      image: '/assets/avatars/Ellipse-1.png',
    },
  },
  {
    id: nanoid(),
    status: 'Shipping',
    status_type: 'primary',
    title: 'Nike Shoes',
    address: 'Bangkok, Singapore',
    image: '/assets/images/products/shoe-1.png',
    user: {
      name: 'Talon Abela',
      balance: 250.5,
      designation: 'Sales Manager',
      image: '/assets/avatars/Ellipse-2.png',
    },
  },
  {
    id: nanoid(),
    status: 'Delayed',
    status_type: 'error',
    title: 'Ribbon Glass',
    address: 'Paris, France',
    image: '/assets/images/products/sunglass.png',
    user: {
      name: 'Tofan Andy',
      balance: 150.25,
      designation: 'Sales Manager',
      image: '/assets/avatars/Ellipse-3.png',
    },
  },
  {
    id: nanoid(),
    status: 'Delivered',
    status_type: 'success',
    title: 'Apple Watch',
    address: 'New York, USA',
    image: '/assets/images/products/headset.png',
    user: {
      name: 'Jhon Ables',
      balance: 799.25,
      designation: 'Sales Manager',
      image: '/assets/avatars/Ellipse-4.png',
    },
  },
]

export default ShipmentHistory
