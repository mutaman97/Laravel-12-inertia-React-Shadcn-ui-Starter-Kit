import Dribble from '@/components/icons/dribble'
import Facebook from '@/components/icons/facebook'
import Github from '@/components/icons/github'
import Linkedin from '@/components/icons/linkedin'
import Twitter from '@/components/icons/twitter'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'
import { cn } from '@/lib/utils'
import { MoreHorizontal } from 'lucide-react'
import { nanoid } from 'nanoid'
import { HTMLAttributes } from 'react'

type Props = HTMLAttributes<HTMLDivElement>

const AllChannels = ({ className, ...props }: Props) => {
  return (
    <Card className={cn('', className)} {...props}>
      <div className="flex justify-between p-6 pb-5">
        <div>
          <p className="mb-1 text-lg font-medium">All Channels</p>
          <p className="text-secondary-foreground text-xs">Users from all channels</p>
        </div>

        <Button variant="secondary" size="icon" className="h-8 w-8 rounded-md">
          <MoreHorizontal className="text-icon h-4 w-4" />
        </Button>
      </div>

      <Table>
        <TableBody>
          {DATA.map(({ id, title, subtitle, Icon, value }) => (
            <TableRow key={id} className="border-none text-sm font-medium">
              <TableCell className="px-6 py-3.5">
                <div className="flex items-center gap-2">
                  <Icon className="text-icon-active h-11 w-11" />
                  <div>
                    <p className="font-semibold">{title}</p>
                    <p className="mt-1 text-xs">{subtitle}</p>
                  </div>
                </div>
              </TableCell>

              <TableCell className="px-6 py-3.5 text-end">
                <span className={cn('bg-card rounded-sm px-1 py-0.5 text-xs font-medium', value < 0 ? 'text-red-500' : 'text-emerald-500')}>
                  +2.19%
                </span>
              </TableCell>
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
    value: 4.67,
    id: nanoid(),
    title: 'Twitter',
    subtitle: 'Social Media',
    Icon: Twitter,
  },
  {
    value: 3.37,
    error: true,
    id: nanoid(),
    title: 'Linked In',
    subtitle: 'Social Media',
    Icon: Linkedin,
  },
  {
    value: 2.19,
    id: nanoid(),
    title: 'Dribble',
    subtitle: 'Community',
    Icon: Dribble,
  },
  {
    value: 2.68,
    error: true,
    id: nanoid(),
    title: 'Facebook',
    subtitle: 'Social Media',
    Icon: Facebook,
  },
  {
    value: 3.33,
    id: nanoid(),
    title: 'Instagram',
    subtitle: 'Community',
    Icon: Github,
  },
]

export default AllChannels
