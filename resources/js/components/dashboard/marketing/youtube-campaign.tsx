'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { baseChartOptions } from '@/lib/base-chart-options'
import { cn } from '@/lib/utils'
import { ApexOptions } from 'apexcharts'
import merge from 'lodash.merge'
import { MoreHorizontal } from 'lucide-react'
import dynamic from 'next/dynamic'
import { HTMLAttributes } from 'react'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

type Props = HTMLAttributes<HTMLDivElement>

const YouTubeCampaign = ({ className, ...props }: Props) => {
  // REACT CHART CATEGORIES LABEL
  const chartCategories = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri']

  // REACT CHART DATA SERIES
  const chartSeries = [{ name: 'Tasks', data: [22, 30, 46, 50, 46, 30, 22] }]

  // REACT CHART OPTIONS
  const chartOptions = merge(baseChartOptions(), {
    stroke: { show: false },
    xaxis: { categories: chartCategories },
    colors: ['hsl(var(--icon-muted))', 'hsl(var(--icon-active))'],
    plotOptions: {
      bar: {
        borderRadius: 10,
        distributed: true,
        columnWidth: '50%',
        borderRadiusApplication: 'end',
      },
    },
    tooltip: {
      y: {
        formatter: (val: number, { dataPointIndex, w }) => {
          return `${w.globals.labels[dataPointIndex]} : ${val}`
        },
      },
    },
  } as ApexOptions)

  return (
    <Card className={cn('', className)} {...props}>
      <div className="flex items-center justify-between p-6">
        <p className="text-lg font-medium">YouTube Campaign</p>

        <Button variant="secondary" size="icon" className="h-8 w-8 rounded-md">
          <MoreHorizontal className="text-icon h-4 w-4" />
        </Button>
      </div>

      <div className="flex flex-wrap items-center gap-8 px-6 pt-3">
        <div>
          <div className="mb-1 flex items-center gap-2">
            <h6 className="text-xl font-semibold">$18,469</h6>
            <span className="bg-card rounded-sm px-1 py-0.5 text-xs font-medium text-red-500">-2.37%</span>
          </div>
          <p className="text-secondary-foreground text-start text-sm">This month</p>
        </div>

        <div>
          <h6 className="mb-1 text-xl font-semibold">22,356</h6>

          <p className="text-secondary-foreground text-start text-sm">Last month</p>
        </div>
      </div>

      <Chart type="bar" height={260} series={chartSeries} options={chartOptions} />
    </Card>
  )
}

export default YouTubeCampaign
