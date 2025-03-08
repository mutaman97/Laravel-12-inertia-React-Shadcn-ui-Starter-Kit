import LineChart from '@/components/charts/line-chart'
import Dribble from '@/components/icons/dribble'
import Linkedin from '@/components/icons/linkedin'
import Twitter from '@/components/icons/twitter'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { MoreHorizontal } from 'lucide-react'
import { nanoid } from 'nanoid'
import { DivProps, SVGProps } from 'react-html-props'

const ReturningRate = ({ className, ...props }: DivProps) => {
  return (
    <div className={cn('border-border rounded-2xl border shadow', className)} {...props}>
      <div className="flex items-start justify-between p-6 pb-2">
        <div>
          <div className="mb-1 flex items-center gap-2">
            <h6 className="font-semibold">50.56%</h6>
            <span className="bg-card rounded-sm px-1 py-0.5 text-xs font-medium text-emerald-500">+2.5%</span>
          </div>
          <p className="text-secondary-foreground text-sm">Returning Rate</p>
        </div>

        <Button variant="secondary" size="icon" className="h-8 w-8">
          <MoreHorizontal className="text-icon h-4 w-4" />
        </Button>
      </div>

      <div className="relative mt-10 pr-3 pl-1">
        <p className="text-secondary-foreground absolute top-1.5 left-6 text-sm font-medium">Customers</p>

        <LineChart
          height={300}
          legendHorizontalPosition="right"
          colors={['hsl(var(--icon-active))', 'hsl(var(--icon-muted))']}
          gridColor={'hsl(var(--border))'}
          chartCategories={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
          chartSeries={[
            { name: 'Returning', data: [20, 150, 75, 150, 300, 400] },
            { name: 'New', data: [0, 250, 100, 17, 122, 18] },
          ]}
        />
      </div>
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

export default ReturningRate
