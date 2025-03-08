import ActionlessDonutChart from '@/components/charts/actionless-donut-chart'
import Chrome from '@/components/icons/chrome'
import Opera from '@/components/icons/opera'
import SingleDot from '@/components/icons/single-dot'
import Yahoo from '@/components/icons/yahoo'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'
import { cn } from '@/lib/utils'
import { MoreHorizontal } from 'lucide-react'
import { nanoid } from 'nanoid'
import { DivProps, SVGProps } from 'react-html-props'

const SessionBrowser = ({ className, ...props }: DivProps) => {
  return (
    <div className={cn('border-border rounded-2xl border shadow', className)} {...props}>
      <div className="flex items-start justify-between p-6 pb-7">
        <p className="text-lg font-medium">Session by browser</p>

        <Button variant="secondary" size="icon" className="h-8 w-8">
          <MoreHorizontal className="text-icon h-4 w-4" />
        </Button>
      </div>

      <ActionlessDonutChart
        height={160}
        colors={['#10B981', '#334155', '#94A3B8']}
        labels={['Chrome', 'Opera', 'Yahoo!']}
        chartSeries={[50, 30, 20]}
      />

      <Table className="mt-7 mb-6">
        <TableBody>
          {visitors.map(invoice => (
            <TableRow key={invoice.id} className="border-border text-sm font-medium">
              <TableCell className="flex items-center px-6 py-3.5">
                <invoice.Icon className="mr-3 h-5 w-5" />
                <p className="text-secondary-foreground text-sm font-medium">{invoice.title}</p>
              </TableCell>

              <TableCell className="px-6 py-3.5 text-center">
                <div className="flex items-center">
                  <SingleDot
                    className={cn(
                      'mr-2 h-2 w-2',
                      invoice.title === 'Chrome'
                        ? 'text-primary'
                        : invoice.title === 'Opera'
                          ? 'text-emerald-500'
                          : invoice.title === 'Yahoo'
                            ? 'text-icon-muted'
                            : 'text-card'
                    )}
                  />
                  {invoice.rate}%
                </div>
              </TableCell>
              <TableCell className={cn('px-6 py-3.5 text-end', invoice.visit > 0 ? 'text-emerald-500' : 'text-red-500')}>{invoice.visit}%</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

interface visitorsProps {
  id: string
  title: string
  rate: number
  visit: number
  Icon: (props: SVGProps) => JSX.Element
}

const visitors: visitorsProps[] = [
  {
    id: nanoid(),
    Icon: Chrome,
    title: 'Chrome',
    rate: 60,
    visit: 3.19,
  },
  {
    id: nanoid(),
    Icon: Opera,
    title: 'Opera',
    rate: 10,
    visit: -1.98,
  },
  {
    id: nanoid(),
    Icon: Yahoo,
    title: 'Yahoo',
    rate: 30,
    visit: 2.23,
  },
]

export default SessionBrowser
