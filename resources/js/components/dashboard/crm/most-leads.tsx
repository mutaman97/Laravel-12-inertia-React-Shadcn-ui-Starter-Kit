'use client'

import CollectionOutline from '@/components/icons/collection-outline'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'
import { baseChartOptions } from '@/lib/base-chart-options'
import { cn } from '@/lib/utils'
import { ApexOptions } from 'apexcharts'
import merge from 'lodash.merge'
import { Mail, MoreHorizontal, Phone, Share2 } from 'lucide-react'
import { nanoid } from 'nanoid'
import { HTMLAttributes } from 'react'
import Chart from 'react-apexcharts'

type Props = HTMLAttributes<HTMLDivElement>

const MostLeads = ({ className, ...props }: Props) => {
  // REACT CHART OPTIONS
  const chartOptions = merge(baseChartOptions(), {
    stroke: { show: false },
    labels: ['Chrome', 'Opera Mini', 'Firefox', 'Yahoo!'],
    plotOptions: { pie: { donut: { size: '75%' }, expandOnClick: false } },
    tooltip: {
      y: {
        formatter: val => String(val),
        title: { formatter: series => series },
      },
    },
    colors: ['#10B981', 'hsl(var(--icon))', 'hsl(var(--icon-muted))', 'hsl(var(--icon-active))'],
  } as ApexOptions)

  return (
    <Card className={cn('', className)} {...props}>
      <div className="flex items-center justify-between p-6 pb-4">
        <p className="text-lg font-medium">Most Leads</p>

        <Button variant="secondary" size="icon" className="h-8 w-8 rounded-md">
          <MoreHorizontal className="text-icon h-4 w-4" />
        </Button>
      </div>

      <div className="mb-2">
        <Chart height={170} type="donut" options={chartOptions} series={[40, 20, 20, 20]} />
      </div>

      <Table className="mt-3">
        <TableBody>
          {DATA.map(({ Icon, title, subtitle, percentage, id, color }) => (
            <TableRow key={id} className="border-border text-sm font-medium">
              <TableCell className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <Icon className="h-4 w-4" />

                  <p className="font-semibold">{title}</p>
                </div>
              </TableCell>

              <TableCell className="text-icon-muted px-6 py-4">{subtitle}</TableCell>

              <TableCell className="text-secondary-foreground px-6 py-4 text-end">{percentage}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}

// CUSTOM DUMMY DATA SET
const DATA = [
  {
    id: nanoid(),
    title: 'Email',
    percentage: 60,
    Icon: Mail,
    color: 'primary.main',
    subtitle: '500 vs 1000',
  },
  {
    id: nanoid(),
    title: 'Call',
    percentage: 10,
    Icon: Phone,
    color: 'success.500',
    subtitle: '360 vs 965',
  },
  {
    id: nanoid(),
    percentage: 20,
    title: 'Social',
    Icon: Share2,
    color: 'grey.500',
    subtitle: '3684 vs 5000',
  },
  {
    id: nanoid(),
    percentage: 10,
    title: 'Other',
    Icon: CollectionOutline,
    color: 'grey.300',
    subtitle: '469 vs 678',
  },
]

export default MostLeads
