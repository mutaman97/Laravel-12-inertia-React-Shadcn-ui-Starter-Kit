'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Check, Copy } from 'lucide-react'
import { useEffect, useState } from 'react'

interface Props {
  content: string
  className?: string
}

const CodeCopy = ({ content, className }: Props) => {
  const [isCopy, setIsCopy] = useState(false)

  const handleCopy = async () => {
    try {
      setIsCopy(true)
      await navigator.clipboard.writeText(content)
    } catch (error) {
      setIsCopy(false)
    }
  }

  useEffect(() => {
    if (isCopy) setTimeout(() => setIsCopy(false), 1000)
  }, [isCopy])

  return (
    <Button size="icon" variant="secondary" onClick={handleCopy} className={cn('h-8 w-8', className)}>
      {isCopy ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
    </Button>
  )
}

export default CodeCopy
