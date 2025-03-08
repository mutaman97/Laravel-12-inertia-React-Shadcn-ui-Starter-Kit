import { ApexOptions } from 'apexcharts'
import merge from 'lodash.merge'
import React from 'react'
import Chart from 'react-apexcharts'

interface Props {
  height?: number
  colors: string[]
  strokeWidth?: number
  chartSeries: { name: string; data: number[] }[]
  chartCategories: string[]
}

const ActionlessAreaChart: React.FC<Props> = props => {
  const { height = 120, colors, strokeWidth = 2, chartSeries, chartCategories } = props

  const baseChartOptions = () => ({
    chart: {
      type: 'area',
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: 'smooth',
    },
    markers: {
      size: 5,
    },
  })

  const areaChartOptions = merge(baseChartOptions(), {
    stroke: { show: true, width: strokeWidth },
    colors: colors,
    grid: {
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.8,
        opacityTo: 0.1,
        stops: [0, 100],
      },
    },
    xaxis: {
      categories: chartCategories,
      crosshairs: { show: true },
    },
  } as ApexOptions)

  return <Chart type="area" height={height} series={chartSeries} options={areaChartOptions} />
}

export default ActionlessAreaChart
