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

const StatisticsCard1 = ({ className, ...props }: Props) => {
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
        borderRadius: 5,
        distributed: true,
        columnWidth: '40%',
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
    <Card className={cn('flex h-[230px] flex-col justify-between', className)} {...props}>
      <div className="p-6 pb-0">
        <div className="mb-1 flex items-center gap-2">
          <h6 className="text-[28px] font-semibold">12,650</h6>
          <span className="bg-card rounded-sm px-1 py-0.5 text-xs font-medium text-emerald-500">+2.19%</span>
        </div>

        <p className="text-secondary-foreground text-sm">Total Shipments</p>
      </div>

      <Chart type="bar" height={140} series={chartSeries} options={chartOptions} />
    </Card>
  )
}

export default StatisticsCard1
