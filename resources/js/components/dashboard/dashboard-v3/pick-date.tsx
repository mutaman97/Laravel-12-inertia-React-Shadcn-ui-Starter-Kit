'use client'

import { Calendar } from '@/components/ui/calendar'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { format } from 'date-fns'
import { HTMLAttributes, useState } from 'react'

type Props = HTMLAttributes<HTMLDivElement>

const PickDate = ({ className, ...props }: Props) => {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <Card className={cn('flex flex-col items-center p-3', className)} {...props}>
      <p className="pt-2 pb-3 text-sm font-semibold">Pick a date</p>
      <div className="bg-card w-full max-w-[276px] rounded-md px-4 py-2 text-center">{date ? format(date, 'dd, MMMM yyyy') : ''}</div>

      <Calendar mode="single" selected={date} onSelect={setDate} className="justify-center [&>div]:flex" />
    </Card>
  )
}

export default PickDate
