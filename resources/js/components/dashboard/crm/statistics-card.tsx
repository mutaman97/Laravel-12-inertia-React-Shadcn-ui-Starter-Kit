'use client'

import { Card } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { baseChartOptions } from '@/lib/base-chart-options'
import { cn } from '@/lib/utils'
import { ApexOptions } from 'apexcharts'
import merge from 'lodash.merge'
import { nanoid } from 'nanoid'
import { HTMLAttributes } from 'react'
import Chart from 'react-apexcharts'

type Props = HTMLAttributes<HTMLDivElement>

const StatisticsCard = ({ className, ...props }: Props) => {
  // REACT CHART CATEGORIES LABEL
  const chartCategories = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri']

  // REACT CHART DATA SERIES
  const chartSeries = [
    {
      name: 'Tasks',
      data: [22, 30, 46, 50, 46, 30, 22],
    },
  ]

  // CAMPAIGN SENT REACT CHART OPTIONS
  const campaignChartOptions = merge(baseChartOptions(), {
    stroke: { show: false },
    xaxis: { categories: chartCategories },
    colors: ['hsl(var(--icon-active))', 'hsl(var(--icon-muted))'],
    plotOptions: {
      bar: {
        borderRadius: 7,
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

  return (
    <Card className={cn(className, 'grid grid-cols-1 gap-7 lg:grid-cols-3')} {...props}>
      <div className="w-full">
        <div className="p-6 pb-2">
          <div className="mb-1 flex items-center gap-2">
            <h6 className="font-semibold">1,352</h6>
            <span className="bg-card rounded-sm px-1 py-0.5 text-xs font-medium text-emerald-500">+4.67%</span>
          </div>
          <p className="text-secondary-foreground text-start text-sm">Campaign Sent</p>
        </div>

        <Chart type="bar" height={130} series={chartSeries} options={campaignChartOptions} />
      </div>

      <div className="w-full p-6">
        <div className="mb-7">
          <div className="mb-1 flex items-center gap-2">
            <h6 className="font-semibold">
              <span className="text-muted-foreground text-base font-medium">$</span>
              51,352
            </h6>
            <span className="bg-card rounded-sm px-1 py-0.5 text-xs font-medium text-emerald-500">+12.5%</span>
          </div>

          <p className="text-secondary-foreground text-start text-sm">Average Deals</p>
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

      <div className="flex w-full flex-col justify-between p-6">
        <div className="mb-12">
          <div className="mb-1 flex items-center gap-2">
            <h6 className="font-semibold">
              <span className="text-muted-foreground text-base font-medium">$</span>
              51,352
            </h6>
            <span className="bg-card rounded-sm px-1 py-0.5 text-xs font-medium text-emerald-500">-2.65%</span>
          </div>

          <p className="text-secondary-foreground text-start text-sm">Annual Profit</p>
        </div>

        <div className="pt-2 pb-3">
          <div className="mb-2 flex items-center justify-between text-sm">
            <p className="font-semibold">1,500 to Goal</p>
            <p className="text-secondary-foreground font-medium">75%</p>
          </div>

          <Progress value={65} className="bg-icon-muted h-2 w-full [&>div]:bg-emerald-500" />
        </div>
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

export default StatisticsCard
