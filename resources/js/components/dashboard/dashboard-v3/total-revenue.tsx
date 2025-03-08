'use client'

import { Card } from '@/components/ui/card'
import { baseChartOptions } from '@/lib/base-chart-options'
import { cn } from '@/lib/utils'
import { ApexOptions } from 'apexcharts'
import merge from 'lodash.merge'
import dynamic from 'next/dynamic'
import { HTMLAttributes } from 'react'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

type Props = HTMLAttributes<HTMLDivElement>

const TotalRevenue = ({ className, ...props }: Props) => {
  // REACT CHART CATEGORIES LABEL
  const chartCategories = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri']

  // REACT CHART DATA SERIES
  const chartSeries = [{ name: 'Sales', data: [6, 15, 10, 17, 12, 19, 10] }]

  // REACT CHART OPTIONS
  const chartOptions = merge(baseChartOptions(), {
    colors: ['hsl(var(--icon-active))'],
    markers: { strokeColors: 'hsl(var(--icon-active))' },
    grid: { show: false },
    yaxis: { show: false },
    xaxis: {
      categories: chartCategories,
      labels: { show: false },
      crosshairs: {
        show: true,
        fill: { color: 'hsl(var(--icon-active))' },
        stroke: { color: 'hsl(var(--icon-active))' },
      },
    },
  } as ApexOptions)
  return (
    <Card className={cn('flex h-[220px] flex-col justify-between px-4', className)} {...props}>
      <div className="px-2 pt-6 pb-0">
        <p className="mb-4 text-sm font-medium">Total Revenue</p>

        <h6 className="text-sm font-semibold">$12.1k+</h6>
        <p className="text-secondary-foreground text-sm">+20.1% increase last month</p>
      </div>

      <Chart type="line" height={100} options={chartOptions} series={chartSeries} width="100%" />
    </Card>
  )
}

export default TotalRevenue
