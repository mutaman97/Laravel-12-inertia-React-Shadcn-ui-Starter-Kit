'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { baseChartOptions } from '@/lib/base-chart-options'
import { format } from '@/lib/currency'
import { cn } from '@/lib/utils'
import { ApexOptions } from 'apexcharts'
import merge from 'lodash.merge'
import { MoreHorizontal } from 'lucide-react'
import dynamic from 'next/dynamic'
import { HTMLAttributes } from 'react'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

type Props = HTMLAttributes<HTMLDivElement>

const SalesForecase = ({ className, ...props }: Props) => {
  // REACT CHART CATEGORIES LABEL
  const chartCategories = ['Goal', 'Pending', 'Profit']

  // REACT CHART DATA SERIES
  const chartSeries = [{ name: 'Sales', data: [50000, 28000, 40000] }]

  // REACT CHART OPTIONS
  const chartOptions = merge(baseChartOptions(), {
    stroke: { width: 0 },
    grid: {
      show: true,
      strokeDashArray: 3,
      borderColor: 'hsl(var(--border))',
    },
    colors: ['hsl(var(--icon-active))', 'hsl(var(--icon))', 'hsl(var(--icon-muted))'],
    xaxis: {
      categories: chartCategories,
      labels: {
        show: true,
        style: { colors: 'hsl(var(--secondary-foreground))' },
      },
    },

    yaxis: {
      min: 0,
      show: true,
      max: 50000,
      tickAmount: 3,
      labels: {
        formatter: value => format(value),
        style: { colors: 'hsl(var(--secondary-foreground))' },
      },
    },

    plotOptions: {
      bar: {
        borderRadius: 9,
        distributed: true,
        columnWidth: '17%',
        borderRadiusApplication: 'end',
      },
    },

    tooltip: {
      y: {
        formatter: function (val: number, { dataPointIndex, w }) {
          return `${w.globals.labels[dataPointIndex]} : ${format(val)}`
        },
      },
    },
  } as ApexOptions)

  return (
    <Card className={cn('overflow-hidden', className)} {...props}>
      <div className="flex items-center justify-between p-6">
        <p className="text-lg font-medium">Sales Forecase</p>

        <Button variant="secondary" size="icon" className="h-8 w-8 rounded-md">
          <MoreHorizontal className="text-icon h-4 w-4" />
        </Button>
      </div>

      <Chart type="bar" height={220} series={chartSeries} options={chartOptions} />
    </Card>
  )
}

export default SalesForecase
