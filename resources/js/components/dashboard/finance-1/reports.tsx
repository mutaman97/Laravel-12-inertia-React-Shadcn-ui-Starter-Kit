'use client'

import DonutChart from '@/components/charts/donut-chart'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { MoreHorizontal } from 'lucide-react'
import { useTheme } from 'next-themes'

const Reports = ({ className }: { className?: string }) => {
  const { theme } = useTheme()
  const colors = theme === 'dark' ? ['#94A3B8', '#CBD5E1'] : ['#CBD5E1', '#334155']

  return (
    <Card className={className}>
      <div className="flex items-center justify-between p-6 pb-3">
        <p className="text-lg font-medium">Reports</p>

        <Button variant="secondary" size="icon" className="h-8 w-8 rounded-md">
          <MoreHorizontal className="text-icon h-4 w-4" />
        </Button>
      </div>

      <DonutChart height={280} legend={true} colors={colors} labels={['Expense', 'Revenue']} chartSeries={[10000, 15000]} />
    </Card>
  )
}

export default Reports
