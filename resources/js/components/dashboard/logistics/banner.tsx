import ThemeBasedImage from '@/components/theme-based-image'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

type Props = HTMLAttributes<HTMLDivElement>

const Banner = ({ className, ...props }: Props) => {
  return (
    <Card className={cn(className, 'grid grid-cols-1 items-center gap-12 p-6 lg:grid-cols-2')} {...props}>
      <div className="flex justify-center lg:justify-end">
        <ThemeBasedImage
          width={246}
          height={246}
          lightSrc="/assets/svg/global-transport-light.svg"
          darkSrc="/assets/svg/global-transport-dark.svg"
          alt="shadcnkit"
        />
      </div>

      <div>
        <p className="text-xl font-semibold">Logistics is simple but not easy.</p>
        <p className="text-secondary-foreground text-sm">The information about package is as important as the delivery package itself.</p>

        <div className="mt-16 flex flex-wrap gap-4">
          <Button className="px-4">Start Now</Button>
          <Button className="px-4" variant="secondary">
            Quick Guide
          </Button>
        </div>
      </div>
    </Card>
  )
}

export default Banner
