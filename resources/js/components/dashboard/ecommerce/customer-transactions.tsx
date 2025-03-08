import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { MoreHorizontal, Search } from 'lucide-react'
import { nanoid } from 'nanoid'

const CustomerTransactions = ({ className }: { className?: string }) => {
  return (
    <Card className={className}>
      <div className="flex flex-col items-start gap-8 p-6 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
        <p className="text-lg font-medium">Top Products</p>

        <div className="flex w-full items-center justify-between gap-2 lg:w-auto">
          <div className="relative w-full max-w-[216px]">
            <Search className="text-icon absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
            <Input
              type="text"
              placeholder="Search Question"
              className="placeholder:text-muted-foreground bg-card h-9 rounded-md border-none py-1.5 pr-3 pl-9"
            />
          </div>
          <Button size="icon" variant="secondary" className="h-9 w-9 rounded-md">
            <MoreHorizontal className="text-icon h-4 w-4" />
          </Button>
        </div>
      </div>

      <Table className="mt-3">
        <TableHeader>
          <TableRow className="text-secondary-foreground text-sm font-medium">
            <TableHead className="px-6 py-3">TRANSACTION</TableHead>
            <TableHead className="px-6 py-3">PRICE</TableHead>
            <TableHead className="px-6 py-3">SOLD</TableHead>
            <TableHead className="px-6 py-3 text-end">SALES</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {products.map(item => (
            <TableRow key={item.id} className="border-border text-secondary-foreground text-sm font-medium">
              <TableCell className="px-6 py-5">
                <div className="flex items-center gap-3">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src={item.image} alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-xs">{item.id.substring(0, 10)}</p>
                  </div>
                </div>
              </TableCell>

              <TableCell className="px-6 py-5">{item.price}</TableCell>
              <TableCell className="px-6 py-5">${item.totalSold}</TableCell>
              <TableCell className="px-6 py-5 text-end">{item.sales}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}

// CUSTOM DUMMY DATA SET
const products = [
  {
    id: nanoid(),
    price: 1799,
    sales: 17689,
    totalSold: 2389,
    title: 'Apple Watch',
    image: '/assets/images/products/apple-watch.png',
  },
  {
    id: nanoid(),
    price: 739,
    sales: 62397,
    totalSold: 6698,
    title: 'Nike Shoes',
    image: '/assets/images/products/shoe-1.png',
  },
  {
    id: nanoid(),
    price: 245,
    sales: 7658,
    totalSold: 300,
    title: 'Ribbon Glass',
    image: '/assets/images/products/sunglass.png',
  },
  {
    id: nanoid(),
    price: 139,
    sales: 6658,
    totalSold: 2389,
    title: 'Apple Watch',
    image: '/assets/images/products/headset.png',
  },
]

export default CustomerTransactions
