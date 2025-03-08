'use client'

import { Card } from '@/components/ui/card'
import { baseChartOptions } from '@/lib/base-chart-options'
import { cn } from '@/lib/utils'
import { ApexOptions } from 'apexcharts'
import merge from 'lodash.merge'
import { HTMLAttributes } from 'react'
import Chart from 'react-apexcharts'

type Props = HTMLAttributes<HTMLDivElement>

const StatisticsCard2 = ({ className, ...props }: Props) => {
  // REACT CHART CATEGORIES LABEL
  const chartCategories = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri']

  // REACT CHART DATA SERIES
  const chartSeries = [{ name: 'Sales', data: [6, 15, 10, 17, 12, 19, 10] }]

  // TOTAL SHIPMENTS REACT CHART OPTIONS
  const totalShipmentChartOptions = merge(baseChartOptions(), {
    stroke: { show: false },
    xaxis: { categories: chartCategories },
    colors: ['hsl(var(--icon-muted))', 'hsl(var(--icon-active))'],
    plotOptions: {
      bar: {
        borderRadius: 5,
        distributed: true,
        columnWidth: '70%',
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
    <Card className={cn('bg-primary-foreground flex h-[204px] flex-col justify-between', className)} {...props}>
      <div className="p-6 pb-0">
        <div className="mb-1 flex items-center gap-2">
          <h6 className="text-2xl font-semibold">12,650</h6>
          <span className="bg-card rounded-sm px-1 py-0.5 text-xs font-medium text-emerald-500">+2.19%</span>
        </div>

        <p className="text-secondary-foreground text-sm">Total Shipments</p>
      </div>

      <Chart type="bar" height={100} series={chartSeries} options={totalShipmentChartOptions} />
    </Card>
  )
}

export default StatisticsCard2
