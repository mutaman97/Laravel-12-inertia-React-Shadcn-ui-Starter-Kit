'use client'

import { baseChartOptions } from '@/lib/base-chart-options'
import { ApexOptions } from 'apexcharts'
import merge from 'lodash.merge'
import Chart from 'react-apexcharts'

interface Props {
  height?: number
  colors: string[]
  chartSeries: { name: string; data: number[] }[]
  chartCategories: string[]
}

const ActionlessBarChart = (props: Props) => {
  const { height = 120, colors, chartSeries, chartCategories } = props

  const barChartOptions = merge(baseChartOptions(), {
    chart: { offsetY: 30 },
    stroke: { show: false },
    xaxis: { categories: chartCategories },
    colors: colors,
    grid: {
      padding: {
        top: -40,
        right: 10,
        bottom: 20,
        left: 10,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 7,
        columnWidth: '45%',
        distributed: true,
        borderRadiusApplication: 'end',
      },
    },
    tooltip: {
      y: {
        formatter: function (val: number, { dataPointIndex, w }) {
          return `${w.globals.labels[dataPointIndex]} : ${val}`
        },
      },
    },
  } as ApexOptions)

  return <Chart type="bar" height={height} series={chartSeries} options={barChartOptions} />
}

export default ActionlessBarChart
