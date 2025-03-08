'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { baseChartOptions } from '@/lib/base-chart-options'
import { cn } from '@/lib/utils'
import { ApexOptions } from 'apexcharts'
import merge from 'lodash.merge'
import { MoreHorizontal } from 'lucide-react'
import { HTMLAttributes } from 'react'
import Chart from 'react-apexcharts'
import StatisticsCard1 from './statistics-card-1'
import StatisticsCard2 from './statistics-card-2'
import StatisticsCard3 from './statistics-card-3'
import StatisticsCard4 from './statistics-card-4'

type Props = HTMLAttributes<HTMLDivElement>

const Statistics = ({ className, ...props }: Props) => {
  // REACT CHART CATEGORIES LABEL
  const chartCategories = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri']

  // REACT CHART DATA SERIES
  const chartSeries = [{ name: 'Sales', data: [6, 15, 10, 17, 12, 19, 10] }]

  // REACT CHART OPTIONS
  const chartOptions = merge(baseChartOptions(), {
    colors: ['hsl(var(--icon-active))'],
    markers: { strokeColors: 'hsl(var(--icon-active))' },
    grid: {
      show: true,
      strokeDashArray: 3,
      borderColor: 'hsl(var(--primary-foreground))',
    },

    xaxis: {
      categories: chartCategories,
      labels: { show: false },
      crosshairs: {
        show: true,
        fill: { color: 'hsl(var(--icon-active))' },
        stroke: { color: 'hsl(var(--icon-active))' },
      },
    },

    yaxis: {
      min: 0,
      max: 20,
      show: true,
      tickAmount: 2,
      labels: {
        style: { colors: 'hsl(var(--icon-active))', fontWeight: 500 },
      },
    },
  } as ApexOptions)

  return (
    <Card className={cn('relative', className)} {...props}>
      <Card className="bg-icon-muted absolute top-0 left-0 h-56 w-full border-none">
        <div className="flex items-center justify-between p-6 pb-0">
          <p className="text-lg font-medium">Last Month Shipment</p>

          <Button size="icon" variant="secondary" className="h-8 w-8 rounded-md">
            <MoreHorizontal className="text-icon h-4 w-4" />
          </Button>
        </div>

        <Chart type="line" height={110} options={chartOptions} series={chartSeries} width="100%" />
      </Card>

      <div className="relative z-10 mt-[148px] grid grid-cols-2 gap-6 p-6">
        <StatisticsCard1 />
        <StatisticsCard2 />
        <StatisticsCard3 />
        <StatisticsCard4 />
      </div>
    </Card>
  )
}

export default Statistics
