'use client'
import LineChart from '@/components/charts/line-chart'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { MoreHorizontal } from 'lucide-react'
import { DivProps } from 'react-html-props'

const Analytics = ({ className, ...props }: DivProps) => {
  return (
    <div className={cn('border-border rounded-2xl border shadow', className)} {...props}>
      <div className="mb-10 flex items-center justify-between">
        <div className="flex flex-wrap">
          {analytics.map((item, ind) => (
            <div key={ind} className="hover:bg-card p-6">
              <p className="text-secondary-foreground text-sm font-medium">{item.title}</p>
              <p className="text-xl font-semibold">{item.count}</p>
              <p className={cn('mt-2 text-sm font-medium', item.result > 0 ? 'text-emerald-500' : 'text-red-500')}>
                {item.result > 0 ? '+' : ''}
                {item.result + '%'}
              </p>
            </div>
          ))}
        </div>

        <div className="p-6">
          <Button variant="secondary" size="icon" className="h-8 w-8">
            <MoreHorizontal className="text-icon h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="pr-3">
        <LineChart
          height={300}
          colors={['hsl(var(--primary))']}
          chartSeries={[{ name: 'Sales', data: [6, 15, 10, 17, 20, 10, 15] }]}
          chartCategories={['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri']}
        />
      </div>
    </div>
  )
}

const analytics = [
  { title: 'Users', count: '12,060', result: 12.5 },
  { title: 'Sessions', count: '30,000', result: 5.56 },
  { title: 'Bounce Rate', count: '53%', result: -1.5 },
  { title: 'Session Duration', count: '3m 10s', result: -10.5 },
]

export default Analytics
