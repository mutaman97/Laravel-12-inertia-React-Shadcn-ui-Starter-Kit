'use client'

import DonutChart from '@/components/charts/donut-chart'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useAppearance } from '@/hooks/use-appearance'
import { cn } from '@/lib/utils'
import { MoreHorizontal } from 'lucide-react'
import { nanoid } from 'nanoid'
import { HTMLAttributes } from 'react'

type Props = HTMLAttributes<HTMLDivElement>

const WalletSummary = ({ className, ...props }: Props) => {
  const { appearance } = useAppearance()
  const colors = appearance === 'dark' ? ['#94A3B8', '#CBD5E1'] : ['#CBD5E1', '#334155']

  return (
    <Card className={cn('p-6', className)} {...props}>
      <div className="mb-9 flex items-start justify-between">
        <div>
          <p className="text-lg font-medium">Your Card</p>
          <p className="text-secondary-foreground text-sm font-medium">Last 7 days report</p>
        </div>

        <Button variant="secondary" size="icon" className="h-8 w-8">
          <MoreHorizontal className="text-icon h-4 w-4" />
        </Button>
      </div>

      <div className="hover:bg-card mb-6 flex items-center justify-between rounded-2xl px-5 py-3">
        <div>
          <p className="mb-2 font-semibold">$2,160.36</p>
          <p className="text-secondary-foreground text-sm font-medium">Income</p>
        </div>

        <DonutChart width="110px" height={110} colors={colors} strokeWidth={0} donutSize="75%" labels={['EURO', 'GBP']} chartSeries={[30, 90]} />
      </div>

      <div className="hover:bg-card flex items-center justify-between rounded-2xl px-5 py-3">
        <div>
          <p className="mb-2 font-semibold">$850.65</p>
          <p className="text-secondary-foreground text-sm font-medium">Outcome</p>
        </div>

        <DonutChart width="110px" height={110} colors={colors} strokeWidth={0} donutSize="75%" labels={['EURO', 'GBP']} chartSeries={[30, 90]} />
      </div>
    </Card>
  )
}

const avatars = [
  { id: nanoid(), image: 'https://github.com/shadcn.png' },
  { id: nanoid(), image: 'https://github.com/shadcn.png' },
  { id: nanoid(), image: 'https://github.com/shadcn.png' },
  { id: nanoid(), image: 'https://github.com/shadcn.png' },
  { id: nanoid(), image: 'https://github.com/shadcn.png' },
]

export default WalletSummary
