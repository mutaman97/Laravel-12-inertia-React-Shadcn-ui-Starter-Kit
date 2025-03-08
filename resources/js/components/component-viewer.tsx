import CodeCopy from '@/components/code-copy'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React, { lazy, Suspense } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'

// Lazy load the ComponentLoader
const ComponentLoader = lazy(() => import('@/components/component-loader'))

interface Props {
  title: string
  description?: string
  componentPath: string
  Component: (props: React.HTMLAttributes<HTMLDivElement>) => JSX.Element
}

const ComponentViewer: React.FC<Props> = props => {
  const { title, description, Component, componentPath } = props

  // Fetch the source code from the backend (Laravel)
  const [sourceCode, setSourceCode] = React.useState<string>('')

  React.useEffect(() => {
    fetch(componentPath) // the error is in this line
      .then(response => response.text())
      .then(data => setSourceCode(data))
      .catch(error => console.error('Failed to load source code:', error))
  }, [componentPath])

  return (
    <div>
      <h6 className="text-xl font-semibold">{title}</h6>
      {description && <p className="text-secondary-foreground mt-2 text-sm">{description}</p>}

      <Tabs defaultValue="Preview" className="border-border mt-4 overflow-hidden rounded-2xl border shadow">
        <TabsList className="grid h-14 w-full grid-cols-2 rounded-2xl rounded-b-none px-2.5">
          <TabsTrigger value="Preview" className="rounded-none rounded-tl-xl">
            Preview
          </TabsTrigger>
          <TabsTrigger value="Code" className="rounded-none rounded-tr-xl">
            Code
          </TabsTrigger>
        </TabsList>

        <TabsContent value="Preview" className="mt-0 p-4">
          <Suspense fallback={<p className="text-center">Loading...</p>}>
            <ComponentLoader ChildComponent={<Component />} />
          </Suspense>
        </TabsContent>

        <TabsContent value="Code" className="mt-0">
          <ScrollArea className="code-result relative h-[400px]">
            <CodeCopy content={sourceCode} className="absolute top-4 right-4" />

            <SyntaxHighlighter style={dracula} language="tsx" showLineNumbers>
              {sourceCode}
            </SyntaxHighlighter>

            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default ComponentViewer
