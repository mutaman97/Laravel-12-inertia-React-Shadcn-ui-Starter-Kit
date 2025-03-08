import Dribble from '@/components/icons/dribble'
import Facebook from '@/components/icons/facebook'
import Github from '@/components/icons/github'
import Linkedin from '@/components/icons/linkedin'
import Twitter from '@/components/icons/twitter'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { DivProps } from 'react-html-props'

const Footer = ({ className, ...props }: DivProps) => {
  return (
    <div
      className={cn('border-border flex flex-col items-center justify-between gap-10 rounded-2xl border p-6 shadow md:flex-row', className)}
      {...props}
    >
      <div>
        <p className="text-xl font-semibold">ShadcnKit Admin Template</p>
        <p className="text-secondary-foreground text-sm">Clean UI design & Well documentation</p>
        <Button className="mt-4 px-7">Buy Now</Button>
      </div>
      <div>
        <ul className="text-secondary-foreground flex flex-col items-center justify-between gap-7 text-sm font-medium md:flex-row">
          <li>About</li>
          <li>Support</li>
          <li>Terms & Conditions</li>
        </ul>
        <div className="mt-5 flex items-center justify-center gap-4 md:justify-end">
          <Twitter className="text-icon-muted hover:text-primary h-4 w-4" />
          <Linkedin className="text-icon-muted hover:text-primary h-4 w-4" />
          <Facebook className="text-icon-muted hover:text-primary h-4 w-4" />
          <Dribble className="text-icon-muted hover:text-primary h-4 w-4" />
          <Github className="text-icon-muted hover:text-primary h-4 w-4" />
        </div>
      </div>
    </div>
  )
}

export default Footer
