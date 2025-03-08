import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'
import { cn } from '@/lib/utils'
import { MoreHorizontal } from 'lucide-react'
import { nanoid } from 'nanoid'
import { HTMLAttributes } from 'react'

type Props = HTMLAttributes<HTMLDivElement>

const VisitsByCountry = ({ className, ...props }: Props) => {
  return (
    <Card className={cn('', className)} {...props}>
      <div className="flex justify-between p-6 pb-5">
        <div>
          <p className="mb-1 text-lg font-medium">Visits by country</p>
          <p className="text-secondary-foreground text-xs">Total 200 countries visits</p>
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
                    <p className="font-semibold">{item.name}</p>
                    <p className="mt-1 text-xs font-normal">{item.subtitle}</p>
                  </div>
                </div>
              </TableCell>

              <TableCell className="px-6 py-3.5 text-end">
                <div>
                  <p className="font-semibold">{item.total}</p>
                  <p className={cn('mt-1 text-xs font-normal', item.percentage < 0 ? 'text-red-500' : 'text-emerald-500')}>{item.percentage}</p>
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
    name: 'USA',
    total: 68258,
    percentage: 4.67,
    subtitle: '30% visits',
    image: '/assets/images/flags/usa-round.png',
  },
  {
    id: nanoid(),
    name: 'UK',
    total: 50683,
    percentage: 2.59,
    subtitle: '20% visits',
    image: '/assets/images/flags/uk-round.png',
  },
  {
    id: nanoid(),
    name: 'Germany',
    total: 62053,
    percentage: -1.18,
    subtitle: '28% visits',
    image: '/assets/images/flags/germany-round.png',
  },
  {
    id: nanoid(),
    name: 'Spain',
    total: 40369,
    percentage: -2.98,
    subtitle: '18% visits',
    image: '/assets/images/flags/spain-round.png',
  },
  {
    id: nanoid(),
    total: 3258,
    name: 'China',
    percentage: 1.22,
    subtitle: '4% visits',
    image: '/assets/images/flags/china-round.png',
  },
]
export default VisitsByCountry
