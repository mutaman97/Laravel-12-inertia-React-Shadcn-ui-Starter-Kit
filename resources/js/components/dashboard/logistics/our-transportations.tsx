import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'
import { cn } from '@/lib/utils'
import { MoreHorizontal } from 'lucide-react'
import { nanoid } from 'nanoid'
import { HTMLAttributes } from 'react'

type Props = HTMLAttributes<HTMLDivElement>

const OurTransportations = ({ className, ...props }: Props) => {
  return (
    <Card className={cn('', className)} {...props}>
      <div className="flex justify-between p-6 pb-5">
        <div>
          <p className="mb-1 text-lg font-medium">Our Transportations</p>
          <p className="text-secondary-foreground text-xs">Total 5,200 vehicles</p>
        </div>

        <Button variant="secondary" size="icon" className="h-8 w-8 rounded-md">
          <MoreHorizontal className="text-icon h-4 w-4" />
        </Button>
      </div>

      <Table>
        <TableBody>
          {DATA.map(item => (
            <TableRow key={item.id} className="border-none text-sm font-medium">
              <TableCell className="px-6 py-3.5">
                <div className="flex items-center gap-3">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src={item.image} alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="mt-1 text-xs font-normal">{item.total}</p>
                  </div>
                </div>
              </TableCell>

              <TableCell className="px-6 py-3.5 text-end">
                <div>
                  <p className="font-semibold">{item.weight}</p>
                  <p className="text-muted-foreground mt-1 text-xs font-normal">Tons</p>
                </div>
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
    title: 'Ships',
    weight: 50368258,
    total: '500 ships',
    image: '/assets/images/transportation/1.png',
  },
  {
    id: nanoid(),
    title: 'Planes',
    weight: 2336569,
    total: '25 planes',
    image: '/assets/images/transportation/2.png',
  },
  {
    id: nanoid(),
    title: 'Trucks',
    weight: 36566547,
    total: '2500 Trucks',
    image: '/assets/images/transportation/3.png',
  },
  {
    id: nanoid(),
    title: 'Trains',
    weight: 10236482,
    total: '1000 trains',
    image: '/assets/images/transportation/4.png',
  },
]

export default OurTransportations
