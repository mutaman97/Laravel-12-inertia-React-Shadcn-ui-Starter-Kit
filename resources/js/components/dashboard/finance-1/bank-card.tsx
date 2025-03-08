import ThemeBasedImage from '@/components/theme-based-image'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { MoreHorizontal, Plus } from 'lucide-react'
import { nanoid } from 'nanoid'
import { HTMLAttributes } from 'react'

type Props = HTMLAttributes<HTMLDivElement>

const BankCard = ({ className, ...props }: Props) => {
  return (
    <Card className={cn('p-6', className)} {...props}>
      <div className="mb-3 flex items-start justify-between">
        <p className="text-lg font-medium">Your Card</p>

        <Button variant="secondary" size="icon" className="h-8 w-8">
          <MoreHorizontal className="text-icon h-4 w-4" />
        </Button>
      </div>

      <div className="flex justify-center">
        <ThemeBasedImage
          width={280}
          height={196}
          lightSrc="/assets/images/debit-card-light.png"
          darkSrc="/assets/images/debit-card-dark.png"
          alt="shadcnkit"
        />
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-5">
        <p className="text-xs">Receivers:</p>

        <div className="flex flex-wrap items-center gap-2">
          {avatars.map(avatar => (
            <Avatar key={avatar.id} className="h-8 w-8">
              <AvatarImage src={avatar.image} alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          ))}

          <Button variant="secondary" size="icon" className="h-8 w-8 rounded-full">
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
  { id: nanoid(), image: 'https://github.com/shadcn.png' },
  { id: nanoid(), image: 'https://github.com/shadcn.png' },
]

export default BankCard
