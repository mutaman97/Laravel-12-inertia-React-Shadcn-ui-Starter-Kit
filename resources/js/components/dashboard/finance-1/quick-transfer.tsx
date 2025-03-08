import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { cn } from '@/lib/utils'

const QuickTransfer = ({ className }: { className?: string }) => {
  return (
    <Card className={cn('p-6', className)}>
      <p className="text-lg font-medium">Quick Transfer</p>

      <div className="bg-card border-border my-3.5 flex h-10 items-center rounded-lg border px-4 shadow">
        <Input type="number" placeholder="4436 2548 2654 236" className="border-none bg-transparent pl-0 focus:!ring-0 focus:!ring-offset-0" />

        <Select>
          <SelectTrigger className="h-5 w-20 rounded-none border-y-0 border-r-0 !border-l border-gray-200 bg-transparent p-0 pl-3 focus:!ring-0 focus:!ring-offset-0">
            <SelectValue placeholder="Card" />
          </SelectTrigger>
          <SelectContent className="min-w-20">
            <SelectGroup>
              <SelectItem className="px-6" value="visa">
                Visa
              </SelectItem>
              <SelectItem className="px-6" value="master">
                Master
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center justify-center gap-4 lg:justify-start">
        <Button>Send Money</Button>
        <Button variant="secondary" className="text-muted-foreground">
          Save Draft
        </Button>
      </div>
    </Card>
  )
}

export default QuickTransfer
