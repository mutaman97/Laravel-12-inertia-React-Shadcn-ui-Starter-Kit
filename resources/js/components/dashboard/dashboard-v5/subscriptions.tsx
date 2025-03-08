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

const Subscriptions = ({ className, ...props }: Props) => {
  // REACT CHART CATEGORIES LABEL
  const chartCategories = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri']

  // REACT CHART DATA SERIES
  const chartSeries = [
    {
      name: 'Tasks',
      data: [46, 50, 22, 30, 30, 22, 46],
    },
  ]

  // CAMPAIGN SENT REACT CHART OPTIONS
  const campaignChartOptions = merge(baseChartOptions(), {
    stroke: { show: false },
    xaxis: { categories: chartCategories },
    colors: ['hsl(var(--primary))'],
    plotOptions: {
      bar: {
        borderRadius: 0,
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
    <Card className={cn('px-2', className)} {...props}>
      <div className="px-4 pt-6 pb-0">
        <p className="mb-5 text-sm font-medium">Subscriptions</p>

        <h6 className="text-sm font-semibold">2.3k+</h6>
        <p className="text-secondary-foreground text-sm">14% increase last month</p>
      </div>

      <Chart type="bar" height={100} series={chartSeries} options={campaignChartOptions} />
    </Card>
  )
}

export default Subscriptions
