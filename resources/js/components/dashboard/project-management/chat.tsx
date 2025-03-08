import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { Paperclip, PhoneCall, Send, Video } from 'lucide-react'
import { nanoid } from 'nanoid'

type Props = React.HTMLAttributes<HTMLDivElement>

const Chat = ({ className, ...props }: Props) => {
  return (
    <Card className={cn('flex flex-col justify-between p-6', className)} {...props}>
      <div className="flex items-center justify-between">
        <p className="text-lg font-semibold">Team Chat</p>

        <div className="flex gap-1">
          <Button size="icon" variant="ghost" className="h-8 w-8">
            <PhoneCall className="text-icon h-4 w-4" />
          </Button>
          <Button size="icon" variant="ghost" className="h-8 w-8">
            <Video className="text-icon h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex h-full flex-col justify-between">
        <div className="flex flex-col gap-5 py-4">
          {chats.map(({ id, type, image, name, message }) => (
            <div key={id} className={cn('flex w-full', type === 'Receive' ? 'justify-start' : 'justify-end')}>
              {type === 'Receive' ? (
                <div className="flex items-center gap-3">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src={image} alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>

                  <div>
                    <p className="bg-card-hover max-w-[100%] rounded-xl rounded-bl-none p-2.5 text-xs">{message}</p>
                    <p className="text-muted-foreground mt-2 text-xs">{name}</p>
                  </div>
                </div>
              ) : (
                <div className="text-end">
                  <p className="bg-card-hover max-w-[100%] rounded-xl rounded-br-none p-2.5 text-xs">{message}</p>
                  <p className="text-muted-foreground mt-2 text-xs">{name}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div>
            <Button size="icon" variant="outline" className="bg-card border-none">
              <Paperclip className="text-icon h-4 w-4" />
            </Button>
          </div>

          <div className="relative w-full">
            <Input placeholder="Type your message" className="bg-card border-none px-3" />

            <Button size="icon" variant="outline" className="bg-card absolute top-0 right-0 border-none">
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
    name: 'Eden Ovelki',
    image: '/assets/avatars/Ellipse-1.png',
    message: 'Hey There! Need a food app design with full ui/ux and development.',
  },
  {
    id: nanoid(),
    type: 'Sent',
    name: 'You',
    image: '/assets/avatars/Ellipse-2.png',
    message: 'Sure! Ready to help.',
  },
  {
    id: nanoid(),
    type: 'Receive',
    name: 'Eden Ovelki',
    image: '/assets/avatars/Ellipse-1.png',
    message: 'Hey There! I was very busy, that’s why I didn’t any help for you.',
  },
  {
    id: nanoid(),
    type: 'Sent',
    name: 'You',
    image: '/assets/avatars/Ellipse-2.png',
    message: 'It’s okay! Eden.',
  },
  {
    id: nanoid(),
    type: 'Receive',
    name: 'Eden Ovelki',
    image: '/assets/avatars/Ellipse-1.png',
    message: 'Thank You!',
  },
]

export default Chat
