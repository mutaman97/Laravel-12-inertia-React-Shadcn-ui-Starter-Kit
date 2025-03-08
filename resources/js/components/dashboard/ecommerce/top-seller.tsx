import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { MoreHorizontal } from 'lucide-react'
import { nanoid } from 'nanoid'

const TopSeller = ({ className }: { className?: string }) => {
  return (
    <Card className={className}>
      <div className="flex items-center justify-between p-6">
        <p className="text-lg font-medium">Customer Transactions</p>

        <Button variant="secondary" size="icon" className="h-8 w-8 rounded-md">
          <MoreHorizontal className="text-icon h-4 w-4" />
        </Button>
      </div>

      <Table className="mt-3">
        <TableHeader>
          <TableRow className="text-secondary-foreground border-none text-sm font-medium">
            <TableHead className="px-6 py-3">Profile</TableHead>
            <TableHead className="px-6 py-3 text-end">Item Sold</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {sellers.map(item => (
            <TableRow key={item.id} className="text-secondary-foreground border-none text-sm font-medium">
              <TableCell className="px-6 py-5">
                <div className="flex items-center gap-3">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src={item.user.image} alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-xs">{item.id.substring(0, 10)}</p>
                    <p className="font-semibold">{item.user.name}</p>
                  </div>
                </div>
              </TableCell>

              <TableCell className="px-6 py-5 text-end">{item.totalSold}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}

// CUSTOM DUMMY DATA SET
const sellers = [
  {
    id: nanoid(),
    totalSold: 13440,
    totalAmount: 350000,
    country: '/static/flags/usa-round.png',
    user: {
      name: 'Gage Paquette',
      image: '/assets/avatars/Ellipse-1.png',
    },
  },
  {
    id: nanoid(),
    totalSold: 10240,
    totalAmount: 148000,
    country: '/static/flags/uk-round.png',
    user: {
      name: 'Lara Harvey',
      image: '/assets/avatars/Ellipse-2.png',
    },
  },
  {
    id: nanoid(),
    totalSold: 10240,
    totalAmount: 148000,
    country: '/static/flags/germany-round.png',
    user: { name: 'Evan Scott', image: '/assets/avatars/Ellipse-3.png' },
  },
  {
    id: nanoid(),
    totalSold: 10240,
    totalAmount: 148000,
    country: '/static/flags/spain-round.png',
    user: {
      name: 'Benja Johnston',
      image: '/assets/avatars/Ellipse-4.png',
    },
  },
]

export default TopSeller
