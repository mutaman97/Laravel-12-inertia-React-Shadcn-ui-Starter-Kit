import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { cn } from '@/lib/utils'
import { MoreHorizontal } from 'lucide-react'
import { nanoid } from 'nanoid'
import { HTMLAttributes } from 'react'

type Props = HTMLAttributes<HTMLDivElement>

const AllCampaigns = ({ className, ...props }: Props) => {
  return (
    <Card className={cn('', className)} {...props}>
      <div className="flex items-center justify-between p-6 pb-5">
        <div>
          <p className="text-lg font-medium">All Campaigns</p>
          <p className="text-secondary-foreground mt-2 text-sm">20+ Active Campaign</p>
        </div>

        <Button variant="secondary" size="icon" className="h-8 w-8 rounded-md">
          <MoreHorizontal className="text-icon h-4 w-4" />
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow className="text-secondary-foreground text-sm font-medium">
            <TableHead className="px-6 py-5">NAME</TableHead>
            <TableHead className="px-6 py-5">TEAM MEMBER</TableHead>
            <TableHead className="px-6 py-5">STATUS</TableHead>
            <TableHead className="px-6 py-5">DURATION</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {DATA.map(item => (
            <TableRow key={item.id} className="border-border text-sm font-medium">
              <TableCell className="px-6 py-[22px]">
                <div className="flex items-center gap-3">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src={item.image} alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="mt-1 text-xs">{item.createdAt}</p>
                  </div>
                </div>
              </TableCell>

              <TableCell className="px-6 py-[22px]">
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  {item.avatars.map(avatar => (
                    <Avatar key={avatar.id} className="border-border -mr-4 h-6 w-6 border">
                      <AvatarImage src={avatar.image} alt="@shadcn" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
              </TableCell>

              <TableCell className="px-6 py-[22px]">
                <span
                  className={cn(
                    'bg-card text-icon-active rounded-sm px-1 py-0.5 text-xs',
                    item.status === 'Confirmed' ? 'text-emerald-500' : item.status === 'Rejected' && 'text-red-500'
                  )}
                >
                  {item.status}
                </span>
              </TableCell>

              <TableCell className="px-6 py-[22px]">{item.createdAt}</TableCell>
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
    status: 'Live Now',
    status_type: 'success',
    title: 'Valentine Day',
    createdAt: '14th February, 2022',
    duration: '14 Feb - 21 Feb, 2022',
    image: '/assets/images/thumbnail/6.png',
    avatars: [
      { id: nanoid(), image: 'https://github.com/shadcn.png' },
      { id: nanoid(), image: 'https://github.com/shadcn.png' },
      { id: nanoid(), image: 'https://github.com/shadcn.png' },
      { id: nanoid(), image: 'https://github.com/shadcn.png' },
      { id: nanoid(), image: 'https://github.com/shadcn.png' },
    ],
  },
  {
    id: nanoid(),
    status: 'Reviewing',
    status_type: 'primary',
    title: 'Mother’s Day',
    createdAt: '2nd April, 2022',
    duration: '2 Apr - 5 Apr, 2022',
    image: '/assets/images/thumbnail/5.png',
    avatars: [
      { id: nanoid(), image: 'https://github.com/shadcn.png' },
      { id: nanoid(), image: 'https://github.com/shadcn.png' },
      { id: nanoid(), image: 'https://github.com/shadcn.png' },
      { id: nanoid(), image: 'https://github.com/shadcn.png' },
      { id: nanoid(), image: 'https://github.com/shadcn.png' },
    ],
  },
  {
    id: nanoid(),
    status: 'Paused',
    status_type: 'warning',
    title: 'Cyber Monday',
    createdAt: '17th January, 2022',
    duration: '17 Jan - 21 Jan, 2022',
    image: '/assets/images/thumbnail/4.png',
    avatars: [
      { id: nanoid(), image: 'https://github.com/shadcn.png' },
      { id: nanoid(), image: 'https://github.com/shadcn.png' },
      { id: nanoid(), image: 'https://github.com/shadcn.png' },
      { id: nanoid(), image: 'https://github.com/shadcn.png' },
      { id: nanoid(), image: 'https://github.com/shadcn.png' },
    ],
  },
]

export default AllCampaigns
