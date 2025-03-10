'use client'

import LineChart from '@/components/charts/line-chart'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useAppearance } from '@/hooks/use-appearance'
import { cn } from '@/lib/utils'
import { MoreHorizontal } from 'lucide-react'
import { HTMLAttributes } from 'react'

type Props = HTMLAttributes<HTMLDivElement>

const TransactionCard = ({ className, ...props }: Props) => {
  const { appearance } = useAppearance()

  const colors = appearance === 'dark' ? ['#334155', '#CBD5E1'] : ['#CBD5E1', '#334155']

  return (
    <Card className={cn('relative pt-6', className)} {...props}>
      <div className="absolute top-0 mb-6 flex w-full items-start justify-between px-6 pt-6">
        <p className="text-lg font-medium">Transactions</p>

        <Button variant="secondary" size="icon" className="h-8 w-8">
          <MoreHorizontal className="text-icon h-4 w-4" />
        </Button>
      </div>

      <div className="pr-2 pl-1">
        <LineChart
          height={300}
          colors={colors}
          gridColor={'hsl(var(--border))'}
          chartCategories={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
          chartSeries={[
            {
              name: 'Income',
              data: [48000, 40000, 22000, 30000, 28000, 20000, 48000, 25000, 20000, 44000, 25000, 15000],
            },
            {
              name: 'Expense',
              data: [42000, 35000, 28000, 15000, 20000, 30000, 45000, 20000, 30000, 41000, 35000, 15000],
            },
          ]}
        />
      </div>
    </Card>
  )
}

export default TransactionCard
