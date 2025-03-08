import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Plus } from 'lucide-react'
import { nanoid } from 'nanoid'

const WelcomeCard = ({ className }: { className?: string }) => {
  return (
    <Card className={cn('flex flex-col items-center justify-between gap-10 p-6 lg:flex-row', className)}>
      <div>
        <p className="mb-1 text-lg font-medium">Welcome back Shaker!</p>
        <p className="text-secondary-foreground text-sm">Lorem ipsum dolor sit amet.</p>
        <Button className="mt-6 px-4">Upgrade Pro</Button>
      </div>

      <div className="w-full lg:max-w-[328px]">
        <p className="text-secondary-foreground text-center lg:text-end">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit integer purus, in vitae metus.
        </p>

        <div className="mt-5 flex items-center justify-center gap-2 lg:justify-end">
          {avatars.map(avatar => (
            <Avatar key={avatar.id} className="border-border -mr-4 h-9 w-9 border">
              <AvatarImage src={avatar.image} alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          ))}

          <Button size="icon" variant="secondary" className="border-border z-10 -mr-4 h-9 w-9 rounded-full border">
            <Plus className="text-icon h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  )
}

const avatars = [
  { id: nanoid(), image: 'https://github.com/shadcn.png' },
  { id: nanoid(), image: 'https://github.com/shadcn.png' },
  { id: nanoid(), image: 'https://github.com/shadcn.png' },
]

export default WelcomeCard
