import ActionlessLineChart from '@/components/charts/actionless-line-chart'
import Dribble from '@/components/icons/dribble'
import Linkedin from '@/components/icons/linkedin'
import Twitter from '@/components/icons/twitter'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { cn } from '@/lib/utils'
import { MoreHorizontal } from 'lucide-react'
import { nanoid } from 'nanoid'
import { DivProps, SVGProps } from 'react-html-props'

const Visitor = ({ className, ...props }: DivProps) => {
  return (
    <div className={cn('border-border rounded-2xl border shadow', className)} {...props}>
      <div className="flex items-start justify-between p-6 pb-2">
        <div>
          <div className="flex items-center gap-2">
            <h6 className="font-semibold">1,352</h6>
            <span className="bg-card rounded-sm px-1 py-0.5 text-xs font-medium text-emerald-500">+2.5%</span>
          </div>
          <p className="text-secondary-foreground text-sm">Average Positions</p>
        </div>

        <Button variant="secondary" size="icon" className="h-8 w-8">
          <MoreHorizontal className="text-icon h-4 w-4" />
        </Button>
      </div>

      <Table className="mb-6">
        <TableHeader>
          <TableRow className="text-secondary-foreground text-sm font-medium">
            <TableHead className="h-[76px] px-6">REFERRAL SOURCE</TableHead>
            <TableHead className="h-[76px] px-6 text-center">BOUNDCE RATE (%)</TableHead>
            <TableHead className="h-[76px] px-6 text-center">VISIT</TableHead>
            <TableHead className="h-[76px] px-6 text-right">CHART</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {visitors.map(invoice => (
            <TableRow key={invoice.id} className="border-border text-sm font-medium">
              <TableCell className="flex items-center px-5 py-5">
                <invoice.Icon />
                <div className="ml-3">
                  <p className="font-semibold">{invoice.title}</p>
                  <p className="text-secondary-foreground text-xs">{invoice.category}</p>
                </div>
              </TableCell>

              <TableCell className="px-5 py-5 text-center">{invoice.rate}%</TableCell>
              <TableCell className="px-5 py-5 text-center">{invoice.visit}</TableCell>

              <TableCell className="max-w-[60px] px-5 py-5">
                <ActionlessLineChart height={20} colors={['#10B981']} strokeWidth={1} chartSeries={invoice.chart.series} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

// REACT CHART CATEGORIES LABEL
const chartSeries = [{ name: 'Tasks', data: [0, 30, 16, 70, 26, 30, 12] }]

interface visitorsProps {
  id: string
  title: string
  category: string
  rate: number
  visit: number
  Icon: (props: SVGProps) => JSX.Element
  chart: { series: any[] }
}

const visitors: visitorsProps[] = [
  {
    id: nanoid(),
    Icon: Dribble,
    title: 'Dribbble',
    category: 'Community',
    rate: 70,
    visit: 12350,
    chart: {
      series: chartSeries,
    },
  },
  {
    id: nanoid(),
    Icon: Linkedin,
    title: 'Linked In',
    category: 'Social Media',
    rate: 60,
    visit: 10275,
    chart: {
      series: chartSeries,
    },
  },
  {
    id: nanoid(),
    Icon: Twitter,
    title: 'Twitter',
    category: 'Social Media',
    rate: 50,
    visit: 20348,
    chart: {
      series: chartSeries,
    },
  },
]

export default Visitor
