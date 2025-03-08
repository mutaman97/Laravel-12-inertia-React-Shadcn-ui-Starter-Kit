import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { cn } from '@/lib/utils'
import { format } from 'date-fns'
import { MoreHorizontal } from 'lucide-react'
import { nanoid } from 'nanoid'

const RecentOrders = ({ className }: { className?: string }) => {
  return (
    <Card className={className}>
      <div className="flex items-center justify-between p-6">
        <p className="text-lg font-medium">Recent Orders</p>

        <Button variant="secondary" size="icon" className="h-8 w-8 rounded-md">
          <MoreHorizontal className="text-icon h-4 w-4" />
        </Button>
      </div>

      <Table className="mt-3">
        <TableHeader>
          <TableRow className="text-secondary-foreground text-sm font-medium">
            <TableHead className="px-6 py-3">METHOD</TableHead>
            <TableHead className="px-6 py-3">CREATED</TableHead>
            <TableHead className="px-6 py-3">TOTAL</TableHead>
            <TableHead className="px-6 py-3 text-end">STATUS</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {orders.map(item => (
            <TableRow key={item.id} className="border-border text-secondary-foreground text-sm font-medium">
              <TableCell className="px-6 py-5">
                <div className="flex items-center gap-3">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src={item.payment.image} alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{item.id.substring(0, 10)}</p>
                    <p className="text-xs">Paid by {item.payment.type}</p>
                  </div>
                </div>
              </TableCell>

              <TableCell className="px-6 py-5">{format(new Date(item.createdAt), 'dd MMM, yyyy')}</TableCell>

              <TableCell className="px-6 py-5">${item.total}</TableCell>

              <TableCell className="px-6 py-5 text-end">
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
const orders = [
  {
    id: nanoid(),
    total: 678.5,
    status: 'Pending',
    status_type: 'warning',
    createdAt: Date.now() - 7 * 60 * 1000,
    payment: { type: 'PayPal', image: '/assets/svg/paypal.svg' },
  },
  {
    id: nanoid(),
    total: 165.58,
    status: 'Shipped',
    status_type: 'success',
    createdAt: Date.now() - 8 * 60 * 1000,
    payment: { type: 'Card', image: '/assets/svg/mastercard.svg' },
  },
  {
    id: nanoid(),
    total: 463.25,
    status: 'Confirmed',
    status_type: 'primary',
    createdAt: Date.now() - 9 * 60 * 1000,
    payment: { type: 'Skrill', image: '/assets/svg/skrill.svg' },
  },
  {
    id: nanoid(),
    total: 363.25,
    status: 'Rejected',
    status_type: 'error',
    createdAt: Date.now() - 10 * 60 * 1000,
    payment: { type: 'Visa Card', image: '/assets/svg/visa.svg' },
  },
]

export default RecentOrders
