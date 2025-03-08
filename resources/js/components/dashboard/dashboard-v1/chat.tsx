import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { Plus, Send } from 'lucide-react'
import { nanoid } from 'nanoid'

type Props = React.HTMLAttributes<HTMLDivElement>

const Chat = ({ className, ...props }: Props) => {
  return (
    <Card className={cn('flex flex-col justify-between p-6', className)} {...props}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar className="h-[52px] w-[52px]">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-lg font-semibold">Aston Agar</p>
            <p className="text-secondary-foreground text-sm">www.astonagar.com</p>
          </div>
        </div>

        <Button size="icon" variant="secondary" className="h-8 w-8">
          <Plus className="text-icon h-4 w-4" />
        </Button>
      </div>

      <div className="flex h-full flex-col justify-between">
        <div className="flex flex-col gap-5 py-4">
          {chats.map(({ id, type, message }) => (
            <div key={id} className={cn('flex w-full', type === 'Receive' ? 'justify-start' : 'justify-end')}>
              <p className={cn('max-w-[80%] rounded-md px-4 py-2', type === 'Receive' ? 'bg-primary text-primary-foreground' : 'bg-card-hover')}>
                {message}
              </p>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Input placeholder="Type your message" className="bg-card px-3" />

          <div>
            <Button size="icon" variant="outline" className="bg-card">
              <Send className="text-icon h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}

const chats = [
  {
    id: nanoid(),
    type: 'Receive',
    message: 'Hi, how can I help you today?',
  },
  {
    id: nanoid(),
    type: 'Sent',
    message: "Hey, I'm having trouble with my account.",
  },
  {
    id: nanoid(),
    type: 'Receive',
    message: 'What seems to be the problem?',
  },
  {
    id: nanoid(),
    type: 'Sent',
    message: "I can't log in.",
  },
  {
    id: nanoid(),
    type: 'Receive',
    message: 'Hi, how can I help you today?',
  },
  {
    id: nanoid(),
    type: 'Sent',
    message: "Hey, I'm having trouble with my account.",
  },
  {
    id: nanoid(),
    type: 'Receive',
    message: 'What seems to be the problem?',
  },
]

export default Chat
