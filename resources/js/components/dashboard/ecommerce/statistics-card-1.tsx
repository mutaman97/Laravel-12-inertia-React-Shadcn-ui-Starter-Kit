import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { nanoid } from 'nanoid'

const StatisticsCard1 = ({ className }: { className?: string }) => {
  return (
    <Card className={cn('flex h-[230px] flex-col justify-between p-6', className)}>
      <div>
        <div className="mb-1 flex items-center gap-2">
          <h6 className="font-semibold">1,352</h6>
          <span className="bg-card rounded-sm px-1 py-0.5 text-xs font-medium text-emerald-500">+12.5%</span>
        </div>

        <p className="text-secondary-foreground text-sm">Daily Sales</p>
      </div>

      <div>
        <p className="text-secondary-foreground text-xs font-medium">Top Customers</p>

        <div className="mt-2 flex flex-wrap items-center gap-2">
          {avatars.map(avatar => (
            <Avatar key={avatar.id} className="border-border -mr-5 h-9 w-9 border">
              <AvatarImage src={avatar.image} alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          ))}
        </div>
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

export default StatisticsCard1
