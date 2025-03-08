'use client'

import SingleDot from '@/components/icons/single-dot'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { ApexOptions } from 'apexcharts'
import dynamic from 'next/dynamic'
import { HTMLAttributes } from 'react'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

type Props = HTMLAttributes<HTMLDivElement>

const Goals = ({ className, ...props }: Props) => {
  const chartOptions = {
    chart: {
      type: 'radialBar',
      offsetY: -20,
      sparkline: {
        enabled: true,
      },
    },
    colors: ['hsl(var(--card-hover))'],
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: 'hsl(var(--card))',
          strokeWidth: '97%',
          margin: 5,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            offsetY: -2,
            fontSize: '22px',
          },
        },
      },
    },
    grid: {
      padding: {
        top: -10,
      },
    },
    labels: ['Average Results'],
  } as ApexOptions

  return (
    <Card className={cn('relative h-[356px]', className)} {...props}>
      <div className="p-6 pb-8 text-center">
        <h6 className="text-sm font-semibold">Goals</h6>
        <p className="text-secondary-foreground text-sm">Set your daily activity goal.</p>
      </div>

      <Chart width="100%" height={400} options={chartOptions} series={[76]} type="radialBar" />

      <div className="absolute bottom-6 left-6 flex w-[calc(100%-48px)] items-center justify-between">
        <p className="text-secondary-foreground flex items-center text-sm">
          <SingleDot className="text-card-hover mr-2 h-2 w-2" />
          <span>Done</span>
        </p>
        <p className="text-secondary-foreground flex items-center text-sm">
          <SingleDot className="text-card-hover mr-2 h-2 w-2" />
          <span>Remaining</span>
        </p>
      </div>
    </Card>
  )
}

export default Goals
