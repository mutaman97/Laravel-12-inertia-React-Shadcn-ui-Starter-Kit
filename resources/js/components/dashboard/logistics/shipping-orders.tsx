'use client'

import { Card } from '@/components/ui/card'
import { baseChartOptions } from '@/lib/base-chart-options'
import { cn } from '@/lib/utils'
import { ApexOptions } from 'apexcharts'
import merge from 'lodash.merge'
import { nanoid } from 'nanoid'
import { HTMLAttributes } from 'react'
import Chart from 'react-apexcharts'

type Props = HTMLAttributes<HTMLDivElement>

const ShippingOrders = ({ className, ...props }: Props) => {
  // REACT CHART CATEGORIES LABEL
  const chartCategories = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri']

  // REACT CHART DATA SERIES
  const chartSeries = [{ name: 'Tasks', data: [22, 30, 46, 50, 46, 30, 22] }]

  // AVERAGE DEALS REACT CHART OPTIONS
  const dealsChartOptions = merge(baseChartOptions(), {
    stroke: {
      width: 2,
      colors: ['hsl(var(--primary-foreground))'],
    },
    labels: ['Cloths', 'Foods', 'Others'],
    colors: ['hsl(var(--icon))', 'hsl(var(--border-hover))', 'hsl(var(--card))'],
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: { size: '70%' },
      },
    },
    tooltip: {
      style: { fontSize: '14px' },
      y: { title: (name: string) => name, formatter: val => `${val}` },
    },
  } as ApexOptions)

  // EARNING YEAR REACT CHART OPTIONS
  const monthChartOptions = merge(baseChartOptions(), {
    stroke: { show: false },
    xaxis: { categories: chartCategories },
    colors: ['hsl(var(--icon-muted))', 'hsl(var(--icon-active))'],
    plotOptions: {
      bar: {
        borderRadius: 7,
        distributed: true,
        columnWidth: '60%',
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
    <Card className={cn(className, 'grid grid-cols-1 lg:grid-cols-2')} {...props}>
      <div className="flex w-full flex-col justify-between p-6">
        <div className="mb-7">
          <div className="mb-1 flex items-center gap-2">
            <h6 className="font-semibold">
              <span className="text-muted-foreground text-base font-medium">$</span>
              51,352
            </h6>
            <span className="bg-card rounded-sm px-1 py-0.5 text-xs font-medium text-emerald-500">+12.5%</span>
          </div>

          <p className="text-secondary-foreground text-start text-sm">Expected Earning of this year</p>
        </div>

        <div className="flex items-center justify-between">
          <Chart
            type="donut"
            width={130}
            height={130}
            options={dealsChartOptions}
            series={averages.reduce((prev: number[], curr) => [...prev, curr.amount], [])}
          />
          <ul className="flex w-[120px] flex-col gap-3">
            {averages.map(item => (
              <li key={item.id} className="flex items-center justify-between text-sm font-medium">
                <p className="text-secondary-foreground">{item.title}</p>
                <p>${item.amount}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="w-full">
        <div className="p-6 pb-0">
          <p className="mb-1 text-lg font-medium">Shipping orders</p>

          <p className="text-secondary-foreground text-start text-sm">This Month</p>
        </div>

        <Chart type="bar" series={chartSeries} options={monthChartOptions} height={200} />
      </div>
    </Card>
  )
}

// CUSTOM DUMMY DATA LIST
const averages = [
  { id: nanoid(), title: 'Cloths', amount: 2658 },
  { id: nanoid(), title: 'Foods', amount: 6687 },
  { id: nanoid(), title: 'Others', amount: 4348 },
]

export default ShippingOrders
