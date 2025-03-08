import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { cn } from '@/lib/utils'
import { MoreHorizontal } from 'lucide-react'
import { nanoid } from 'nanoid'
import { DivProps } from 'react-html-props'

const TopQueries = ({ className, ...props }: DivProps) => {
  return (
    <div className={cn('border-border rounded-2xl border shadow', className)} {...props}>
      <div className="flex items-start justify-between p-6">
        <div>
          <h6 className="mb-1 text-lg font-medium">Top Queries</h6>
          <p className="text-secondary-foreground text-sm">Counted in Millions</p>
        </div>

        <Button variant="secondary" size="icon" className="h-8 w-8">
          <MoreHorizontal className="text-icon h-4 w-4" />
        </Button>
      </div>

      <Table className="mb-6">
        <TableHeader>
          <TableRow className="text-secondary-foreground text-sm font-medium">
            <TableHead className="px-6 py-2">PAGES</TableHead>
            <TableHead className="px-6 py-2">CLICKS</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {queries.map(item => (
            <TableRow key={item.id} className="border-border text-sm font-medium">
              <TableCell className="text-secondary-foreground px-6 py-5">{item.keyword}</TableCell>

              <TableCell className="max-w-[240px] min-w-[240px] px-6 py-5">
                <div className="flex items-center justify-between">
                  <p className="w-16 font-semibold">{item.click}</p>

                  <Progress value={item.value} className="bg-card [&>div]:bg-icon-muted h-2 w-[calc(100%-64px)]" />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

const queries = [
  { id: nanoid(), keyword: 'Admin Dashboard', click: 1369, value: 90 },
  { id: nanoid(), keyword: 'Top Admin Dashboard', click: 1003, value: 80 },
  { id: nanoid(), keyword: 'Admin Panel', click: 1987, value: 95 },
  { id: nanoid(), keyword: 'Analytics Dashboard', click: 1462, value: 85 },
  { id: nanoid(), keyword: 'Minimal Dashboard', click: 986, value: 75 },
  { id: nanoid(), keyword: 'Clean UI Template', click: 1028, value: 90 },
  { id: nanoid(), keyword: 'Logistics Dashboard', click: 369, value: 87 },
]

export default TopQueries
