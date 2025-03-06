import { cn } from '@/lib/utils'
import { Link, usePage } from '@inertiajs/react'
import { ComponentProps } from 'react'

type AnchorProps = ComponentProps<typeof Link> & {
  absolute?: boolean
  activeClassName?: string
  disabled?: boolean
}

export default function Anchor({ absolute, className = '', activeClassName = '', disabled, children, ...props }: AnchorProps) {
  // Use Inertia's `usePage` hook to get the current route
  const { url } = usePage()

  // Determine if the current route matches the link's href
  const isMatch = absolute ? props.href.toString().split('/')[1] === url.split('/')[1] : url === props.href

  // If the link is disabled, render a div instead
  if (disabled) {
    return <div className={cn(className, 'cursor-not-allowed')}>{children}</div>
  }

  // Render the Inertia Link component
  return (
    <Link className={cn(className, isMatch && activeClassName)} {...props}>
      {children}
    </Link>
  )
}
